// import Link from "next/link";
"use client";
import { useLayoutEffect } from "react";
import ScreenEffect from "../../libs/screen-effect";

export default function Home() {
  useLayoutEffect(() => {
    const config = {
      effects: {
        roll: {
          enabled: false,
          options: {
            speed: 1000,
          },
        },
        vignette: { enabled: true },
        scanlines: { enabled: true },
        vcr: {
          enabled: true,
          options: {
            opacity: 1,
            miny: 220,
            miny2: 220,
            num: 70,
            fps: 60,
          },
        },
        wobbley: { enabled: true },
        snow: {
          enabled: true,
          options: {
            opacity: 0.2,
          },
        },
      },
    };

    const screen = new ScreenEffect("#screen", {});

    setTimeout(() => {
      for (const prop in config.effects) {
        if (!!(config.effects as any)[prop].enabled) {
          screen.add(prop, (config.effects as any)[prop].options);
        }
      }
    }, 1000);
  }, []);
  return (
    <div id="screen">
      <h1 className="text-3xl font-bold text-black">Frastio Agustian</h1>
      <p className="text-xl">- Web Developer -</p>
      <div className="flex gap-4 text-white text-sm">
        <a href="https://github.com/frastio10" target="_blank">
          GitHub
        </a>
        <a href="mailto:hi@frast.dev">Email</a>
        <a href="https://id.linkedin.com/in/frastio-agustian" target="_blank">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
