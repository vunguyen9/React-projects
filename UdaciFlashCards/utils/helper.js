import { AsyncStorage } from "react-native"
import { Notifications } from "expo"
import * as Permissions from "expo-permissions";

const STORAGE_KEY = "NOTIFICATION"
const NOTIFICATION_STUDY_REMINDER_KEY = "Flashcards:NotificationsStudyReminder"


function createNotification() {
  return {
    title: "Study with Flashcards",
    body: "📖 Let's study !",
    ios: {
      sound: true,
    },
  }
}

export async function clearLocalNotification() {
  return await AsyncStorage.removeItem(NOTIFICATION_STUDY_REMINDER_KEY).then(Notifications.cancelAllScheduledNotificationsAsync);
}

export async function setLocalNotification() {
  const idx = await AsyncStorage.getItem(NOTIFICATION_STUDY_REMINDER_KEY);
  const data = JSON.parse(idx);

  if (data === null) {
    const permissionsNotifications = await Permissions.askAsync(
      Permissions.NOTIFICATIONS
    );
    if (permissionsNotifications.status === "granted") {
      Notifications.cancelAllScheduledNotificationsAsync();

  
      let tomorrow = new Date();
      // tomorrow.setSeconds(tomorrow.getSeconds() + 3)
      tomorrow.setDate(tomorrow.getDate() + 1)
      tomorrow.setHours(12)
      tomorrow.setMinutes(0)

 

      Notifications.scheduleLocalNotificationAsync(createNotification(), {
        time: tomorrow,
        repeat: "day"
      })

   

      AsyncStorage.setItem(
        NOTIFICATION_STUDY_REMINDER_KEY,
        JSON.stringify(true)
      )
    }
  }
}

