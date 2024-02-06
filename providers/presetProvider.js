import React, { createContext, useState } from 'react';
import colorPresets from '@/presets/colors.json';
import Lara from '@/presets/lara';
import Wind from '@/presets/wind';

const PresetContext = createContext();
const { Provider, Consumer: PresetConsumer } = PresetContext;

const { primaryColors, surfaceColors } = colorPresets;

const defaultPreset = {
    name: 'lara',
    config: Lara
};

const PresetProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [preset, setPreset] = useState(defaultPreset);
    const [currentPrimaryColor, setCurrentPrimaryColor] = useState(primaryColors[8]);
    const [currentSurfaceColor, setCurrentSurfaceColor] = useState(surfaceColors[0]);

    const changePreset = (newValue) => {
        const presetName = newValue.toLowerCase();

        switch (presetName) {
            case 'wind':
                setPreset({ name: 'wind', config: Wind });
                break;
            case 'lara':
            default:
                setPreset({ name: 'lara', config: Lara });
                break;
        }
    };

    const withViewTransition = (callback) => {
        if (document?.startViewTransition) {
            document?.startViewTransition(callback);

            return;
        }

        callback();
    };

    const toggleDarkMode = () => {
        const root = document?.documentElement;

        setIsDarkMode((prevState) => {
            if (!prevState) {
                withViewTransition(() => root?.classList?.add('dark'));
            } else {
                withViewTransition(() => root?.classList?.remove('dark'));
            }

            return !prevState;
        });
    };

    const applyTheme = (type, colors) => {
        let increments;

        if (type === 'primary') {
            increments = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
        } else if (type === 'surface') {
            increments = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
        }

        colors.forEach((color, index) => {
            document.documentElement.style.setProperty(`--${type}-${increments[index]}`, color);
        });
    };

    const updatePrimaryColors = (colorName) => {
        const selectedColor = primaryColors.find((color) => color.name === colorName);

        setCurrentPrimaryColor(selectedColor);

        withViewTransition(() => applyTheme('primary', selectedColor.palette));
    };

    const updateSurfaceColors = (colorName) => {
        const selectedColor = surfaceColors.find((color) => color.name === colorName);

        setCurrentSurfaceColor(selectedColor);

        withViewTransition(() => applyTheme('surface', selectedColor.palette));
    };

    return <Provider value={{ isDarkMode, toggleDarkMode, preset, currentPrimaryColor, currentSurfaceColor, changePreset, updatePrimaryColors, updateSurfaceColors }}>{children}</Provider>;
};

export { PresetProvider, PresetConsumer, PresetContext };
