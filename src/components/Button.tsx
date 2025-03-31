import React from 'react';
import {theme} from '../utils/theme';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  View,
} from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  iconOnly?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  leftIcon,
  rightIcon,
  type = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  style,
  textStyle,
  iconOnly = false,
}) => {
  const labelStyles: Array<TextStyle | false | undefined> = [
    styles.text,
    styles[`${type}Text` as keyof typeof styles],
    styles[`${size}Text` as keyof typeof styles],
    disabled ? styles.disabledText : false,
    textStyle,
  ];

  const validLabelStyles = labelStyles.filter(Boolean) as TextStyle[];
  const getStyles = () => {
    let baseStyles = {
      ...styles.container,
      ...styles[`${type}Container` as keyof typeof styles],
      ...styles[`${size}Container` as keyof typeof styles],
    };

    if (fullWidth) {
      baseStyles = {...baseStyles, ...styles.fullWidth};
    }

    if (disabled) {
      baseStyles = {...baseStyles, ...styles.disabledContainer};
    }

    if (style) {
      baseStyles = {...baseStyles, ...(style as object)};
    }

    return baseStyles;
  };
  return (
    <TouchableOpacity
      style={getStyles()}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={type === 'primary' ? '#fff' : '#000'}
        />
      ) : (
        <View style={styles.contentContainer}>
          {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
          {!iconOnly && <Text style={validLabelStyles}>{title}</Text>}
          {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.borderRadius.medium,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  // Type styles
  primaryContainer: {
    backgroundColor: theme.colors.primary,
    borderWidth: 0,
  },
  secondaryContainer: {
    backgroundColor: theme.colors.secondary,
    borderWidth: 0,
  },
  outlineContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.black,
  },
  ghostContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  // Size styles
  smallContainer: {
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm,
  },
  mediumContainer: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
  },
  largeContainer: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
  },
  // Text styles
  text: {
    fontWeight: theme.typography.fontWeight.semibold,
    textAlign: 'center',
  },
  primaryText: {
    color: theme.colors.white,
  },
  secondaryText: {
    color: theme.colors.black,
  },
  outlineText: {
    color: theme.colors.black,
  },
  ghostText: {
    color: theme.colors.black,
  },
  smallText: {
    fontSize: theme.typography.fontSize.small,
  },
  mediumText: {
    fontSize: theme.typography.fontSize.medium,
  },
  largeText: {
    fontSize: theme.typography.fontSize.large,
  },
  // Disabled styles
  disabledContainer: {
    backgroundColor: theme.colors.gray,
    borderColor: theme.colors.gray,
    opacity: 0.5,
  },
  disabledText: {
    color: theme.colors.textSecondary,
  },
  // Icon styles
  iconLeft: {
    marginRight: theme.spacing.xs,
  },
  iconRight: {
    marginLeft: theme.spacing.xs,
  },
});

export default Button;
