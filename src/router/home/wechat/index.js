import messageManagement from './message-management/index'
import responseManagement from './response-management/index'
import userManagement from './user-management/index'
import menuManagement from './menu-management/index'
import groupSendingMessage from './group-sending-message/index'
import wechatConfiguration from './wechat-configuration/index'

export default [
    messageManagement,
    ...responseManagement,
    ...userManagement,
    ...menuManagement,
    ...groupSendingMessage,
    ...wechatConfiguration
]