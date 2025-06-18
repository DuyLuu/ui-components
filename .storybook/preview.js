import React from 'react';
import { mockTheme } from '../src/theme/mock-theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: mockTheme.colors.background,
      },
      {
        name: 'dark',
        value: mockTheme.colors.black,
      },
    ],
  },
};

// Mock React Native components for web rendering
const MockView = ({ style, children, ...props }) => (
  <div 
    style={{ 
      ...style, 
      display: 'flex', 
      flexDirection: style?.flexDirection || 'column',
    }} 
    {...props}
  >
    {children}
  </div>
);

const MockText = ({ style, children, ...props }) => (
  <span style={style} {...props}>{children}</span>
);

const MockTouchableOpacity = ({ style, children, onPress, ...props }) => (
  <button 
    style={{ 
      ...style, 
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      padding: 0,
      margin: 0,
      textAlign: 'left',
    }} 
    onClick={onPress}
    {...props}
  >
    {children}
  </button>
);

const MockImage = ({ source, style, ...props }) => (
  <img 
    src={source?.uri || source} 
    style={style}
    alt={props.alt || ""}
    {...props}
  />
);

// Mock React Native components for web
jest.mock('react-native', () => ({
  View: MockView,
  Text: MockText,
  TouchableOpacity: MockTouchableOpacity,
  Image: MockImage,
  StyleSheet: {
    create: styles => styles,
  },
}));

export const decorators = [
  (Story) => (
    <div style={{ padding: 16 }}>
      <Story />
    </div>
  ),
]; 