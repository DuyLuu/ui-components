import '@testing-library/jest-native/extend-expect';
import 'react-native-gesture-handler/jestSetup';

// Mock react-native modules
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Mock theme provider
jest.mock('@duyluu/ui-theme', () => ({
  useTheme: () => ({
    colors: {
      primary: '#F47D42',
      background: '#F3F8FC',
      text: '#1A1C20',
      light: '#ffffff',
      dark: '#121212',
    },
    spacing: {
      xs: 4,
      s: 8,
      m: 16,
      l: 24,
      xl: 32,
    },
    typography: {
      h1: { fontSize: 32, fontWeight: 'bold' },
      h2: { fontSize: 28, fontWeight: 'bold' },
      h3: { fontSize: 24, fontWeight: 'bold' },
      h4: { fontSize: 20, fontWeight: 'bold' },
      body1: { fontSize: 16, fontWeight: 'normal' },
      body2: { fontSize: 14, fontWeight: 'normal' },
      caption: { fontSize: 12, fontWeight: 'normal' },
    },
  }),
  ThemeProvider: ({ children }) => children,
}));

// Mock the useTheme hook to return the mockTheme
jest.mock('./src/theme/mock-theme', () => {
  const mockTheme = {
    colors: {
      primary: '#007AFF',
      primaryLight: '#4DA3FF',
      primaryDark: '#0051CC',
      secondary: '#5AC8FA',
      secondaryLight: '#8BD8FB',
      secondaryDark: '#2BA6F7',
      success: '#34C759',
      warning: '#FF9500',
      error: '#FF3B30',
      info: '#5AC8FA',
      textPrimary: '#000000',
      textSecondary: '#666666',
      textDisabled: '#999999',
      background: '#FFFFFF',
      backgroundSecondary: '#F8F9FA',
      surface: '#FFFFFF',
      border: '#E1E5E9',
      borderLight: '#F1F3F5',
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
      xxl: 48,
    },
    typography: {
      h1: {
        fontSize: 32,
        lineHeight: 40,
        fontWeight: 'bold',
      },
      h2: {
        fontSize: 28,
        lineHeight: 36,
        fontWeight: 'bold',
      },
      h3: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: '600',
      },
      h4: {
        fontSize: 20,
        lineHeight: 28,
        fontWeight: '600',
      },
      body1: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 'normal',
      },
      body2: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: 'normal',
      },
      caption: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: 'normal',
      },
    },
  };

  return {
    ...jest.requireActual('./src/theme/mock-theme'),
    useTheme: () => mockTheme,
    mockTheme,
  };
});

// Create a mock for the Image component
jest.mock('react-native', () => {
  const rn = jest.requireActual('react-native');
  
  rn.Image.resolveAssetSource = jest.fn(() => ({ uri: 'mock-image-uri' }));
  
  return rn;
}); 