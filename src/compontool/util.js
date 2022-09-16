// Notification 通知
import { ElNotification } from 'element-plus'

export const prompt = (message,type,dangerouslyUseHTMLString=false) => {
  ElNotification({
    title: '提示',
    message,
    type,
    dangerouslyUseHTMLString,
    duration: 3000,
  })
}
