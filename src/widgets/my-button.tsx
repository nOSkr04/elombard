import { Colors } from "../constants/colors";
import {
  View,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { MediumText, SemiBoldText } from "./styled-text";

type Props = {
  title?: string | null;
  onPress?: () => void;
  type?: "default" | "primary" | "text";
  size?: "small" | "medium" | "large"; // 34 | 38 | 42
  icon?: JSX.Element;
  loading?: boolean;
  disabled?: boolean;
  circle?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const MyButton = React.memo(
  ({
    title = null,
    onPress,
    type = "default",
    size = "medium",
    icon,
    loading = false,
    disabled = false,
    circle = false,
    style,
    textStyle,
  }: Props) => {
    const _ButtonStyles: StyleProp<TextStyle>[] = [
      buttonStyles.button,
      sizeStyles[size],
    ];
    const _TextStyles: StyleProp<TextStyle>[] = [textStyles.button];

    if (type === "default") {
      _ButtonStyles.push(buttonStyles.default);
    } else if (type === "primary") {
      _ButtonStyles.push(buttonStyles.primary);
    }

    if (disabled) {
      _ButtonStyles.push(buttonStyles.disabled);
    }

    if (title) {
      _ButtonStyles.push(buttonStyles.title);
    } else if (icon) {
      _ButtonStyles.push(iconStyles[size]);
    }

    if (circle) {
      _ButtonStyles.push(buttonStyles.circle);
    }

    if (style) {
      _ButtonStyles.push(style);
    }

    if (type === "default" || type === "text") {
      _TextStyles.push(textStyles.default);
    } else if (type === "primary") {
      _TextStyles.push(textStyles.primary);
    }

    if (textStyle) {
      _TextStyles.push(textStyle);
    }

    return (
      <TouchableOpacity
        disabled={disabled || loading}
        onPress={onPress}
        style={_ButtonStyles}
      >
        {(() => {
          const _IconStyles: StyleProp<TextStyle>[] = [styles.icon];

          if (title) {
            _IconStyles.push(styles.mr5);
          }

          if (loading) {
            return (
              <View style={_IconStyles}>
                <ActivityIndicator size={"large"} />
              </View>
            );
          }

          if (icon) {
            return <View style={_IconStyles}>{icon}</View>;
          }

          return;
        })()}

        {title && <SemiBoldText style={_TextStyles}>{title}</SemiBoldText>}
      </TouchableOpacity>
    );
  }
);

MyButton.displayName = "MyButton";

export { MyButton };

const styles = StyleSheet.create({
  icon: {
    height: 34,
    justifyContent: "center",
    alignItems: "center",
  },
  mr5: {
    marginRight: 5,
  },
});

const textStyles = StyleSheet.create({
  button: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "600",
  },
  default: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "600",
    color: Colors.primary,
  },
  primary: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "600",
    color: Colors.white,
  },
});

const iconStyles = StyleSheet.create({
  small: {
    width: 34,
  },
  medium: {
    width: 38,
  },
  large: {
    width: 42,
  },
});

const sizeStyles = StyleSheet.create({
  small: {
    height: 34,
  },
  medium: {
    height: 38,
  },
  large: {
    height: 42,
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  default: {
    backgroundColor: Colors.gray,
  },
  circle: {
    borderRadius: 360,
  },
  disabled: {
    opacity: 0.5,
  },
  title: {
    paddingHorizontal: 16,
  },
});
