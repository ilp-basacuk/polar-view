export default {
  dark: {
    container: 'text-white bg-transparent',
    open: 'text-white border border-mainblue',
    closed: '',
    prefix: {
      base: 'text-white',
    },
    icon: {
      closed: 'text-white',
      open: 'text-blue-500 transform rotate-180',
      disabled: 'text-gray-400',
    },
    item: {
      base: 'text-sm text-gray-300',
      highlighted: 'text-sm bg-gray-700 text-white hover:bg-softerblue',
      disabled: 'text-sm opacity-50 pointer-events-none',
    },
  },
  states: {
    none: '',
    error: 'ring-red-500',
    valid: 'ring-green-500',
  },
  sizes: {
    base: 'px-2 py-1',
    small: 'px-2 py-1',
  },
};
