import React from "react";
import { View } from "react-native";
import { Button, Container, Logo, Paragraph } from "../../../library";
import { styles } from "./styles";
import Communications from "react-native-communications";

export function Support() {
  return (
    <Container>
      <View style={styles.logoContainer}>
        <Logo size={120} color={"primary"} />
      </View>
      <View style={styles.bodyContainer}>
        <Paragraph
          style={styles.body}
        >{`هدف ما در تسکین آسان نمودن کارها برای شماست تا شما بتوانید تجربه ای عالی از جلسات تراپی خود داشته باشید. در صورت بروز هرگونه مشکل لطفا با قسمت پشتیانی تماس حاصل بفرمائید تا در سریعترین زمان مشکل شما حل شود.`}</Paragraph>
      </View>

      <View style={styles.buttoncontainer}>
        {/* <View style={styles.socialMedia}>
            <IconButton
              Icon={InstagramIcon}
              onPress={() => Communications.web("https://google.com")}
              size={50}
            />
            <IconButton
              Icon={LinkedinIcon}
              onPress={() => Communications.web("https://google.com")}
              size={50}
            />
            <IconButton
              Icon={TelegramIcon}
              onPress={() => Communications.web("http://google.com")}
              size={50}
            />
            <IconButton
              Icon={WebIcon}
              onPress={() => Communications.web("https://taskyn.ir")}
              size={50}
            />
          </View> */}
        <Button
          mode={"contained"}
          rippleColor={"lightGrey"}
          size={"big"}
          onPress={() => Communications.phonecall("09226294277", true)}
        >
          {"تماس با ما"}
        </Button>
      </View>
    </Container>
  );
}
