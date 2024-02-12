import { classNames } from 'primereact/utils';

export default {
    root: ({ props }) => ({
        className: classNames(
            // Display and Position
            'inline-flex',
            'max-w-full',
            'relative',

            // Misc
            { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
        )
    }),
    input: ({ props }) => ({
        root: {
            className: classNames(
                // Display
                'flex flex-auto',

                // Font
                'font-sans leading-none',

                // Colors
                'text-surface-600 dark:text-surface-200',
                'placeholder:text-surface-400 dark:placeholder:text-surface-500',
                'bg-surface-0 dark:bg-surface-900',
                'border border-surface-300 dark:border-surface-600',

                // Spacing
                'm-0 p-3',

                // Shape
                'appearance-none',
                { 'rounded-md': !props.showIcon || props.iconDisplay == 'input' },
                { 'rounded-l-md  flex-1 pr-9': props.showIcon && props.iconDisplay !== 'input' },
                { 'rounded-md flex-1 pr-9': props.showIcon && props.iconDisplay === 'input' },

                // Transitions
                'transition-colors',
                'duration-200',

                // States
                'hover:border-primary-500 dark:hover:border-primary-400',
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50'
            )
        }
    }),
    inputicon: {
        root: {
            className: classNames('absolute top-[50%] -mt-2', 'text-surface-600 dark:text-surface-200', 'right-[.75rem]')
        }
    },
    dropdownbutton: {
        root: {
            className: classNames(
                'relative',

                // Alignments
                'items-center inline-flex text-center align-bottom',

                // Shape
                'rounded-r-md',

                // Size
                'px-4 py-3 leading-none',

                // Colors
                'text-white dark:text-surface-900',
                'bg-primary-500 dark:bg-primary-400',
                'border border-primary-500 dark:border-primary-400',

                // States
                'focus:outline-none focus:outline-offset-0 focus:ring',
                'hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300',
                'focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
            )
        }
    },
    panel: ({ props }) => ({
        className: classNames(
            // Display & Position
            {
                absolute: !props.inline,
                'inline-block': props.inline
            },

            // Size
            { 'w-auto p-2 ': !props.inline },
            { 'min-w-[80vw] w-auto p-2 ': props.touchUI },
            { 'p-2 min-w-full': props.inline },

            // Shape
            'border rounded-lg',
            {
                'shadow-md': !props.inline
            },

            // Colors
            'bg-surface-0 dark:bg-surface-800',
            'border-surface-200 dark:border-surface-700',

            //misc
            { 'overflow-x-auto': props.inline }
        )
    }),
    datepickerMask: {
        className: classNames('fixed top-0 left-0 w-full h-full', 'flex items-center justify-center', 'bg-black bg-opacity-90')
    },
    header: {
        className: classNames(
            //Font
            'font-semibold',

            // Flexbox and Alignment
            'flex items-center justify-between',

            // Spacing
            'p-2',
            'm-0',

            // Shape
            'border-b',
            'rounded-t-md',

            // Colors
            'text-surface-700 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-800',
            'border-surface-200 dark:border-surface-700'
        )
    },
    previousbutton: {
        className: classNames(
            'relative',

            // Flexbox and Alignment
            'inline-flex items-center justify-center',

            // Size
            'w-8 h-8',
            'p-0 m-0',

            // Shape
            'rounded-full',

            // Colors
            'text-surface-600 dark:text-white/70',
            'border-0',
            'bg-transparent',

            // Transitions
            'transition-colors duration-200 ease-in-out',

            // States
            'hover:text-surface-700 dark:hover:text-white/80',
            'hover:bg-surface-100 dark:hover:bg-surface-800/80',

            // Misc
            'cursor-pointer overflow-hidden'
        )
    },
    title: {
        className: classNames(
            // Text
            'leading-8',
            'mx-auto my-0'
        )
    },
    monthTitle: {
        className: classNames(
            // Font
            'text-base leading-5',
            'font-semibold',

            // Colors
            'text-surface-700 dark:text-white/80',

            // Transitions
            'transition duration-200',

            // Spacing
            'p-2',
            'm-0 mr-2',

            // States
            'hover:text-primary-500 dark:hover:text-primary-400',

            // Misc
            'cursor-pointer'
        )
    },
    yearTitle: {
        className: classNames(
            // Font
            'text-base leading-5',
            'font-semibold',

            // Colors
            'text-surface-700 dark:text-white/80',

            // Transitions
            'transition duration-200',

            // Spacing
            'p-2',
            'm-0',

            // States
            'hover:text-primary-500 dark:hover:text-primary-400',

            // Misc
            'cursor-pointer'
        )
    },
    nextbutton: {
        className: classNames(
            'relative',

            // Flexbox and Alignment
            'inline-flex items-center justify-center',

            // Size
            'w-8 h-8',
            'p-0 m-0',

            // Shape
            'rounded-full',

            // Colors
            'text-surface-600 dark:text-white/70',
            'border-0',
            'bg-transparent',

            // Transitions
            'transition-colors duration-200 ease-in-out',

            // States
            'hover:text-surface-700 dark:hover:text-white/80',
            'hover:bg-surface-100 dark:hover:bg-surface-800/80',

            // Misc
            'cursor-pointer overflow-hidden'
        )
    },
    table: {
        className: classNames(
            // Font
            'text-base leading-none',
            // Size & Shape
            'border-collapse',
            'w-full',

            // Spacing
            'm-0 my-2'
        )
    },
    tableheadercell: {
        className: classNames(
            // Spacing
            'p-0 md:p-2'
        )
    },
    weekheader: {
        className: classNames('leading-5', 'text-surface-600 dark:text-white/70', 'opacity-60 cursor-default')
    },
    weeknumber: {
        className: classNames('text-surface-600 dark:text-white/70', 'opacity-60 cursor-default')
    },
    weekday: {
        className: classNames(
            // Colors
            'text-surface-500 dark:text-white/60'
        )
    },
    day: {
        className: classNames(
            // Spacing
            'p-0 md:p-2'
        )
    },
    weeklabelcontainer: ({ context }) => ({
        className: classNames(
            // Flexbox and Alignment
            'flex items-center justify-center',
            'mx-auto',

            // Shape & Size
            'w-10 h-10',
            'rounded-full',
            'border-transparent border',

            // Colors
            {
                'text-surface-600 dark:text-white/70 bg-transparent': !context.selected && !context.disabled,
                'text-primary-700 bg-primary-100': context.selected && !context.disabled
            },

            // States
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
            {
                'hover:bg-surface-100 dark:hover:bg-surface-800/80': !context.selected && !context.disabled,
                'hover:bg-primary-200': context.selected && !context.disabled
            },
            {
                'opacity-60 cursor-default': context.disabled,
                'cursor-pointer': !context.disabled
            }
        )
    }),
    daylabel: ({ context }) => ({
        className: classNames(
            // Flexbox and Alignment
            'flex items-center justify-center',
            'mx-auto',

            // Shape & Size
            'w-10 h-10',
            'rounded-full',
            'border-transparent border',

            // Colors
            {
                'text-primary-500 dark:text-primary-400': context.date?.today,
                'text-surface-600 dark:text-white/70 bg-transparent': !context.selected && !context.disabled && !context.date?.today,
                'text-primary-700 bg-primary-100 dark:text-surface-0 dark:bg-primary-300/40': context.selected && !context.disabled
            },

            // States
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
            {
                'hover:bg-surface-100 dark:hover:bg-surface-600/80': !context.selected && !context.disabled,
                'hover:bg-primary-200 dark:hover:bg-primary-200/40': context.selected && !context.disabled
            },
            {
                'opacity-60 cursor-default': context.disabled,
                'cursor-pointer': !context.disabled
            }
        )
    }),
    monthpicker: {
        className: classNames(
            // Spacing
            'my-2'
        )
    },
    month: ({ context }) => ({
        className: classNames(
            // Flexbox and Alignment
            'inline-flex items-center justify-center',
            // Size
            'w-1/3',
            'p-2',
            // Shape
            'rounded-md',
            // Colors
            {
                'text-surface-600 dark:text-white/70 bg-transparent': !context.selected && !context.disabled,
                'text-primary-700 bg-primary-100 dark:text-surface-0 dark:bg-primary-300/40': context.selected && !context.disabled
            },
            // States
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
            {
                'hover:bg-surface-100 dark:hover:bg-surface-600/80': !context.selected && !context.disabled,
                'hover:bg-primary-200 dark:hover:bg-primary-200/40': context.selected && !context.disabled
            },
            // Misc
            'cursor-pointer'
        )
    }),
    yearpicker: {
        className: classNames(
            // Spacing
            'my-2'
        )
    },
    year: ({ context }) => ({
        className: classNames(
            // Flexbox and Alignment
            'inline-flex items-center justify-center',
            // Size
            'w-1/3',
            'p-2',
            // Shape
            'rounded-md',
            // Colors
            {
                'text-surface-600 dark:text-white/70 bg-transparent': !context.selected && !context.disabled,
                'text-primary-700 bg-primary-100 dark:text-surface-0 dark:bg-primary-300/40': context.selected && !context.disabled
            },
            // States
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
            {
                'hover:bg-surface-100 dark:hover:bg-surface-600/80': !context.selected && !context.disabled,
                'hover:bg-primary-200 dark:hover:bg-primary-200/40': context.selected && !context.disabled
            },
            // Misc
            'cursor-pointer'
        )
    }),
    timepicker: {
        className: classNames(
            // Flexbox
            'flex',
            'justify-center items-center',

            // Borders
            'border-t-1',
            'border-solid border-surface-200',

            // Spacing
            'p-2'
        )
    },
    separatorcontainer: {
        className: classNames(
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        )
    },
    separator: {
        className: classNames(
            // Text
            'text-xl'
        )
    },
    hourpicker: {
        className: classNames(
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        )
    },
    minutepicker: {
        className: classNames(
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        )
    },
    secondPicker: {
        className: classNames(
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        )
    },
    ampmpicker: {
        className: classNames(
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        )
    },
    incrementbutton: {
        className: classNames(
            'relative',

            // Flexbox and Alignment
            'inline-flex items-center justify-center',

            // Size
            'w-8 h-8',
            'p-0 m-0',

            // Shape
            'rounded-full',

            // Colors
            'text-surface-600 dark:text-white/70',
            'border-0',
            'bg-transparent',

            // Transitions
            'transition-colors duration-200 ease-in-out',

            // States
            'hover:text-surface-700 dark:hover:text-white/80',
            'hover:bg-surface-100 dark:hover:bg-surface-800/80',

            // Misc
            'cursor-pointer overflow-hidden'
        )
    },
    decrementbutton: {
        className: classNames(
            'relative',

            // Flexbox and Alignment
            'inline-flex items-center justify-center',

            // Size
            'w-8 h-8',
            'p-0 m-0',

            // Shape
            'rounded-full',

            // Colors
            'text-surface-600 dark:text-white/70',
            'border-0',
            'bg-transparent',

            // Transitions
            'transition-colors duration-200 ease-in-out',

            // States
            'hover:text-surface-700 dark:hover:text-white/80',
            'hover:bg-surface-100 dark:hover:bg-surface-800/80',

            // Misc
            'cursor-pointer overflow-hidden'
        )
    },
    groupcontainer: {
        className: classNames(
            // Flexbox
            'flex'
        )
    },
    group: {
        className: classNames(
            // Flexbox and Sizing
            'flex-1',

            // Borders
            'border-l',
            'border-surface-200',

            // Spacing
            'pr-0.5',
            'pl-0.5',
            'pt-0',
            'pb-0',

            // Pseudo-Classes
            'first:pl-0',
            'first:border-l-0'
        )
    },
    buttonbar: {
        className: classNames(
            // Flexbox
            'flex justify-between items-center',

            // Spacing
            'py-3 px-0',

            // Shape
            'border-t border-surface-200 dark:border-surface-700'
        )
    },
    todaybutton: {
        root: {
            className: classNames(
                // Flexbox and Alignment
                'inline-flex items-center justify-center',

                // Spacing
                'px-4 py-3 leading-none',

                // Shape
                'rounded-md',

                // Colors
                'bg-transparent border-transparent',
                'text-primary-500 dark:text-primary-400',

                // Transitions
                'transition-colors duration-200 ease-in-out',

                // States
                'focus:outline-none focus:outline-offset-0 focus:ring',
                'hover:bg-primary-300/20',

                // Misc
                'cursor-pointer'
            )
        }
    },
    clearbutton: {
        root: {
            className: classNames(
                // Flexbox and Alignment
                'inline-flex items-center justify-center',

                // Spacing
                'px-4 py-3 leading-none',

                // Shape
                'rounded-md',

                // Colors
                'bg-transparent border-transparent',
                'text-primary-500 dark:text-primary-400',

                // Transitions
                'transition-colors duration-200 ease-in-out',

                // States
                'focus:outline-none focus:outline-offset-0 focus:ring',
                'hover:bg-primary-300/20',

                // Misc
                'cursor-pointer'
            )
        }
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
