import React from "react";
import { ScrollView, View } from "react-native";
import { Logo, Paragraph } from "../../../library";
import { Questions } from "../../components/Questions";
import { styles } from "./styles";

export function FAQ() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.questionsContainer}
    >
      <View style={styles.logoContainer}>
        <Logo size={120} color={"primary"} />
      </View>
      <View style={styles.container}>
        <Questions
          question={
            "۱- آیا میتوانم به جز دکتر خودم همزمان به چند دکتر دیگر نیز متصل باشم؟"
          }
          answer={"خیر، شما همزمان میتوانید فقط به یک دکتر متصل باشید"}
          line={true}
        />
        <Questions
          question={
            "۲- در صورت تغییر دکتر، اطلاعات بیمار به دکتر جدید انتقال پیدا میکند؟"
          }
          answer={
            "بله، اطلاعاتی مانند پرونده بیمار و تاریخچه تست ها به دکتر جدید انتقال پیدا می کند. "
          }
          line={true}
        />
        <Questions
          question={
            "۳- امکان از دست رفتن اطلاعات مانند تاریخچه تست ها وجود دارد؟"
          }
          answer={"خیر، اطلاعات شما به صورت دائمی در سیستم ثبت می شود"}
          line={true}
        />
        <Questions
          question={"۴- برای استفاده از تست های اپلیکیشن نیاز به پرداخت است؟"}
          answer={
            "خیر، تمامی تست ها به همراه سیستم محاسبه نتایج، کاملا رایگان هستند."
          }
          line={true}
        />
        <Questions
          question={
            "۵- برای ثبت نام به عنوان دکتر باید چکار کنم؟"
          }
          answer={"با پشتیبانی اپلیکیشن تماس بگیرید."}
          line={false}
        />
      </View>
    </ScrollView>
  );
}
