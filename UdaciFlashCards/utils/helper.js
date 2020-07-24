import { AsyncStorage } from "react-native"
import { Notifications } from "expo"

import * as Permissions from "expo-permissions"
import { primary } from "./colors"

const STORAGE_KEY = "NOTIFICATION";
const NOTIFICATION_CHANNEL_ID = "QUICK_REMAINDERS"

export function clearLocalNotification() {
  return AsyncStorage.removeItem(STORAGE_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  )
}

function sendNotification() {
  return {
    title: "Flashcards",
    body: "📖 Let's study today!",
    ios: {
      sound: true,
    },
    android: {
      channelId: NOTIFICATION_CHANNEL_ID,
      sticky: false,
      color: primary,
    },
  };
}

function createNotificationChannel() {
  return {
    name: "Daily Reminder",
    description: "A daily remainder to keep you tracked",
    sound: true,
    priority: "high",
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(STORAGE_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.createChannelAndroidAsync(
              NOTIFICATION_CHANNEL_ID,
              createNotificationChannel()
            )
              .then(() => {
                Notifications.cancelAllScheduledNotificationsAsync()

                const nextDay = new Date()

                // nextDay.setSeconds(nextDay.getSeconds() + 3)
                nextDay.setDate(nextDay.getDate() + 1)
                nextDay.setHours(20)
                nextDay.setMinutes(0)


                Notifications.scheduleLocalNotificationAsync(
                  sendNotification(),
                  {
                    time: nextDay,
                    repeat: "day",
                  }
                )

                AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(true))
              })
              .catch((error) => {
                console.log("error", error)
              })
          }
        })
      }
    })
}
