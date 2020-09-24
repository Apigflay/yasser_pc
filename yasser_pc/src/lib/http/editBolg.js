import {Get,Post} from "../js/GlobalFunction.js"

//登录get 
export const getLoginResultGet = (p,q) => Get(p,q)//'UserInfo/getPlayBackLiveUrl'

//登录post
export const getLoginResultPost = (p,q) => Post(p,q)//'UserInfo/getPlayBackLiveUrl'
















// 通过密码获取流地址
export const getPlayBackLiveUrl = (p) => Post(p,'UserInfo/getPlayBackLiveUrl')


// 新增收获地址  编辑收获地址 aid : 111
export const addAdress = (p,aid) => Post1(p,aid,'/member/api/memberInternal/editAddress')
// 删除收获地址  112
export const deleteAdress = (p,aid,url) => Delete1(p,aid,url)