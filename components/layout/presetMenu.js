import { PrimeReactContext } from 'primereact/api';
import { InputSwitch } from 'primereact/inputswitch';
import { classNames } from 'primereact/utils';
import { useContext } from 'react';
import colorPresets from '@/presets/colors.json';
import { PresetContext } from '@/providers/presetProvider';

const PresetMenu = () => {
    const { ripple, setRipple } = useContext(PrimeReactContext);
    const { primaryColors, surfaceColors } = colorPresets;
    const {
        preset: { name: preset },
        changePreset,
        currentPrimaryColor,
        currentSurfaceColor,
        updatePrimaryColors,
        updateSurfaceColors
    } = useContext(PresetContext);

    const isLara = preset === 'lara';
    const isWind = preset === 'wind';

    return (
        <div className="absolute hidden top-[2.5rem] right-0 w-[14rem] p-3 bg-white dark:bg-surface-800 rounded-md shadow border border-surface-200 dark:border-surface-700 flex-col justify-start items-start gap-3.5 inline-flex origin-top">
            <div className="flex-col justify-start items-start gap-2 inline-flex w-full">
                <span className="text-black dark:text-surface-0 text-sm font-medium">Preset</span>
                <div className="custom-selectbutton inline-flex p-[0.28rem] items-start gap-[0.28rem] rounded-[0.71rem] border border-[#00000003] bg-surface-100 dark:bg-surface-900 w-full">
                    <button
                        type="button"
                        className={classNames(
                            'px-[0.5rem] w-full tracking-tight py-[0.3rem] leading-none rounded-md text-surface-900 dark:text-surface-0 hover:bg-surface-50 dark:hover:bg-surface-800 focus:outline-none duration-200 transition-[backgroundColor]',
                            {
                                'shadow bg-surface-0 dark:bg-surface-800 dark:shadow-[inset_0px_1px_0px_0px_var(--surface-800)]': isLara,
                                'bg-surface-100 dark:bg-surface-900': !isLara
                            }
                        )}
                        onClick={() => changePreset('lara')}
                    >
                        Lara
                    </button>
                    <button
                        type="button"
                        className={classNames(
                            'px-[0.5rem] w-full tracking-tight py-[0.3rem] leading-none rounded-md text-surface-900 dark:text-surface-0 hover:bg-surface-50 dark:hover:bg-surface-800 focus:outline-none duration-200 transition-[backgroundColor',
                            {
                                'shadow bg-surface-0 dark:bg-surface-800 dark:shadow-[inset_0px_1px_0px_0px_var(--primary-400)]': isWind,
                                'bg-surface-100 dark:bg-surface-900': !isWind
                            }
                        )}
                        onClick={() => changePreset('wind')}
                    >
                        Wind
                    </button>
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex pr-4">
                <span className="text-black dark:text-surface-0 text-sm font-medium">Primary Colors</span>
                <div className="self-stretch justify-start items-start gap-2 inline-flex flex-wrap">
                    {primaryColors.map((primaryColor) => (
                        <button
                            type="button"
                            key={primaryColor.name}
                            className={classNames('w-4 h-4 rounded-full cursor-pointer', {
                                'ring-2 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-800 ring-primary-500': primaryColor.name === currentPrimaryColor.name
                            })}
                            style={{ backgroundColor: `rgb(${primaryColor.palette[5]})` }}
                            onClick={() => updatePrimaryColors(primaryColor.name)}
                        ></button>
                    ))}
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex pr-2">
                <span className="text-black dark:text-surface-0 text-sm font-medium">Surface Colors</span>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    {surfaceColors.map((surface) => (
                        <button
                            type="button"
                            key={surface.name}
                            className={classNames('w-4 h-4 rounded-full cursor-pointer', {
                                'ring-2 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-800 ring-surface-500': surface.name === currentSurfaceColor.name
                            })}
                            style={{ backgroundColor: `rgb(${surface.palette[6]})` }}
                            onClick={() => updateSurfaceColors(surface.name)}
                        ></button>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center gap-2 w-full pt-4 pb-2 border-t border-surface-200 dark:border-surface-700">
                <span className="text-black dark:text-surface-0 text-sm font-medium m-0">Ripple Effect</span>
                <InputSwitch checked={ripple} onChange={(e) => setRipple(e.value)} />
            </div>
        </div>
    );
};

export default PresetMenu;
