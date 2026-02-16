"use client";
import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { cn } from "../lib/utils";

const hexToRgbNormalized = (hex: string): [number, number, number] => {
    let r = 0, g = 0, b = 0;
    const cleanHex = hex.startsWith("#") ? hex.slice(1) : hex;

    if (cleanHex.length === 3) {
        r = parseInt(cleanHex[0] + cleanHex[0], 16);
        g = parseInt(cleanHex[1] + cleanHex[1], 16);
        b = parseInt(cleanHex[2] + cleanHex[2], 16);
    } else if (cleanHex.length === 6) {
        r = parseInt(cleanHex.substring(0, 2), 16);
        g = parseInt(cleanHex.substring(2, 4), 16);
        b = parseInt(cleanHex.substring(4, 6), 16);
    } else {
        console.warn(`Invalid hex color: ${hex}. Falling back to black.`);
        return [0, 0, 0];
    }
    return [r / 255, g / 255, b / 255];
};

interface GlobeProps {
    className?: string;
    theta?: number;
    dark?: number;
    scale?: number;
    diffuse?: number;
    mapSamples?: number;
    mapBrightness?: number;
    baseColor?: [number, number, number] | string;
    markerColor?: [number, number, number] | string;
    glowColor?: [number, number, number] | string;
}

const Globe: React.FC<GlobeProps> = ({
    className,
    theta = 0.25,
    dark = 0,
    scale = 1.1,
    diffuse = 1.2,
    mapSamples = 60000,
    mapBrightness = 10,
    baseColor = "#1e293b",
    markerColor = "#3b82f6",
    glowColor = "#1d4ed8",
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
    const phiRef = useRef(0);
    const thetaRef = useRef(theta);
    const isDragging = useRef(false);
    const lastMouseX = useRef(0);
    const lastMouseY = useRef(0);
    const autoRotateSpeed = 0.003;


    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const calculateSize = () => {
            const containerWidth = container.clientWidth;
            const isMobile = window.innerWidth < 768;
            const baseSize = isMobile ? 280 : Math.min(400, containerWidth);
            return Math.min(baseSize, containerWidth);
        };

        const resolvedBaseColor: [number, number, number] =
            typeof baseColor === "string"
                ? hexToRgbNormalized(baseColor)
                : baseColor;

        const resolvedMarkerColor: [number, number, number] =
            typeof markerColor === "string"
                ? hexToRgbNormalized(markerColor)
                : markerColor;

        const resolvedGlowColor: [number, number, number] =
            typeof glowColor === "string"
                ? hexToRgbNormalized(glowColor)
                : glowColor;

        const initGlobe = () => {
            if (globeRef.current) {
                globeRef.current.destroy();
                globeRef.current = null;
            }

            const size = calculateSize();
            const devicePixelRatio = window.devicePixelRatio || 1;
            const pixelSize = size * devicePixelRatio;

            canvas.width = pixelSize;
            canvas.height = pixelSize;
            canvas.style.width = `${size}px`;
            canvas.style.height = `${size}px`;

            globeRef.current = createGlobe(canvas, {
                devicePixelRatio,
                width: pixelSize,
                height: pixelSize,
                phi: phiRef.current,
                theta: thetaRef.current,
                dark,
                scale,
                diffuse,
                mapSamples,
                mapBrightness,
                baseColor: resolvedBaseColor,
                markerColor: resolvedMarkerColor,
                glowColor: resolvedGlowColor,
                opacity: 1,
                offset: [0, 0],
                markers: [],
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onRender: (state: Record<string, any>) => {
                    if (!isDragging.current) {
                        phiRef.current += autoRotateSpeed;
                    }
                    state.phi = phiRef.current;
                    state.theta = thetaRef.current;
                },

            });
        };

        // Mouse handlers
        const onMouseDown = (e: MouseEvent) => {
            isDragging.current = true;
            lastMouseX.current = e.clientX;
            lastMouseY.current = e.clientY;
            canvas.style.cursor = "grabbing";
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!isDragging.current) return;
            const deltaX = e.clientX - lastMouseX.current;
            const deltaY = e.clientY - lastMouseY.current;
            const rotationSpeed = 0.005;

            phiRef.current += deltaX * rotationSpeed;
            thetaRef.current = Math.max(
                -Math.PI / 2,
                Math.min(Math.PI / 2, thetaRef.current - deltaY * rotationSpeed)
            );

            lastMouseX.current = e.clientX;
            lastMouseY.current = e.clientY;
        };

        const onMouseUp = () => {
            isDragging.current = false;
            canvas.style.cursor = "grab";
        };

        // Touch handlers
        const onTouchStart = (e: TouchEvent) => {
            isDragging.current = true;
            lastMouseX.current = e.touches[0].clientX;
            lastMouseY.current = e.touches[0].clientY;
        };

        const onTouchMove = (e: TouchEvent) => {
            if (!isDragging.current) return;
            const deltaX = e.touches[0].clientX - lastMouseX.current;
            const deltaY = e.touches[0].clientY - lastMouseY.current;
            const rotationSpeed = 0.005;

            phiRef.current += deltaX * rotationSpeed;
            thetaRef.current = Math.max(
                -Math.PI / 2,
                Math.min(Math.PI / 2, thetaRef.current - deltaY * rotationSpeed)
            );

            lastMouseX.current = e.touches[0].clientX;
            lastMouseY.current = e.touches[0].clientY;
        };

        const onTouchEnd = () => {
            isDragging.current = false;
        };

        // Initialize and add event listeners
        initGlobe();

        canvas.addEventListener("mousedown", onMouseDown);
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mouseup", onMouseUp);
        canvas.addEventListener("mouseleave", onMouseUp);
        canvas.addEventListener("touchstart", onTouchStart);
        canvas.addEventListener("touchmove", onTouchMove);
        canvas.addEventListener("touchend", onTouchEnd);

        const resizeObserver = new ResizeObserver(() => {
            initGlobe();
        });
        resizeObserver.observe(container);

        // Cleanup
        return () => {
            resizeObserver.disconnect();
            canvas.removeEventListener("mousedown", onMouseDown);
            canvas.removeEventListener("mousemove", onMouseMove);
            canvas.removeEventListener("mouseup", onMouseUp);
            canvas.removeEventListener("mouseleave", onMouseUp);
            canvas.removeEventListener("touchstart", onTouchStart);
            canvas.removeEventListener("touchmove", onTouchMove);
            canvas.removeEventListener("touchend", onTouchEnd);
            if (globeRef.current) {
                globeRef.current.destroy();
            }
        };
    }, [
        theta,
        dark,
        scale,
        diffuse,
        mapSamples,
        mapBrightness,
        baseColor,
        markerColor,
        glowColor,
    ]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative w-full max-w-[320px] md:max-w-[400px] aspect-square mx-auto",
                className
            )}
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full cursor-grab touch-none"
                style={{
                    width: "100%",
                    height: "100%",
                    aspectRatio: "1",
                    display: "block",
                }}
            />
        </div>
    );
};

export default Globe;