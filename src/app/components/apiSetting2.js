(function () {
    'use strict';
    angular
        .module('mmpadmin')
        .factory('apiSetting2', apiSetting);
    var apiParam = {
        oauth2: {
            authorize: {
                name: '请求用户授权 ',
                docUrl: '',
                url: '/oauth2/authorize',
                requestMode: 'get',
                params: [
                    { key: 'app_key', isMust: true, type: 'string', des: '分配到的App Key' },
                    { key: 'redirect_uri', isMust: true, type: 'string', des: '授权回调地址，站外应用需与设置的回调地址一致' },
                    { key: 'state', isMust: false, type: 'string', des: '用于保持请求和回调的状态，在回调时，会在Query Parameter中回传该参数' }
                ]
            },
            access_token: {
                name: '获取授权过的令牌 ',
                docUrl: '',
                url: '/oauth2/access_token',
                requestMode: 'get',
                params: [
                    { key: 'app_key', isMust: true, type: 'string', des: '分配到的App Key' },
                    { key: 'app_secret', isMust: true, type: 'string', des: '分配到的App Secret' },
                    { key: 'grant_type', isMust: true, type: 'string', des: '请求的类型，可以为authorization_code、refresh_token、password' }
                ]
            },
            weixin_login: {
                name: '微信登录',
                docUrl: '/doc/oauth2/weixin_login.html',
                url: '/oauth2/weixin_login',
                requestMode: 'post',
                params: [
                    { key: 'openid', isMust: true, type: 'string', des: '微信唯一ID' },
                    { key: 'unionid', isMust: true, type: 'string', des: '只有在用户将公众号绑定到微信开放平台帐号后，才会出现该字段' },
                    { key: 'nickname', isMust: true, type: 'string', des: '用户昵称' },
                    { key: 'sex', isMust: true, type: 'int', des: '1 男性 2女性 0未知' },
                    { key: 'headimgurl', isMust: true, type: 'string', des: '用户头像' },
                    { key: 'app_key', isMust: true, type: 'string', des: '分配到的App Key' },
                    { key: 'app_secret', isMust: true, type: 'string', des: '分配到的App Secret' }
                ]
            },
            weixin_bind: {
                name: '微信绑定',
                docUrl: '',
                url: '/oauth2/weixin_bind',
                requestMode: 'post',
                params: [
                    { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                    { key: 'state', isMust: true, type: 'string', des: '如果没有绑定过微信登录会返回这个值' },
                    { key: 'unionid', isMust: true, type: 'string', des: '如果没有绑定过微信登录会返回这个值' },
                    { key: 'app_key', isMust: true, type: 'string', des: '分配到的App Key' },
                    { key: 'app_secret', isMust: true, type: 'string', des: '分配到的App Secret' }
                ]
            },
            verifycode: {
                name: '图片验证码(主要用于根据企业号加入网络时)',
                docUrl: '',
                url: '/oauth2/verifycode',
                requestMode: 'get',
                params: [
                    { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                ]
            },
            device: {
                name: '更新当前用户设备号',
                docUrl: '',
                url: '/oauth2/device',
                requestMode: 'post',
                params: [
                    { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                    { key: 'device', isMust: false, type: 'string', des: '设备号（跟reg_id二选一）' },
                    { key: 'reg_id', isMust: false, type: 'string', des: '设备号IOS新的参数' }
                ]
            }
        },
        post: {
            v1: {
                get_all_posts: {
                    name: '获取全公司的动态更新 ',
                    docUrl: '/doc/post/post_detail.html',
                    url: '/post/get_all_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'post_type', isMust: false, type: 'int', des: '筛选动态更新类型,默认-1：表示全部动态；0：普通消息；1：链接；2：图片；3：文档；4：提问；7：投票；8：视频' },
                        { key: 'start_time', isMust: false, type: 'Datetime', des: '开始时间' },
                        { key: 'end_time', isMust: false, type: 'Datetime', des: '结束时间' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新(即比max_id发表时间早的动态更新)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' },
                        { key: 'post_filter_share', isMust: false, type: 'int', des: '动态筛选范围(全部=-1,我收藏的=0,我发布的=1,我自己=2,置顶动态=3,网络=4,群组=5,个人全部=6)' },
                        { key: 'project_id', isMust: false, type: 'string', des: '网络id(当动态筛选范围是网络 该值必填)' },
                        { key: 'group_id', isMust: false, type: 'string', des: '群组id(当动态筛选范围是群组 该值必填)' }

                    ]
                },

                get_post_detail: {
                    name: '根据动态更新编号获取单条动态更新内容',
                    docUrl: '/doc/post/post_detail.html',
                    url: '/post/get_post_detail',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'string', des: '动态更新编号' }
                    ]
                },

                get_group_posts: {
                    name: '获取群组的动态更新',
                    docUrl: '/doc/post/post_detail.html',
                    url: '/post/get_group_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新(即比max_id发表时间早的动态更新)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                get_company_top_posts: {
                    name: '获取可见网络的置顶动态更新',
                    docUrl: '/doc/post/post_detail.html',
                    url: '/post/get_company_top_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'count', isMust: false, type: 'int', des: '获取的数量，默认20' }
                    ]
                },
                get_my_posts: {
                    name: '获取当前登录用户发布的动态更新',
                    docUrl: '/doc/post/post_detail.html',
                    url: '/post/get_my_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'post_type', isMust: false, type: 'int', des: '筛选动态更新类型,默认-1：表示全部动态；0：普通消息；1：链接；2：图片；3：文档；4：提问；7：投票；8：视频' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新(即比max_id发表时间早的动态更新)' },
                        { key: 'since_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比since_id大的动态更新(即比since_id发表时间晚的动态更新)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                get_reply_by_me_posts: {
                    name: '获取我回复的最新回复信息',
                    docUrl: '/doc/post/post_detail.html',
                    url: '/post/get_reply_by_me_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'max_comment_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新(即比max_id发表时间早的动态更新)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                get_post_reply: {
                    name: '根据动态更新编号获取某条动态更新的回复列表信息',
                    docUrl: '/doc/post/post_detail.html',
                    url: '/post/get_post_reply',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'string', des: '动态更新编号' }
                    ]
                },
                get_category_posts: {
                    name: '获取某个话题下的动态更新',
                    docUrl: '/doc/post/post_detail.html',
                    url: '/post/get_category_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'category_id', isMust: true, type: 'string', des: '话题ID' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新(即比max_id发表时间早的动态更新)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100' }
                    ]
                },
                get_user_posts: {
                    name: '获取用户发布的动态更新',
                    docUrl: '/doc/post/post_detail.html',
                    url: '/post/get_user_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: true, type: 'string', des: '用户编号' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新(即比max_id发表时间早的动态更新)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                get_common_categories: {
                    name: '获取常用话题',
                    docUrl: '',
                    url: '/post/get_common_categories',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索' }
                    ]
                },
                update_collect_or_cancle_collect_post: {
                    name: '增加当前登录用户的一条动态更新 收藏/不收藏',
                    docUrl: {type: '', url: ''},
                    url: '/post/update_collect_or_cancle_collect_post',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'string', des: '动态更新编号' },
                        { key: 'is_collect', isMust: false, type: 'bool', des: '操作类型 true 收藏 false 取消收藏' }
                    ]
                },
                add_post_reply: {
                    name: '增加一条动态更新的回复',
                    docUrl: '',
                    url: '/post/add_post_reply',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'string', des: '回复的动态更新编号' },
                        { key: 'reply_id', isMust: false, type: 'string', des: '回复编号(可以对别人的回复进行回复)[可选]' },
                        { key: 'reply_msg', isMust: true, type: 'string', des: '回复的消息内容([aid]accountID[/aid]代表@某个人,[gid]groupID[/gid]代表@某个群组)' },
                        { key: 'attachments', isMust: false, type: 'string', des: '本地附件(attachments:[{"fileSize":文件大小,"serverName":"七牛服务地址","filePath":"文件路径","fileName":"文件名","fileExt":"后缀名","originalFileName":"原文件名","key":"七牛key"}])' },
                        { key: 'comment_type', isMust: false, type: 'int', des: '回复类型' },
                        { key: 'is_share', isMust: false, type: 'bool', des: '同时转发动态(0表示不转发动态；1表示同时转发动态)' },
                        { key: 'group_ids', isMust: false, type: 'string', des: '可为空，动态分享群组编号(多个群组用逗号隔开)' },
                        { key: 'project_ids', isMust: false, type: 'string', des: '可为空，动态分享网络编号(多个群组用逗号隔开)' }
                    ]
                },
                delete_post: {
                    name: '根据动态更新编号删除一条动态更新',
                    docUrl: {type: '', url: ''},
                    url: '/post/delete_post',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'binary', des: '动态更新编号' }
                    ]
                },
                update_like_or_cancle_like_post: {
                    name: '当前登录用户 喜欢/不喜欢 一条动态更新 ',
                    docUrl: {type: '', url: ''},
                    url: '/post/update_like_or_cancle_like_post',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'string', des: '动态更新编号' },
                        { key: 'is_like', isMust: true, type: 'bool', des: 'true 喜欢 false 取消喜欢' }
                    ]
                },
                delete_post_reply: {
                    name: '根据回复编号删除一条回复 *',
                    docUrl: '',
                    url: '/post/delete_post_reply',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'string', des: '动态更新编号' },
                        { key: 'reply_id', isMust: false, type: 'string', des: '回复编号(必须是当前登录用户自己创建的回复' }
                    ]
                },
                top_post: {
                    name: '置顶一条动态更新(仅限网络管理员使用) ',
                    docUrl: {type: '', url: ''},
                    url: '/post/top_post',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'binary', des: '动态更新编号' },
                        { key: 'hour', isMust: false, type: 'int', des: '置顶时长 默认为:不限时长 传多少小时' }
                    ]
                },
                add_post: {
                    name: '发布一条动态更新',
                    docUrl: '',
                    url: '/post/add_post',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_ids', isMust: false, type: 'string', des: '可为空，动态分享群组编号(多个群组用逗号隔开)' },
                        { key: 'project_ids', isMust: false, type: 'string', des: '可为空，动态分享网络编号(多个网络用逗号隔开)' },
                        { key: 'post_msg', isMust: true, type: 'string', des: '动态更新内容([aid]AccountID[/aid]代表@某个人,[gid]groupID[/gid]代表@某个群组，#话题内容#代表给动态增加个话题)' },
                        { key: 'post_type', isMust: true, type: 'int', des: '动态更新类型(0表示普通动态更新(默认值);1表示链接动态更新 ;图片=2,文档=3,提问=4,系统自动=5,应用用户分享=6,投票=7,音视频=8,附件=9)' },
                        { key: 'link_title', isMust: false, type: 'string', des: '动态更新类型是1的时候该值必填 链接标题' },
                        { key: 'link_uri', isMust: false, type: 'string', des: '动态更新类型是1的时候该值必填 链接地址' },
                        { key: 'attachments', isMust: false, type: 'string', des: '本地附件(attachments:[{"fileSize":文件大小,"serverName":"七牛服务地址","filePath":"文件路径","fileName":"文件名","fileExt":"后缀名","originalFileName":"原文件名","key":"七牛key"}])' },
                        { key: 'knowledge_attach', isMust: false, type: 'string', des: '知识附件("refId":"知识id","originalFileName":"原文件名","fileExt":"后缀名","fileSize":文件大小,"allowDown":是否可下载)' },
                        { key: 'vote_options', isMust: false, type: 'string', des: '投票选项：xxx[Option]xx[Option]' },
                        { key: 'vote_anonymous', isMust: false, type: 'bool', des: '是否匿名投票' },
                        { key: 'last_time', isMust: false, type: 'string', des: '投票截止时间' },
                        { key: 'available_number', isMust: false, type: 'int', des: '允许投票次数' },
                        { key: 'vote_option_files', isMust: false, type: 'string', des: '投票图片：如果某选项无图只给[Option]，有图就是 https://dn-mdpic.qbox.me/VoteDoc/pic/201606/03/mdMImCeKkCWLkvT_2027623769.png[Option]' }
                    ]
                },
                get_post_select_groups: {
                    name: '动态发布可选群组的范围',
                    docUrl: '/doc/post/get_post_select_groups.html',
                    url: '/post/get_post_select_groups',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'is_publish', isMust: true, type: 'bool', des: '发布范围 true 筛选范围 false ' }

                    ]
                },
                add_cast_options: {
                    name: '投票',
                    docUrl: '',
                    url: '/post/add_cast_options',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'options', isMust: true, type: 'string', des: '投票选项，如：1|3,表示选择第1、3两项 ' },
                        { key: 'post_id', isMust: true, type: 'string', des: '动态id' }
                    ]
                }
            }
        },
        task: {
            v1: {
                "add_an_invited_member_to_a_task": {
                    "name": "用Email地址或者电话号码邀请一个用户",
                    "docUrl": {type: '', url: ''},
                    "url": "/task/add_an_invited_member_to_a_task",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"},
                        {"key": "invited_member_account", "isMust": true, "type": "string", "des": "被邀请的用户Email或者电话号码，参考格式{\"Email或者电话\":\"用户名\"} 例如： {\"aaa@md.com\":\"aa\"}或者 {\"11111111111\":\"11\" }到某个任务"},
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务id"},
                        {"key": "project_id", "isMust": false, "type": "string", "des": "不填为个人网络"}
                    ]
                },
                "add_members_to_a_task": {
                    "name": "向任务添加多个用户",
                    "docUrl": {type: '', url: ''},
                    "url": "/task/add_members_to_a_task",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"},
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务id"},
                        {"key": "account_ids", "isMust": true, "type": "string", "des": "账户Guid，用英文逗号隔开。"},
                        {"key": "project_id", "isMust": false, "type": "string", "des": "不填为个人网络"}
                    ]
                },
                "add_a_comment_on_folder": {
                    "name": "创建项目",
                    "docUrl": "/doc/task/add_a_comment_on_folder.html",
                    "url": "/task/add_a_comment_on_folder",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"},
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目id"},
                        {"key": "comment_id_to_reply", "isMust": false, "type": "string", "des": "回复的comment填写comment id"},
                        {"key": "account_id_to_reply", "isMust": false, "type": "string", "des": "回复的comment时填写被回复的account id"},
                        {"key": "message", "isMust": true, "type": "string", "des": "comment内容"},
                        {"key": "attachments", "isMust": false, "type": "string", "des": "附件JSON字符串，请参照：[{\"fileSize\":9106,\"serverName\":\"https://dn-mdpic.qbox.me/\",\"filePath\":\"pic/201607/03/\",\"fileName\":\"RLmmTwpSpytNuMX_1601286349\",\"fileExt\":\".jpg\",\"originalFileName\":\"u=576234392,3515399049&fm=80\",\"key\":\"pic/201607/03/RLmmTwpSpytNuMX_1601286349.jpg\"}]"}
                    ]
                },
                "add_folder": {
                    "name": "创建项目",
                    "docUrl": "/doc/task/add_folder.html",
                    "url": "/task/add_folder",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"},
                        {"key": "folder_name", "isMust": true, "type": "string", "des": "项目名称"},
                        {"key": "charge_user", "isMust": false, "type": "string", "des": "项目负责人 默认当前登录用户"},
                        {"key": "visibility", "isMust": false, "type": "int", "des": "项目可见性 0私密 1公开仅群组 2全公司(默认0)"},
                        {"key": "groups", "isMust": false, "type": "string", "des": "当项目可见性为公开群组时群组ID（多个群组已，相隔）"},
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"}
                    ]
                },
                "add_folder_file": {
                    "name": "创建项目文件夹",
                    "docUrl": "/doc/task/add_folder_file.html",
                    "url": "/task/add_folder_file",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_file_name", "isMust": true, "type": "string", "des": "项目文件夹名称"            },
                        {"key": "folder_file_sort", "isMust": false, "type": "int", "des": "项目文件夹序号(默认第一个)"            },
                        {"key": "folders", "isMust": true, "type": "string", "des": "放入项目文件夹的项目ID（多个，相隔）"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "add_folder_member": {
                    "name": "新增项目成员",
                    "docUrl": {type: '', url: ''},
                    "url": "/task/add_folder_member",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "members", "isMust": true, "type": "string", "des": "成员ID（多个，相隔）"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "add_folder_stage": {
                    "name": "创建项目阶段",
                    "docUrl": "/doc/task/add_folder_stage.html",
                    "url": "/task/add_folder_stage",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "folder_stage_name", "isMust": true, "type": "string", "des": "项目阶段名字"            },
                        {"key": "folder_stage_sort", "isMust": false, "type": "int", "des": "阶段次序（默认排在第一个）"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"           }
                    ]
                },
                "add_task": {
                    "name": "创建一个任务",
                    "docUrl": "/doc/task/add_task.html",
                    "url": "/task/add_task",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_name", "isMust": true, "type": "string", "des": "任务名称"            },
                        {"key": "parent_id", "isMust": false, "type": "string", "des": "母任务ID"            },
                        {"key": "task_description", "isMust": false, "type": "string", "des": "任务描述"            },
                        {"key": "deadline", "isMust": false, "type": "string", "des": "任务截止日期，yyyy-MM-dd形式", "isDate": true},
                        {"key": "charge_user_account_id", "isMust": false, "type": "string", "des": "指定的任务负责人"            },
                        {"key": "members", "isMust": false, "type": "string", "des": "指定的任务成员 (多个成员用逗号隔开)"            },
                        {"key": "folder_id", "isMust": false, "type": "string", "des": "指定的隶属项目"            },
                        {"key": "color", "isMust": false, "type": "int", "des": "任务颜色 默认0：无颜色；1：蓝色；2：紫色；3：红色；4：橙色；5：黄色"            },
                        {"key": "post_id", "isMust": false, "type": "string", "des": "动态ID（创建任务时，如果需要某个动态的附件添加到任务中必传）"            },
                        {"key": "folder_stage_id", "isMust": false, "type": "string", "des": "指定的隶属项目下的阶段ID"            },
                        {"key": "is_star", "isMust": false, "type": "bool", "des": "是否给任务标星（默认：false：否，true：是）"            },
                        {"key": "groups", "isMust": false, "type": "string", "des": "指定任务群组"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "add_task_topic": {
                    "name": "增加一条评论",
                    "docUrl": "/doc/task/add_task_topic.html",
                    "url": "/task/add_task_topic",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "message", "isMust": false, "type": "string", "des": "评论内容"            },
                        {"key": "reply_topic_id", "isMust": false, "type": "string", "des": "回复哪条评论的ID"            },
                        {"key": "attachments", "isMust": false, "type": "string", "des": "附件JSON字符串，请参照：[{\"fileSize\":9106,\"serverName\":\"https://dn-mdpic.qbox.me/\",\"filePath\":\"pic/201607/03/\",\"fileName\":\"RLmmTwpSpytNuMX_1601286349\",\"fileExt\":\".jpg\",\"originalFileName\":\"u=576234392,3515399049&fm=80\",\"key\":\"pic/201607/03/RLmmTwpSpytNuMX_1601286349.jpg\"}]"            }
                    ]
                },
                "apply_folder_member": {
                    "name": "申请成为项目成员",
                    "docUrl": {type: '', url: ''},
                    "url": "/task/apply_folder_member",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "apply_info", "isMust": true, "type": "string", "des": "申请成为成员的理由"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "apply_for_joining_a_task": {
                    "name": "申请成为任务成员",
                    "docUrl": {type: '', url: ''},
                    "url": "/task/apply_for_joining_a_task",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            }
                    ]
                },
                "delete_folder": {
                    "name": "删除项目",
                    "docUrl": {type: '', url: ''},
                    "url": "/task/delete_folder",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "remove_tasks", "isMust": false, "type": "bool", "des": "是否删除其下的任务"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "delete_folder_file": {
                    "name": "删除项目文件夹",
                    "docUrl": {type: '', url: ''},
                    "url": "/task/delete_folder_file",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_file_id", "isMust": true, "type": "string", "des": "项目文件夹ID"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "delete_folder_members": {
                    "name": "移除项目成员",
                    "docUrl": {type: '', url: ''},
                    "url": "/task/delete_folder_members",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "members", "isMust": false, "type": "string", "des": "成员ID（多个，相隔）为空默认退出"            },
                        {"key": "removed_from_tasks", "isMust": false, "type": "bool", "des": "是否同时退出项目下的任务（默认false）"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "delete_folder_stage": {
                    "name": "删除项目阶段",
                    "docUrl": {type: '', url: ''},
                    "url": "/task/delete_folder_stage",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "folder_stage_id", "isMust": true, "type": "string", "des": "项目阶段ID"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "delete_task": {
                    "name": "删除任务",
                    "docUrl": {type: '', url: ''},
                    "url": "/task/delete_task",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "is_subtask", "isMust": false, "type": "bool", "des": "是否同时删除子任务"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "delete_task_topic": {
                    "name": "删除任务评论",
                    "docUrl": {type: '', url: ''},
                    "url": "/task/delete_task_topic",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "topic_id", "isMust": true, "type": "string", "des": "任务评论ID"            },
                        {"key": "delete_file", "isMust": false, "type": "bool", "des": "是否同时删除文件（默认为false）"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "duplicate_a_task": {
                    "name": "复制任务",
                    "docUrl": {type: '', url: ''},
                    "url": "/task/duplicate_a_task",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务id"            },
                        {"key": "task_name", "isMust": false, "type": "string", "des": "指定任务名字"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "网络id，不支持all"            },
                        {"key": "app_id", "isMust": false, "type": "string", "des": "如果是非第三方app，不填"            },
                        {"key": "keep_task_description", "isMust": false, "type": "bool", "des": "是否复制任务描述"            },
                        {"key": "keep_task_parent_folder", "isMust": false, "type": "bool", "des": "是否Keep新任务属于原来项目"            },
                        {"key": "charge_user_account_id", "isMust": false, "type": "string", "des": "指定项目负责人id"            },
                        {"key": "keep_task_members", "isMust": false, "type": "bool", "des": "是否keep项目成员"            },
                        {"key": "keep_task_tags", "isMust": false, "type": "bool", "des": "是否keep标签"            },
                        {"key": "keep_task_deadline", "isMust": false, "type": "bool", "des": "是否keep截止日期"            },
                        {"key": "keep_task_subTasks", "isMust": false, "type": "bool", "des": "是否keep子任务"            }
                    ]
                },
                "duplicate_folder": {
                    "name": "复制项目",
                    "docUrl": {type: '', url: ''},
                    "url": "/task/duplicate_folder",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "指定的项目id"            },
                        {"key": "is_stage", "isMust": false, "type": "bool", "des": "是否复制项目阶段"            },
                        {"key": "is_describe", "isMust": false, "type": "bool", "des": "是否复制项目描述"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "get_archived_folders": {
                    "name": "获取个人或网络下归档项目文件夹下项目",
                    "docUrl": {type: '', url: ''},
                    "url": "/task/get_archived_folders",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络， 不支持all"            }
                    ]
                },
                "get_available_folders": {
                    "name": "修改任务的关联项目时, 根据任务Id以及关键词返回可关联的项目",
                    "docUrl": {type: '', url: ''},
                    "url": "/task/get_available_folders",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络，当搜索个人网络时，可以不填"            },
                        {"key": "keyword", "isMust": false, "type": "string", "des": "关键词"            },
                        {"key": "page_index", "isMust": true, "type": "int", "des": "分页获取的页码, 从1开始, 无默认值"            },
                        {"key": "page_size", "isMust": true, "type": "int", "des": "该页面有多少项, 有默认值20"            }
                    ]
                },
                "get_available_tasks": {
                    "name": "修改任务的母任务时, 根据任务Id返回可以关联的母任务",
                    "docUrl": {type: '', url: ''},
                    "url": "/task/get_available_tasks",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络，当搜索个人网络时，可以不填"            },
                        {"key": "keyword", "isMust": false, "type": "string", "des": "关键词"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务id"            }
                    ]
                },
                "get_direct_children_tasks": {
                    "name": "获取某个任务下的直接子任务",
                    "docUrl": "/doc/task/get_direct_children_tasks.html",
                    "url": "/task/get_direct_children_tasks",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络，不支持all"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务id"            }
                    ]
                },
                "get_first_level_folders_and_files_by_project_id": {
                    "name": "获取个人或网络下文件夹和初层项目列表",
                    "docUrl": "/doc/task/get_first_level_folders_and_files_by_project_id.html",
                    "url": "/task/get_first_level_folders_and_files_by_project_id",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "get_folder_logs": {
                    "name": "获取项目下的日志",
                    "docUrl": "/doc/task/get_folder_logs.html",
                    "url": "/task/get_folder_logs",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "指定的项目id"            },
                        {"key": "page_index", "isMust": true, "type": "int", "des": "分页获取的页码, 从1开始"            },
                        {"key": "page_size", "isMust": true, "type": "int", "des": "该页面有多少项"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "在那个网络下，不填为个人网络"            }
                    ]
                },
                "get_folder_stages": {
                    "name": "获取项目下的阶段",
                    "docUrl": "/doc/task/get_folder_stages.html",
                    "url": "/task/get_folder_stages",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "指定的项目id"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "get_folder_task_list": {
                    "name": "获取项目下任务列表",
                    "docUrl": "/doc/task/get_folder_task_list.html",
                    "url": "/task/get_folder_task_list",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目id"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            },
                        {"key": "page_index", "isMust": false, "type": "int64", "des": "指定当前的页码（不指定页码返回所有）"            },
                        {"key": "page_size", "isMust": false, "type": "int", "des": "指定要返回的记录条数(默认值20，最大值100)"            },
                        {"key": "stage_id", "isMust": false, "type": "string", "des": "项目阶段ID"            },
                        {"key": "color", "isMust": false, "type": "int", "des": "任务颜色 默认-1：全部；0：无颜色；1：蓝色；2：紫色；3：红色；4：橙色；5：黄色"            },
                        {"key": "status", "isMust": false, "type": "int", "des": "筛选任务状态 默认0：进行中；1：已完成；-1：全部"            },
                        {"key": "tags", "isMust": false, "type": "string", "des": "过滤任务标签 多个用,隔开"            },
                        {"key": "other", "isMust": false, "type": "string", "des": "指定用户编号 查看其他同事的任务列表"            },
                        {"key": "classifys", "isMust": false, "type": "string", "des": "不过滤 -1 现在要做 Now = 1，将要做 Will = 2, 以后再说 After = 3"            },
                        {"key": "sort", "isMust": false, "type": "int", "des": "任务排序 1：按首字母;2:按到期日期;3:按任务创建时间；4:按项目(查询结果结构有变化);5:任务负责人；7：按颜色；8:完成时间；9:进行中;10:最近更新" },
                        {"key": "keywords", "isMust": false, "type": "string", "des": "关键词模糊搜索"            },
                        {"key": "is_star", "isMust": false, "type": "bool", "des": "过滤是否标星，true为过滤"            }
                    ]
                },
                "get_folders_by_fileID": {
                    "name": "获取项目文件夹下的项目列表",
                    "docUrl": "/doc/task/get_folders_by_fileID.html",
                    "url": "/task/get_folders_by_fileID",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_file_id", "isMust": true, "type": "string", "des": "指定的文件夹id"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "get_hidden_folders": {
                    "name": "获取个人或网络下隐藏项目文件夹下项目",
                    "docUrl": "/doc/task/get_Hidden_folders.html",
                    "url": "/task/get_Hidden_folders",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络， 不支持all"            }
                    ]
                },
                "get_sticky_folders": {
                    "name": "获取用户置顶项目",
                    "docUrl": "/doc/task/get_sticky_folders.html",
                    "url": "/task/get_sticky_folders",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            }
                    ]
                },
                "get_subordinates": {
                    "name": "获取用户置顶项目",
                    "docUrl": "/doc/task/get_subordinates.html",
                    "url": "/task/get_subordinates",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络, 不支持传入all"            }
                    ]
                },
                "get_task_attachments": {
                    "name": "获取任务的所有附件信息",
                    "docUrl": "/doc/task/get_task_attachments.html",
                    "url": "/task/get_task_attachments",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            }
                    ]
                },
                "get_task_in_classify": {
                    "name": "依据分页信息获取每种classify下的任务数量",
                    "docUrl": {type: '', url: ''},
                    "url": "/task/get_task_in_classify",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "page_index", "isMust": true, "type": "int", "des": "分页的index"            },
                        {"key": "page_size", "isMust": true, "type": "int", "des": "分页的页面大小"            }
                    ]
                },
                "get_comments_by_folder_id": {
                    "name": "获取项目上的会话",
                    "docUrl": "/doc/task/get_comments_by_folder_id.html",
                    "url": "/task/get_comments_by_folder_id",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "only_include_mine", "isMust": false, "type": "bool", "des": "是否只包含我的帖子，默认为false"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "不填为自由网络"            },
                        {"key": "page_index", "isMust": true, "type": "int", "des": "分页的index"            },
                        {"key": "page_size", "isMust": true, "type": "int", "des": "分页的页面大小"            }
                    ]
                },
                "get_folder_details_by_folder_id": {
                    "name": "根据项目id获取项目详情",
                    "docUrl": "/doc/task/get_folder_details_by_folder_id.html",
                    "url": "/task/get_folder_details_by_folder_id",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            }
                    ]
                },
                "get_task_detail": {
                    "name": "获取任务详情",
                    "docUrl": "/doc/task/get_task_detail.html",
                    "url": "/task/get_task_detail",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "get_task_list": {
                    "name": "获取任务列表",
                    "docUrl": "/doc/task/get_task_list.html",
                    "url": "/task/get_task_list",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            },
                        {"key": "page_index", "isMust": false, "type": "int64", "des": "指定当前的页码（不指定页码返回所有）"            },
                        {"key": "page_size", "isMust": false, "type": "int", "des": "指定要返回的记录条数(默认值20，最大值100)"            },
                        {"key": "folder_id", "isMust": false, "type": "string", "des": "项目ID 没有项目要传入Null"            },
                        {"key": "stage_id", "isMust": false, "type": "string", "des": "项目阶段ID"            },
                        {"key": "filter_type", "isMust": true, "type": "int", "des": "过滤类型 默认1：我参与的任务；2：我负责的任务；3：我托付的任务；6：全部任务  7：查看同事(与我协作的任务) 9： 我的任务"            },
                        {"key": "color", "isMust": false, "type": "int", "des": "任务颜色 默认-1：全部；0：无颜色；1：蓝色；2：紫色；3：红色；4：橙色；5：黄色"            },
                        {"key": "status", "isMust": false, "type": "int", "des": "筛选任务状态 默认0：进行中；1：已完成；-1：全部"            },
                        {"key": "tags", "isMust": false, "type": "string", "des": "过滤任务标签 多个用,隔开"            },
                        {"key": "other", "isMust": false, "type": "string", "des": "指定用户编号 查看其他同事的任务列表"            },
                        {"key": "classifys", "isMust": false, "type": "string", "des": "不过滤 -1 现在要做 Now = 1，将要做 Will = 2, 以后再说 After = 3"            },
                        {"key": "sort", "isMust": false, "type": "int", "des": "任务排序 1：按首字母;2:按到期日期;3:按任务创建时间；4:按项目(查询结果结构有变化);5:任务负责人；7：按颜色；8:完成时间；9:进行中;10:最近更新"            },
                        {"key": "complete_time", "isMust": false, "type": "string", "des": "查询的时间起始点，当sort为8时(查询时间到当前的) 格式(2015-06-10)"            },
                        {"key": "keywords", "isMust": false, "type": "string", "des": "关键词模糊搜索"            },
                        {"key": "is_star", "isMust": false, "type": "bool", "des": "过滤是否标星，true为过滤"            }
                    ]
                },
                "get_task_Log": {
                    "name": "获取任务日志",
                    "docUrl": "/doc/task/get_task_Log.html",
                    "url": "/task/get_task_Log",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "page_index", "isMust": true, "type": "int", "des": "指定当前的页码, 从第一页开始"            },
                        {"key": "page_size", "isMust": true, "type": "int", "des": "指定要返回的记录条数"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            }
                    ]
                },
                "get_task_topics": {
                    "name": "获取任务评论",
                    "docUrl": "/doc/task/get_task_topics.html",
                    "url": "/task/get_task_topics",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "page_index", "isMust": true, "type": "int", "des": "指定当前的页码, 从1开始"            },
                        {"key": "page_size", "isMust": true, "type": "int", "des": "指定要返回的记录条数"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            },
                        {"key": "only_file", "isMust": false, "type": "bool", "des": "是否获取只包含文件的comment，不填则不进行过滤"            }
                    ]
                },
                "get_tasks_count": {
                    "name": "根据传入的筛选条件查询任务的数量",
                    "docUrl": "/doc/task/get_tasks_count.html",
                    "url": "/task/get_tasks_count",
                    "requestMode": "Get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "status", "isMust": true, "type": "int", "des": "与任务是否完成相关的条件  All = -1 所有任务, Incomplete = 0 未完成, Complete = 1 已经完成"            },
                        {"key": "filter_type", "isMust": true, "type": "int", "des": "与协作相关的条件 Participate = 1 我参与的 , Charge = 2 我负责, Release = 3（我托付的）, AllTask = 6 所有人物, WithMe = 7 与我协作的, MeTask = 9 包含 我参与、我负责、我托付 "            },
                        {"key": "classify", "isMust": true, "type": "int", "des": "与任务调度有关的条件 All = -1 不进行过滤，Now = 1 今天要做的， Will = 2 最近要做, After = 3 以后再说"            },
                        {"key": "color", "isMust": true, "type": "int", "des": "任务颜色 All = -1 全部颜色 不进行过滤，None = 0 无颜色， Purple = 1, Blue = 2, Yellow = 3, Orange = 4, Red = 5"            },
                        {"key": "star", "isMust": false, "type": "bool", "des": "是否有星标，为false则包含所有类别"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "get_orphaned_tasks": {
                    "name": "获取任务列表",
                    "docUrl": "/doc/task/get_orphaned_tasks.html",
                    "url": "/task/get_orphaned_tasks",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            },
                        {"key": "page_index", "isMust": false, "type": "int64", "des": "指定当前的页码（不指定页码返回所有）"            },
                        {"key": "page_size", "isMust": false, "type": "int", "des": "指定要返回的记录条数(默认值20，最大值100)"            },
                        {"key": "stage_id", "isMust": false, "type": "string", "des": "项目阶段ID"            },
                        {"key": "color", "isMust": false, "type": "int", "des": "任务颜色 默认-1：全部；0：无颜色；1：蓝色；2：紫色；3：红色；4：橙色；5：黄色"            },
                        {"key": "status", "isMust": false, "type": "int", "des": "筛选任务状态 默认0：进行中；1：已完成；-1：全部"            },
                        {"key": "tags", "isMust": false, "type": "string", "des": "过滤任务标签 多个用,隔开"            },
                        {"key": "sort", "isMust": false, "type": "int", "des": "任务排序 1：按首字母;2:按到期日期;3:按任务创建时间；4:按项目(查询结果结构有变化);5:任务负责人；7：按颜色；8:完成时间；9:进行中;10:最近更新"            }
                    ]
                },
                "get_teamwork_member": {
                    "name": "获取协作成员",
                    "docUrl": "/doc/task/get_teamwork_member.html",
                    "url": "/task/get_teamwork_member",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络, 不支持传入all"            }
                    ]
                },
                "move_a_folder_into_a_file": {
                    "name": "将项目移入一个项目文件夹",
                    "docUrl": {type: '', url: ''},
                    "url": "/task/move_a_folder_into_a_file",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "file_id", "isMust": true, "type": "string", "des": "文件夹ID"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "网络id, 不填为个人自由网络"            }
                    ]
                },
                "remove_a_comment_on_folder": {
                    "name": "删除一个项目上的comment",
                    "docUrl": "",
                    "url": "/task/remove_a_comment_on_folder",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络, 不支持传入all"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目id"            },
                        {"key": "comment_id", "isMust": true, "type": "string", "des": "comment id"            }
                    ]
                },
                "remove_a_member_from_a_task": {
                    "name": "在任务上删除一个member",
                    "docUrl": "",
                    "url": "/task/remove_a_member_from_a_task",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络, 不支持传入all"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务id"            },
                        {"key": "account_id", "isMust": true, "type": "string", "des": "member的id"            }
                    ]
                },
                "search_folders": {
                    "name": "通过关键词搜索项目",
                    "docUrl": "/doc/task/search_folders.html",
                    "url": "/task/Search_Folders",
                    "requestMode": "get",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "keyword", "isMust": true, "type": "string", "des": "要搜索的关键词"            },
                        {"key": "account_id_other", "isMust": false, "type": "string", "des": "查询他人的任务, 他人ID"            }
                    ]
                },
                "update_folder_archived_property": {
                    "name": "修改项目是否归档",
                    "docUrl":{type: '', url: ''},
                    "url": "/task/update_folder_archived_property",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "指定的项目id"            },
                        {"key": "is_archived", "isMust": false, "type": "bool", "des": "是否归档默认false"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_folder_detail": {
                    "name": "修改项目基本属性(负责人,项目名,项目描述)全部修改或多选一",
                    "docUrl":{type: '', url: ''},
                    "url": "/task/update_folder_detail",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "指定的项目id"            },
                        {"key": "charge_user", "isMust": false, "type": "string", "des": "负责人ID"            },
                        {"key": "folder_name", "isMust": false, "type": "string", "des": "项目名"            },
                        {"key": "describe", "isMust": false, "type": "string", "des": "项目描述"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_folder_file": {
                    "name": "修改项目文件夹",
                    "docUrl":{type: '', url: ''},
                    "url": "/task/update_folder_file",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_file_id", "isMust": true, "type": "string", "des": "项目文件夹ID"            },
                        {"key": "folder_file_sort", "isMust": false, "type": "int", "des": "项目文件夹序号"            },
                        {"key": "folder_file_name", "isMust": false, "type": "string", "des": "项目文件夹名称"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_folder_isHidden_property": {
                    "name": "项目隐藏",
                    "docUrl":{type: '', url: ''},
                    "url": "/task/update_folder_isHidden_property",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "is_hidden", "isMust": false, "type": "bool", "des": "是否隐藏(默认false)"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_folder_isTop_property": {
                    "name": "项目置顶",
                    "docUrl":{type: '', url: ''},
                    "url": "/task/update_folder_isTop_property",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "is_top", "isMust": false, "type": "bool", "des": "是否置顶(默认false)"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_folder_member_admin": {
                    "name": "设置项目成员为管理员",
                    "docUrl":{type: '', url: ''},
                    "url": "/task/update_folder_member_admin",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "change_user", "isMust": true, "type": "string", "des": "项目负责人"            },
                        {"key": "is_admin", "isMust": false, "type": "bool", "des": "是否设置为管理员(默认false)"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_folder_member_star": {
                    "name": "项目标星",
                    "docUrl":{type: '', url: ''},
                    "url": "/task/update_folder_member_star",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "is_star", "isMust": false, "type": "bool", "des": "是否标志为star（默认false）"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_folder_stage": {
                    "name": "修改项目阶段顺序或名字",
                    "docUrl":{type: '', url: ''},
                    "url": "/task/update_folder_stage",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            },
                        {"key": "folder_stage_id", "isMust": true, "type": "string", "des": "项目阶段ID"            },
                        {"key": "folder_stage_name", "isMust": false, "type": "string", "des": "新项目阶段名字"            },
                        {"key": "folder_stage_sort", "isMust": false, "type": "string", "des": "新项目阶段顺序"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_folder_visibility_property": {
                    "name": "修改项目可见性",
                    "docUrl":{type: '', url: ''},
                    "url": "/task/Update_Folder_Visibility_Property",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "指定的项目id"            },
                        {"key": "visibility", "isMust": true, "type": "int", "des": "0:私密成员可见，1：群组公开,2全公司公开"            },
                        {"key": "groups", "isMust": false, "type": "string", "des": "群组公开时群组ID（多个，相隔）"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_joining_status_on_task": {
                    "name": "修改当前用户加入一个Task的状态",
                    "docUrl":  {type: '', url: ''},
                    "url": "/task/update_joining_status_on_task",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "joining_state", "isMust": true, "type": "int", "des": "0:None 无申请，1：NoneToMember 从非成员申请成为成员, 2: BeenRefusedToMember 被拒绝成为成员，拒绝填写2，同意填写0"            },
                        {"key": "account_id", "isMust": true, "type": "string", "des": "指定需要修改的的account_id"            }
                    ]
                },
                "update_task_charger_property": {
                    "name": "更新任务负责人",
                    "docUrl":  {type: '', url: ''},
                    "url": "/task/update_task_charger_property",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务id"            },
                        {"key": "new_charger", "isMust": true, "type": "string", "des": "新负责人的ID"            }
                    ]
                },
                "update_task_deadline": {
                    "name": "更新任务截止日期",
                    "docUrl":  {type: '', url: ''},
                    "url": "/task/update_task_deadline",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务id"            },
                        {"key": "deadline", "isMust": true, "type": "string", "des": "截止日期"            },
                        {"key": "include_sub_tasks", "isMust": true, "type": "bool", "des": "是否包含子任务"            }
                    ]
                },
                "update_task_description": {
                    "name": "/doc/task/update_task_description.html",
                    "url": "/task/update_task_description",
                    "docUrl":  {type: '', url: ''},
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务id"            },
                        {"key": "task_Description", "isMust": true, "type": "string", "des": "任务描述"            }
                    ]
                },
                "update_task_folderID": {
                    "name": "更新任务所在的项目",
                    "docUrl":  {type: '', url: ''},
                    "url": "/task/update_task_folderID",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务id"            },
                        {"key": "folder_id", "isMust": true, "type": "string", "des": "项目ID"            }
                    ]
                },
                "update_task_locked": {
                    "name": "是否锁定任务",
                    "docUrl":  {type: '', url: ''},
                    "url": "/task/update_task_locked",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "is_lock", "isMust": false, "type": "bool", "des": "是否锁定任务（默认false）"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_task_member_classify": {
                    "name": "修改任务分类（待分配，现在要做等）",
                    "docUrl":  {type: '', url: ''},
                    "url": "/task/update_task_member_classify",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "classify", "isMust": true, "type": "int", "des": "1：现在要做，2：将要做，3：以后再说"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_task_member_color": {
                    "name": "修改任务颜色",
                    "docUrl":  {type: '', url: ''},
                    "url": "/task/update_task_member_color",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "color", "isMust": true, "type": "int", "des": "任务颜色 默认0：无颜色；1：蓝色；2：紫色；3：红色；4：橙色；5：黄色"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_task_member_notice": {
                    "name": "修改任务是否接收提醒",
                    "docUrl":  {type: '', url: ''},
                    "url": "/task/update_task_member_notice",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "is_notice", "isMust": true, "type": "bool", "des": "是否接收提醒（默认false）"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_task_member_star": {
                    "name": "任务标星",
                    "docUrl":  {type: '', url: ''},
                    "url": "/task/update_task_member_star",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"},
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "is_star", "isMust": true, "type": "bool", "des": "是否标星（默认false）"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_task_name": {
                    "name": "更新任务名称",
                    "docUrl":  {type: '', url: ''},
                    "url": "/task/update_task_name",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务id"            },
                        {"key": "task_name", "isMust": true, "type": "string", "des": "任务名称"            }
                    ]
                },
                "update_task_parentID": {
                    "name": "更新母任务",
                    "docUrl":  {type: '', url: ''},
                    "url": "/task/update_task_parentID",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务id"            },
                        {"key": "parent_id", "isMust": true, "type": "string", "des": "母任务ID"            }
                    ]
                },
                "update_task_stage": {
                    "name": "修改任务所处项目阶段",
                    "docUrl":  {type: '', url: ''},
                    "url": "/task/update_task_stage",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"            },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "folder_stage_id", "isMust": true, "type": "string", "des": "项目阶段ID"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                },
                "update_task_status": {
                    "name": "是否标记任务完成",
                    "docUrl":  {type: '', url: ''},
                    "url": "/task/update_task_status",
                    "requestMode": "post",
                    "params": [
                        {"key": "access_token", "isMust": true, "type": "string", "des": "当前登录用户访问令牌"           },
                        {"key": "task_id", "isMust": true, "type": "string", "des": "任务ID"            },
                        {"key": "status", "isMust": true, "type": "int", "des": "任务完成状态（0：未完成，1：完成）"            },
                        {"key": "project_id", "isMust": false, "type": "string", "des": "哪个网络（默认个人自由网络）"            }
                    ]
                }
            }
        },
        group: {
            v1: {
                get_group_detail: {
                    name: '根据群组编号获取群组的基本资料',
                    docUrl: "/doc/group/group_detail.html",
                    url: '/group/get_group_detail',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' }
                    ]
                },
                get_my_created_groups: {
                    name: '获取用户创建的群组',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/get_my_created_groups',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: false, type: 'string', des: '指定用户编号，获取此用户创建的群组，默认为当前授权用户' },
                        { key: 'project_id', isMust: false, type: 'string', des: '哪个网络（默认个人自由网络）' }
                    ]
                },
                get_project_groups: {
                    name: '获取公司群组',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/get_project_groups',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'project_id', isMust: true, type: 'string', des: '要获取的网络ID' },
                        { key: 'search_type', isMust: false, type: 'int', des: '-1全部 0 我创建的 1我加入的 2我是管理员的 不传默认-1' },
                        { key: 'sort_group', isMust: false, type: 'int', des: '群组创建时间=0,群组类型=1,Post数量=2,成员数量=3,按群组名拼音=4,按群组公共=5,当前用户发布的Post数量=6,按创建者名拼音=7,官方群组=8,群组内用户名称=9,群组管理员=10,群组状态=11,群组成员创建时间=12' },
                        { key: 'sort_type', isMust: false, type: 'bool', des: 'false 降序true升序' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码(不指定页码返回所有)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                    ]
                },
                get_account_joined_groups: {
                    name: '获取用户加入的群组',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/get_account_joined_groups',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: false, type: 'string', des: '指定用户编号，获取此用户创建的群组，默认为当前授权用户' },
                        { key: 'project_id', isMust: false, type: 'string', des: '要获取的网络ID，不填默认个人网络' }
                    ]
                },
                get_group_members: {
                    name: '获取群组成员信息',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/get_group_members',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '页码' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '显示数量' }
                    ]
                },
                get_project_group_members: {
                    name: '获取网络群组的内部成员信息',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/get_project_group_members',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '页码' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '显示数量' }
                    ]
                },
                get_unaudited_members: {
                    name: '获取群组待审批成员信息',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/get_unaudited_members',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' }
                    ]
                },
                get_mentioned_group: {
                    name: '获取最常使用群组',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/get_mentioned_group',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '显示数量' }
                    ]
                },

                create_group: {
                    name: '创建一个新的群组',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/create_group',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_name', isMust: true, type: 'string', des: '要创建的群组的名称' },
                        { key: 'about', isMust: false, type: 'string', des: '群组的简介' },
                        { key: 'is_post', isMust: false, type: 'bool', des: '是否作为动态分享群组(false：否，true：是)' },
                        { key: 'project_id', isMust: false, type: 'string', des: '群组网络' },
                        { key: 'avatar', isMust: false, type: 'string', des: '群组头像' }
                    ]
                },
                edit_group: {
                    name: '编辑群组',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/edit_group',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组id' },
                        { key: 'group_name', isMust: false, type: 'string', des: '要创建的群组的名称' },
                        { key: 'about', isMust: false, type: 'string', des: '群组的简介' },
                        { key: 'is_approval', isMust: false, type: 'bool', des: '用户加入是否审批 0 否 1 是' },
                        { key: 'avatar', isMust: false, type: 'string', des: '群组头像' }
                    ]
                },
                exit_group: {
                    name: '群组操作退出',
                    docUrl: {type: '', url: ''},
                    url: '/group/exit_group',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'operation_type', isMust: true, type: 'int', des: '操作类型 0/关闭 2/解散 3/退出' }
                    ]
                },
                add_group_admin: {
                    name: '添加群组管理员(仅限群组管理员和网络管理员)',
                    docUrl: {type: '', url: ''},
                    url: '/group/add_group_admin',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'account_id', isMust: true, type: 'string', des: '用户编号' }
                    ]
                },
                remove_group_user_or_admin: {
                    name: '移除群组用户/管理员(仅限群组管理员和网络管理员)',
                    docUrl: {type: '', url: ''},
                    url: '/group/remove_group_user_or_admin',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'account_id', isMust: false, type: 'string', des: '用户编号' }
                    ]
                },
                remove_group_admin_role: {
                    name: '移除管理员权限',
                    docUrl: "",
                    url: '/group/remove_group_admin_role',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'account_id', isMust: false, type: 'string', des: '用户编号' }
                    ]
                },
                pass_or_refuse_user_join_group: {
                    name: '同意/拒绝 用户加入群组(仅限群组管理员)',
                    docUrl: {type: '', url: ''},
                    url: '/group/pass_or_refuse_user_join_group',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'account_ids', isMust: true, type: 'string', des: '待审批用户编号 多个用,号隔开' },
                        { key: 'choose_type', isMust: true, type: 'bool', des: '同意1/拒绝0' }
                    ]
                },
                chat_to_post_group: {
                    name: '聊天群组转永久动态群组',
                    docUrl: {type: '', url: ''},
                    url: '/group/chat_to_post_group',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'project_id', isMust: false, type: 'string', des: '网络编号' }
                    ]
                },
                apply_join_group: {
                    name: '申请加入群组',
                    docUrl: {type: '', url: ''},
                    url: '/group/apply_join_group',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' }
                    ]
                }
            }
        },
        user: {
            v1: {
                get_new_friends: {
                    name: '新的朋友',
                    docUrl: '/doc/user/friend.html',
                    url: '/user/get_new_friends',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码(不指定页码返回所有)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                    ]
                },
                get_my_friends: {
                    name: '我的联系人',
                    docUrl: '/doc/user/friend.html',
                    url: '/user/get_my_friends',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码(不指定页码返回所有)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' },
                        { key: 'timestamp', isMust: false, type: 'string', des: '上次拉取列表返回的时间戳' }
                    ]
                },
                get_mentioned_users: {
                    name: '获取我的最常协作人(不区分网络)',
                    docUrl: '/doc/user/account_base.html',
                    url: '/user/get_mentioned_users',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_account_byphone: {
                    name: '根据手机号或邮箱获取是否是明道用户',
                    docUrl: '',
                    url: '/user/get_account_byphone',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'identifier', isMust: true, type: 'string', des: '邮箱或手机号' }
                    ]
                },
                get_project_users: {
                    name: '获取通讯录',
                    docUrl: '/doc/user/account_base.html',
                    url: '/user/get_project_users',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'project_id', isMust: true, type: 'string', des: '要获取的网络ID' },
                        { key: 'department', isMust: false, type: 'string', des: '部门名称' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码(不指定页码返回所有)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' },
                        { key: 'timestamp', isMust: false, type: 'string', des: '上次拉取列表返回的时间戳' }
                    ]
                },
                get_user_card: {
                    name: '个人卡片信息',
                    docUrl: '/doc/user/user_card.html',
                    url: '/user/get_user_card',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: true, type: 'string', des: '用户账号ID' }
                    ]
                },
                add_friend: {
                    name: '请求添加好友',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/add_friend',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: true, type: 'string', des: '请求加为好友的用户账号ID' },
                        { key: 'message', isMust: true, type: 'string', des: '请求描述' }
                    ]
                },
                update_friend_status: {
                    name: '同意，拒绝，忽略请求添加好友',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/update_friend_status',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: true, type: 'string', des: '操作的用户账号ID' },
                        { key: 'status', isMust: true, type: 'int', des: '同意=1,忽略=2,拒绝=3' }
                    ]
                },
                remove_friend: {
                    name: '移除好友',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/remove_friend',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: true, type: 'string', des: '需要移除的用户账号ID' }
                    ]
                },
                shield_friend: {
                    name: '屏蔽/取消屏蔽 好友',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/shield_friend',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: true, type: 'string', des: '需要移除的用户账号ID' },
                        { key: 'is_shield', isMust: true, type: 'bool', des: '是否屏蔽好友' }
                    ]
                },
                add_mobile_address: {
                    name: '添加用户手机通讯录',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/add_mobile_address',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'mobiles', isMust: true, type: 'string', des: '手机号码数组[1300000000,13000000000]序列化' }
                    ]
                },
                get_mobile_address_recommend: {
                    name: '获取手机通讯录推荐好友列表',
                    docUrl: '/doc/user/account_base.html',
                    url: '/user/get_mobile_address_recommend',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_user_subordinate: {
                    name: '获取下属用户列表(只有安装了组织结构的网络才有)',
                    docUrl: '/doc/user/account_base.html',
                    url: '/user/get_user_subordinate',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'project_id', isMust: true, type: 'string', des: '要获取的网络ID' }
                    ]
                },
                get_users_bykeywords: {
                    name: '联系人搜索（范围个人通讯录和全部企业网络通讯录）包括手机号邮箱',
                    docUrl: '/doc/user/keywords.html',
                    url: '/user/get_users_bykeywords',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: true, type: 'string', des: '搜索关键字' }
                    ]
                }
            }
        },
        company: {
            v1: {
                get_project_list: {
                    name: '获取我的网络列表',
                    docUrl: '/doc/project/project_base.html',
                    url: '/company/get_project_list',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码(不指定页码返回所有)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                    ]
                },
                get_project_departments: {
                    name: '获取网络部门列表',
                    docUrl: {type: 'string', url: ''},
                    url: '/company/get_project_departments',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'project_id', isMust: true, type: 'string', des: '要获取的网络ID' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码(不指定页码返回所有)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                    ]
                },
                get_project_worksite: {
                    name: '获取网络工作地列表',
                    docUrl: {type: 'string', url: ''},
                    url: '/company/get_project_worksite',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'project_id', isMust: true, type: 'string', des: '要获取的网络ID' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码(不指定页码返回所有)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                    ]
                },
                get_project_byprojectcode: {
                    name: '根据企业号获取网络信息和设置',
                    docUrl: '/doc/project/project_setting.html',
                    url: '/company/get_project_byprojectcode',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'project_code', isMust: true, type: 'string', des: '企业号' }
                    ]
                },
                join_project_byprojectcode: {
                    name: '根据企业号加入网络',
                    docUrl: {type: 'string', url: ''},
                    url: '/company/join_project_byprojectcode',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'project_code', isMust: true, type: 'string', des: '企业号' },
                        { key: 'verify_code', isMust: true, type: 'string', des: '验证码' },
                        { key: 'is_verify_code', isMust: true, type: 'bool', des: '是否只验证验证码(默认false)' },
                        { key: 'company_name', isMust: false, type: 'string', des: '公司名' },
                        { key: 'work_site', isMust: false, type: 'string', des: '工作地' },
                        { key: 'department', isMust: false, type: 'string', des: '部门(从公司部门列表中选择)' },
                        { key: 'job', isMust: false, type: 'string', des: '职位' },
                        { key: 'job_number', isMust: false, type: 'string', des: '工号' },
                        { key: 'contact_phone', isMust: false, type: 'string', des: '坐机号码' }
                    ]
                }
            }
        },
        calendar: {
            v1: {
                add_members_to_event: {
                    name: '确认日程' ,
                    docUrl: {type: 'string', url: ''},
                    url: '/calendar/add_members_to_event',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'event_id', isMust: true, type: 'string', des: '日程id' },
                        { key: 'event_recurring_time', isMust: false, type: 'string', des: '子日程的发生时间，用于选择子日程' },
                        { key: 'modifying_all_recurring_events', isMust: false, type: 'bool', des: '是否修改所有日程' },
                        { key: 'invited_accounts', isMust: false, type: 'string', des: '包含邮箱和电话， 参考格式： [\"电话号码\",\"邮箱\"]' },
                        { key: 'member_ids', isMust: false, type: 'string', des: '用户id' }
                    ]
                },
                confirm_event_invitation: {
                    name: '确认日程' ,
                    docUrl: {type: 'string', url: ''},
                    url: '/calendar/confirm_event_invitation',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'event_id', isMust: true, type: 'string', des: '日程id' },
                        { key: 'event_recurring_time', isMust: false, type: 'string', des: '子日程的发生时间，用于选择子日程' }
                    ]
                },
                create_event: {
                    name: '创建一个新的日程',
                    docUrl: {type: 'string', url: ''},
                    url: '/calendar/create_event',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'attachments', isMust: false, type: 'string', des: '附件JSON字符串，请参照：[{\"fileSize\":9106,\"serverName\":\"https://dn-mdpic.qbox.me/\",\"filePath\":\"pic/201607/03/\",\"fileName\":\"RLmmTwpSpytNuMX_1601286349\",\"fileExt\":\".jpg\",\"originalFileName\":\"u=576234392,3515399049&fm=80\",\"key\":\"pic/201607/03/RLmmTwpSpytNuMX_1601286349.jpg\"}]' },
                        { key: 'name', isMust: true, type: 'string', des: '日程主题' },
                        { key: 'begin_date', isMust: true, type: 'string', des: '日程开始时间。如：2013-05-05 10:25' },
                        { key: 'end_date', isMust: true, type: 'string', des: '日程结束时间。如：2013-05-05 10:25' },
                        { key: 'is_all_day_event', isMust: false, type: 'bool', des: '是否为全天日程。false表示非全天，true表示全天。' },
                        { key: 'address', isMust: false, type: 'string', des: '日程地点' },
                        { key: 'event_description', isMust: false, type: 'string', des: '日程描述' },
                        { key: 'is_private_event', isMust: false, type: 'bool', des: '是否私人日程' },
                        { key: 'member_ids', isMust: false, type: 'string', des: '指定的日程成员 (多个成员用逗号隔开)。注：明道用户' },
                        { key: 'invited_accounts', isMust: false, type: 'string', des: '指定的邀请成员,邮件，电话 (多个成员用逗号隔开)。注：非明道用户, 需要类似这种格式{"aa@mail.com":"aa"}' },
                        { key: 'is_recurring_event', isMust: false, type: 'bool', des: '是否为重复日程.' },
                        { key: 'repeat_frequency', isMust: false, type: 'int', des: '用那种频率单位来重复日程，is_recurring_event为true，该值必填，频率 1 表示Daily; 2 表示Weekly; 3 表示Monthly; 4 表示Yearly' },
                        { key: 'repeat_interval', isMust: false, type: 'int', des: '当is_recur为1 即为重复日程时该值选填，重复间隔 默认值 1。' },
                        { key: 'repeat_weekday', isMust: false, type: 'int', des: '当 frequency=2 该值必填，周几重复 1:周一, 64:周日。周几即为2的几次方，选择每周多天，即为按位或的形式' },
                        { key: 'repeat_times', isMust: false, type: 'int', des: '当 is_recurring_event为1即为重复日程时该值选填，重复次数  与repeat_end_date只能存在一个' },
                        { key: 'reminder_type', isMust: false, type: 'int', des: '提醒类型 设定无提醒 - 0; 设定提醒单位: 分钟 - 1，小时 - 2，日 - 3' },
                        { key: 'repeat_end_date', isMust: false, type: 'string', des: '当 repeat_end_date 该值选填，结束日期 如果repeat_times为0且repeat_end_date为null,则为永久重复' },
                        { key: 'remind_time', isMust: false, type: 'int', des: '提醒时间' },
                        { key: 'category_id', isMust: true, type: 'string', des: '日程分类id' }
                    ]
                },
                create_user_defined_category: {
                    name: '创建用户自定义的分类',
                    docUrl: {type: 'string', url: ''},
                    url: '/calendar/create_user_defined_category',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'color', isMust: true, type: 'int', des: '分类颜色, 日程颜色  Red = 0, Purple = 1, Cyan = 2, Orange = 3, Blue = 4, Green = 5, Yellow = 6' },
                        { key: 'category_name', isMust: true, type: 'string', des: '分类的名字' }
                    ]
                },
                edit_category_of_an_event: {
                    name: '更新用户分类',
                    docUrl: {type: 'string', url: ''},
                    url: '/calendar/edit_category_of_an_event',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'event_id', isMust: true, type: 'int', des: '日程id' },
                        { key: 'category_id', isMust: true, type: 'string', des: '分类的id' }
                    ]
                },
                edit_common_properties_on_event: {
                    name: '修改日程中需要重复确认的属性',
                    docUrl: {type: 'string', url: ''},
                    url: '/calendar/edit_common_properties_on_event',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'event_id', isMust: true, type: 'string', des: '日程编号' },
                        { key: 'name', isMust: true, type: 'string', des: '日程名字' },
                        { key: 'begin_date', isMust: true, type: 'string', des: '日程开始时间，如：2013-05-05 10:25' },
                        { key: 'end_date', isMust: true, type: 'string', des: '日程结束时间，如：2013-05-05 10:25' },
                        { key: 'is_all_day_event', isMust: false, type: 'bool', des: '是否是全天日程, 默认值false' },
                        { key: 'address', isMust: false, type: 'string', des: '日程地点' },
                        { key: 'event_description', isMust: false, type: 'string', des: '日程描述' },
                        { key: 'is_recurring_event', isMust: false, type: 'bool', des: '是否为重复类型的日程.' },
                        { key: 'repeat_frequency', isMust: false, type: 'int', des: '重复频率 1 表示Daily; 2 表示Weekly; 3 表示Monthly; 4 表示Yearly' },
                        { key: 'repeat_interval', isMust: false, type: 'int', des: '重复的间隔, 如1，每隔一个单位' },
                        { key: 'repeat_weekday', isMust: false, type: 'int', des: '周几重复 1:周一, 64:周日。周几即为2的几次方，选择每周多天，即为按位或的形式' },
                        { key: 'repeat_times', isMust: false, type: 'int', des: '重复次数  与repeat_end_date只能存在一个' },
                        { key: 'repeat_end_date', isMust: false, type: 'string', des: '结束日期 如果repeat_times为0且repeat_end_date为null,则为永久重复' },
                        { key: 'modifying_all_recurring_events', isMust: false, type: 'bool', des: '是否修改全部子日程' },
                        { key: 'attachments', isMust: false, type: 'string', des: '日程附件, 请参考附件JSON字符串，请参照：[{\"fileSize\":9106,\"serverName\":\"https://dn-mdpic.qbox.me/\",\"filePath\":\"pic/201607/03/\",\"fileName\":\"RLmmTwpSpytNuMX_1601286349\",\"fileExt\":\".jpg\",\"originalFileName\":\"u=576234392,3515399049&fm=80\",\"key\":\"pic/201607/03/RLmmTwpSpytNuMX_1601286349.jpg\"}]' },
                        { key: 'need_members_to_confirm', isMust: false, type: 'string', des: '是否需要参与人员重新确认信息' },
                        { key: 'event_recurring_time', isMust: false, type: 'string', des: '日期类型，在选择某个循环日程的子日程时使用' }
                    ]
                },
                edit_share_property_on_event: {
                    name: '更新日程是否分享属性',
                    docUrl: {type: 'string', url: ''},
                    url: '/calendar/edit_share_property_on_event',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'event_id', isMust: true, type: 'string', des: '日程id' },
                        { key: 'event_recurring_time', isMust: false, type: 'bool', des: '日程重复时间, 用于确认子日程' },
                        { key: 'is_shareable', isMust: false, type: 'bool', des: '日程重复时间' }
                    ]
                },
                edit_is_private_property_on_event: {
                    name: '更新日程是否私有',
                    docUrl: {type: 'string', url: ''},
                    url: '/calendar/edit_is_private_property_on_event',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'event_id', isMust: true, type: 'string', des: '日程id' },
                        { key: 'is_private_event', isMust: false, type: 'bool', des: '是否为私有属性' }
                    ]
                },
                edit_properites_on_category: {
                    name: '编辑分类的属性',
                    docUrl: {type: 'string', url: ''},
                    url: '/calendar/edit_properites_on_category',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'color', isMust: true, type: 'int', des: '分类颜色, 日程颜色  Red = 0, Purple = 1, Cyan = 2, Orange = 3, Blue = 4, Green = 5, Yellow = 6' },
                        { key: 'category_id', isMust: true, type: 'string', des: '要更新的分类id' },
                        { key: 'category_name', isMust: true, type: 'string', des: '分类的名字' }
                    ]
                },
                edit_reminder_on_event: {
                    name: '更新日程提醒',
                    docUrl: {type: 'string', url: ''},
                    url: '/calendar/edit_reminder_on_event',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'event_id', isMust: true, type: 'string', des: '日程id' },
                        { key: 'remind_time', isMust: true, type: 'int', des: '提醒时间, 后台会结合时间单位设定提醒时间' },
                        { key: 'reminder_type', isMust: true, type: 'int', des: '提醒类型 设定无提醒 - 0; 设定提醒单位: 分钟 - 1，小时 - 2，日 - 3' }
                    ]
                },
                get_all_user_defined_categories: {
                    name: '获取自定义分类',
                    docUrl: '/doc/calendar/get_all_user_defined_categories.html',
                    url: '/calendar/get_all_user_defined_categories',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_calendar_subscription_url: {
                    name: '获取订阅日历的url',
                    docUrl: '/doc/apidocumentnotavailable.html',
                    url: '/calendar/get_calendar_subscription_url',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_conflicted_events: {
                    name: '获取订阅日历的url',
                    docUrl: '/doc/apidocumentnotavailable.html',
                    url: '/calendar/get_conflicted_events',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'conflicting_account_id', isMust: true, type: 'string', des: '所要查询的用户' },
                        { key: 'begin_date', isMust: true, type: 'string', des: '开始时间' },
                        { key: 'end_date', isMust: true, type: 'string', des: '结束时间' }
                    ]
                },
                get_events_by_conditions: {
                    name: '获取多用户待办日程列表，结果按日期分组。',
                    docUrl: '/doc/calendar/get_events_by_conditions.html',
                    url: '/calendar/get_events_by_conditions',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_ids', isMust: true, type: 'string', des: '用户编号，多个以逗号相隔' },
                        { key: 'event_category_types', isMust: true, type: 'int', des: '如果只有他人则1, 4, 5有效,工作日程 WorkEvent = 1， 任务日程 Participate = 4， 包含自定义分类日程 Customed = 16， 所有类型 All = 21 = WorkEvent + Participate + Customed， 如果需要托付类型或者负责类型请联系我' },
                        { key: 'category_ids', isMust: false, type: 'string', des: '如果有自定义分类则填写，以逗号分隔, 传入All(不可忽略大小写)时，为全部分类' },
                        { key: 'begin_date', isMust: true, type: 'string', des: '开始日期 yyyy-mm-dd' },
                        { key: 'end_date', isMust: true, type: 'string', des: '结束日期, 最大值为这个日期的前一天。' }
                    ]
                },
                get_event_details: {
                    name: '日程详情',
                    docUrl: "/doc/calendar/get_event_details.html",
                    url: '/calendar/get_event_details',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'event_id', isMust: true, type: 'string', des: '日程id' },
                        { key: 'event_recurring_time', isMust: false, type: 'string', des: '日期类型，在选择某个循环日程的子日程时使用' }
                    ]
                },
                get_unconfirmed_events: {
                    name: '获取未确认的日程',
                    docUrl: '/doc/calendar/get_events_by_conditions.html',
                    url: '/calendar/get_unconfirmed_events',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        {"key": "page_index", "isMust": true, "type": "int", "des": "要获取的页码"            },
                        {"key": "page_size", "isMust": true, "type": "int", "des": "页面容量"            }
                    ]
                },
                reinvite_a_member_to_event: {
                    name: '拒绝日程' ,
                    docUrl: {type: 'string', url: ''},
                    url: '/calendar/reinvite_a_member_to_event',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'event_id', isMust: true, type: 'string', des: '日程id' },
                        { key: 'event_recurring_time', isMust: false, type: 'string', des: '子日程的发生时间，用于选择子日程' },
                        { key: 'member_id', isMust: true, type: 'string', des: '用户id' },
                        { key: 'modifying_all_recurring_events', isMust: false, type: 'bool', des: '修改所有子日程' }
                    ]
                },
                reject_event_invitation: {
                    name: '拒绝日程' ,
                    docUrl: {type: 'string', url: ''},
                    url: '/calendar/reject_event_invitation',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'event_id', isMust: true, type: 'string', des: '日程id' },
                        { key: 'event_recurring_time', isMust: false, type: 'string', des: '子日程的发生时间，用于选择子日程' },
                        { key: 'reason_for_rejecting', isMust: true, type: 'string', des: '修改用户状态为拒绝时，填写该值' }
                    ]
                },
                remove_a_member_on_event: {
                    name: '删除一个成员',
                    docUrl: {type: 'string', url: ''},
                    url: '/calendar/remove_a_member_on_event',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'event_id', isMust: true, type: 'string', des: '日程id' },
                        { key: 'event_recurring_time', isMust: false, type: 'string', des: '子日程的发生时间' },
                        { key: 'modifying_all_recurring_events', isMust: false, type: 'string', des: '修改所有循环日程' },
                        { key: 'member_id', isMust: true, type: 'string', des: '成员id' }
                    ]
                },
                remove_event: {
                    name: '删除事件',
                    docUrl: {type: 'string', url: ''},
                    url: '/calendar/remove_event',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'event_id', isMust: true, type: 'string', des: '日程id' },
                        { key: 'event_recurring_time', isMust: false, type: 'string', des: '子日程的发生时间' },
                        { key: 'removing_all_recurring_events', isMust: true, type: 'string', des: '删除所有循环日程' }
                    ]
                },
                remove_user_defined_category: {
                    name: '删除用户自定义类别',
                    docUrl: {type: 'string', url: ''},
                    url: '/calendar/remove_user_defined_category',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'category_id', isMust: true, type: 'string', des: '分类id' }
                    ]
                },
                search_events_by_keyword: {
                    name: '根据Keyword和时间搜索日程',
                    docUrl: "/doc/get_events_by_conditions.html",
                    url: '/calendar/search_events_by_keyword',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'begin_date', isMust: true, type: 'string', des: '开始日期' },
                        { key: 'end_date', isMust: true, type: 'string', des: '结束日期' },
                        { key: 'keyword', isMust: true, type: 'string', des: '关键字' }
                    ]
                }
            }
        },
        passport: {
            v1: {
                get_passport_detail: {
                    name: '当前登录用户基本信息',
                    docUrl: '/doc/passport/passport_detail.html',
                    url: '/passport/get_passport_detail',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                update_passport_detail: {
                    name: '修改登录用户基本信息',
                    docUrl: '',
                    url: '/passport/update_passport_detail',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'name', isMust: false, type: 'string', des: '姓名' },
                        { key: 'gender', isMust: false, type: 'int', des: '1男士2女士' },
                        { key: 'company_name', isMust: false, type: 'string', des: '公司名' },
                        { key: 'profession', isMust: false, type: 'string', des: '职位' },
                        { key: 'birth', isMust: false, type: 'string', des: '生日' },
                        { key: 'avatar', isMust: false, type: 'string', des: '头像(七牛上传文件名) 用户头像上传路径加/UserAvatar' }
                    ]
                },
                get_passport_setting: {
                    name: '当前登录用户的设置信息',
                    docUrl: '/doc/passport/passport_setting.html',
                    url: '/passport/get_passport_setting',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_un_read_count: {
                    name: '获取当前登录用户的各种未读消息数量',
                    docUrl: '/doc/passport/passport_detail.html',
                    url: '/passport/get_un_read_count',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_user_card: {
                    name: '获取加入的网络单个企业名片',
                    docUrl: '/doc/passport/user_card.html',
                    url: '/passport/get_user_card',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'project_id', isMust: true, type: 'string', des: '要获取的网络ID' }
                    ]
                },
                update_user_card: {
                    name: '修改加入的网络单个企业名片',
                    docUrl: '/doc/passport/user_card.html',
                    url: '/passport/update_user_card',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'project_id', isMust: true, type: 'string', des: '要修改的网络ID' },
                        { key: 'company_name', isMust: true, type: 'string', des: '公司名' },
                        { key: 'department', isMust: true, type: 'string', des: '部门' },
                        { key: 'contact_phone', isMust: true, type: 'string', des: '工作座机号码' },
                        { key: 'work_site', isMust: true, type: 'string', des: '工作地' },
                        { key: 'job', isMust: true, type: 'string', des: '职业' },
                        { key: 'job_number', isMust: true, type: 'string', des: '工号' }
                    ]
                },
                update_passport_pwd: {
                    name: '修改当前登录用户密码(如果只传旧密码只验证)',
                    docUrl: '',
                    url: '/passport/update_passport_pwd',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'old_pwd', isMust: true, type: 'string', des: '旧密码' },
                        { key: 'new_pwd', isMust: false, type: 'string', des: '新密码' },
                        { key: 'confirm_pwd', isMust: false, type: 'string', des: '确认新密码' }
                    ]
                },
                send_verify_code: {
                    name: '发送修改当前登录用户绑定邮箱或者手机号时的验证码',
                    docUrl: '',
                    url: '/passport/send_verify_code',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account', isMust: true, type: 'string', des: '要修改为的手机号或者邮箱' }
                    ]
                },
                update_passport_account: {
                    name: '修改当前登录用户绑定邮箱或者手机',
                    docUrl: '',
                    url: '/passport/update_passport_account',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account', isMust: true, type: 'string', des: '要修改为的手机号或者邮箱' },
                        { key: 'code', isMust: true, type: 'string', des: '验证码' }
                    ]
                }
            }
        },
        message: {
            v1: {
                get_inbox_system_message: {
                    name: '获取系统消息或日程系统消息或知识系统消息',
                    docUrl: '/doc/message/system_message.html',
                    url: '/message/get_inbox_system_message',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'inbox_load_type', isMust: false, type: 'int', des: '系统消息加载类型(1系统消息10日程系统消息14知识系统消息)' },
                        { key: 'is_unread', isMust: false, type: 'bool', des: '是否获取未读消息' },
                        { key: 'is_favorite', isMust: false, type: 'bool', des: '是否获取标记' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键字查找' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '当前页码(以1开始，1代表第一页)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数' }
                    ]
                },
                get_inbox_post_message: {
                    name: '获取动态消息',
                    docUrl: '/doc/message/post_message.html',
                    url: '/message/get_inbox_post_message',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'inbox_load_type', isMust: false, type: 'int', des: '动态消息加载类型(2动态全部3动态提到我的4动态提到群组5动态回复我的)默认动态全部' },
                        { key: 'is_unread', isMust: false, type: 'bool', des: '是否获取未读消息' },
                        { key: 'is_favorite', isMust: false, type: 'bool', des: '是否获取标记' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键字查找' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '当前页码(以1开始，1代表第一页)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数' }
                    ]
                },
                get_inbox_task_message: {
                    name: '获取任务消息',
                    docUrl: '/doc/message/task_message.html',
                    url: '/message/get_inbox_task_message',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'inbox_load_type', isMust: false, type: 'int', des: '任务消息加载类型(6任务全部7任务项目提到我的8任务回复提到我的9任务系统消息)默认任务全部' },
                        { key: 'is_unread', isMust: false, type: 'bool', des: '是否获取未读消息' },
                        { key: 'is_favorite', isMust: false, type: 'bool', des: '是否获取标记' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键字查找' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '当前页码(以1开始，1代表第一页)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数' }
                    ]
                },
                update_inbox_message_favorite: {
                    name: '修改inbox消息标星',
                    docUrl: '',
                    url: '/message/update_inbox_message_favorite',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'inbox_id', isMust: true, type: 'string', des: '是否获取未读消息' },
                        { key: 'is_favorite', isMust: false, type: 'bool', des: '是否标星' }
                    ]
                }
            }
        },
        webchat: {
            v1: {
                get_chat_list: {
                    name: '获取个人和群聊最近联系人',
                    docUrl: '/doc/webchat/chat_list.html',
                    url: '/webchat/get_chat_list',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_chat_un_read_count: {
                    name: '获取未读计数',
                    docUrl: '/doc/webchat/un_read.html',
                    url: '/webchat/get_chat_un_read_count',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_user_or_group_message: {
                    name: '获取与某个用户或某个群组的消息列表',
                    docUrl: '/doc/webchat/message_list.html',
                    url: '/webchat/get_user_or_group_message',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: false, type: 'string', des: '用户编号' },
                        { key: 'group_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'since_time', isMust: false, type: 'string', des: '起始时间如 2016-06-03 13:12:58.342' },
                        { key: 'direction', isMust: false, type: 'bool', des: '向前 true/向后 false' },
                        { key: 'keyword', isMust: false, type: 'string', des: '搜索关键字' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '当前页码(以1开始，1代表第一页)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数' }
                    ]
                },
                get_user_or_group_message_count: {
                    name: '私聊会话中用户/群组消息的总条数',
                    docUrl: {type: 'string', url: ''},
                    url: '/webchat/get_user_or_group_message_count',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: false, type: 'string', des: '用户编号' },
                        { key: 'group_id', isMust: false, type: 'string', des: '群组编号' }
                    ]
                },
                get_user_or_group_message_by_id: {
                    name: '获取跟某个用户/某个群组的前后几条信息',
                    docUrl: {type: 'string', url: ''},
                    url: '/webchat/get_user_or_group_message_by_id',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: false, type: 'string', des: '用户编号' },
                        { key: 'group_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'message_id', isMust: true, type: 'string', des: '消息id' },
                        { key: 'size', isMust: false, type: 'int', des: '前后消息数量' }
                    ]
                },
                delete_chat_history_item: {
                    name: '删除历史聊天记录',
                    docUrl: {type: 'string', url: ''},
                    url: '/webchat/delete_chat_history_item',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: false, type: 'string', des: '用户编号' },
                        { key: 'group_id', isMust: false, type: 'string', des: '群组编号' }
                    ]
                },
                set_single_or_all_group_push: {
                    name: '设置单个/所有群组push',
                    docUrl: {type: 'string', url: ''},
                    url: '/webchat/set_single_or_all_group_push',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'is_push', isMust: true, type: 'bool', des: '是否开启推送 ' },
                        { key: 'choose_type', isMust: true, type: 'bool', des: '单个 true/全部 false ' },
                        { key: 'group_id', isMust: false, type: 'string', des: '群组编号' }
                    ]
                }
            }
        },
        invitation: {
            v1: {
                get_invite_link: {
                    name: '获取通用邀请链接(返回key:link)',
                    docUrl: '',
                    url: '/invitation/get_invite_link',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'source_id', isMust: true, type: 'string', des: '来源id(如账号id,网络id,任务id,日程id)' },
                        { key: 'from_type', isMust: true, type: 'int', des: ' 邀请来源 0邀请好友1邀请群组2邀请任务3邀请知识4邀请网络5邀请日程6邀请项目' },
                        { key: 'link_type', isMust: true, type: 'int', des: '邀请去向 1微信2QQ3链接4二维码' }
                    ]
                },
                get_qrcode_invite_link: {
                    name: '获取通用邀请链接二维码(返回key:link)',
                    docUrl: '',
                    url: '/invitation/get_qrcode_invite_link',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'source_id', isMust: true, type: 'string', des: '来源id(如账号id,网络id,任务id,日程id)' },
                        { key: 'from_type', isMust: true, type: 'int', des: ' 邀请来源 0邀请好友1邀请群组2邀请任务3邀请知识4邀请网络5邀请日程6邀请项目' },
                        { key: 'link_type', isMust: true, type: 'int', des: '邀请去向 1微信2QQ3链接4二维码' },
                        { key: 'width', isMust: false, type: 'string', des: '二维码宽默认200px' },
                        { key: 'height', isMust: false, type: 'string', des: '二维码高默认200px' }
                    ]
                },
                get_source_invite_links: {
                    name: '获取来源邀请链接列表',
                    docUrl: '/doc/invitation/invite_link.html',
                    url: '/invitation/get_source_invite_links',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'source_id', isMust: true, type: 'string', des: '来源id(如账号id,网络id,任务id,日程id)' },
                        { key: 'is_all', isMust: false, type: 'bool', des: '是否获取这个来源全部邀请链接（默认false：只获取我创建的）' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '当前页码(以1开始，1代表第一页)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数' }
                    ]
                },
                update_link_expire: {
                    name: '更新链接为失效',
                    docUrl: '',
                    url: '/invitation/update_link_expire',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'token', isMust: true, type: 'string', des: '链接的token值' }
                    ]
                },
                invite_user_join_source: {
                    name: '邀请成员加入各模块',
                    docUrl: '/doc/invitation/invite_link.html',
                    url: '/invitation/invite_user_join_source',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'source_id', isMust: true, type: 'string', des: '来源id(如账号id,网络id,任务id,日程id)' },
                        { key: 'from_type', isMust: true, type: 'int', des: ' 邀请来源 0邀请好友1邀请群组2邀请任务3邀请知识4邀请网络5邀请日程6邀请项目' },
                        { key: 'account_ids', isMust: false, type: 'string', des: '邀请 现有明道用户(格式[id,id]序列化)' },
                        { key: 'accounts', isMust: false, type: 'string', des: '邀请 非明道用户 手机/邮箱(格式["phone","email"]序列化)' }
                    ]
                },
                get_qrcode_source: {
                    name: '获取二维码链接来源',
                    docUrl: '',
                    url: '/invitation/get_qrcode_source',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'short_url', isMust: true, type: 'string', des: '二维码扫到的链接地址' }
                    ]
                },
                agree_link_invite: {
                    name: '同意加入链接邀请',
                    docUrl: '',
                    url: '/invitation/agree_link_invite',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'token', isMust: true, type: 'string', des: '获取二维码链接来源得到的链接token' }
                    ]
                },
                get_invite_user_join_project_log: {
                    name: '获取我邀请用户加入网络的历史记录',
                    docUrl: '/doc/invitation/invite_project_log.html',
                    url: '/invitation/get_invite_user_join_project_log',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'project_id', isMust: true, type: 'string', des: '网络ID' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '当前页码(以1开始，1代表第一页)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数' }
                    ]
                }
            }
        },
        register: {
            v1: {
                get_country_code: {
                    name: '获取国家号列表',
                    docUrl: '/doc/register/country_code.html',
                    url: '/register/get_country_code',
                    requestMode: 'get',
                    params: [
                    ]
                },
                send_register_code: {
                    name: '发送注册验证码',
                    docUrl: '',
                    url: '/register/send_register_code',
                    requestMode: 'post',
                    params: [
                        { key: 'account', isMust: true, type: 'string', des: '注册的手机号' },
                        { key: 'is_first', isMust: true, type: 'bool', des: '是否是第一次发送(跟选择发送通道有关)' },
                        { key: 'type', isMust: false, type: 'int', des: '验证码类型（0:短信,1:语音）默认短信' }
                    ]
                },
                register_account: {
                    name: '注册账号',
                    docUrl: '',
                    url: '/register/register_account',
                    requestMode: 'post',
                    params: [
                        { key: 'account', isMust: true, type: 'string', des: '注册的手机号' },
                        { key: 'code', isMust: true, type: 'string', des: '验证码' },
                        { key: 'full_name', isMust: false, type: 'string', des: '用户名' },
                        { key: 'password', isMust: false, type: 'string', des: '账号密码(如果没有添密码只验证验证码的正确不注册)' }
                    ]
                }
            }
        },
        qiniu: {
            v1: {
                get_qiniu_token: {
                    name: '获取7牛上传Token(返回值的 type枚举为:1 图片 2 附件 3 语音 4 bug提交)',
                    docUrl: '',
                    url: '/qiniu/get_qiniu_token',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'type', isMust: true, type: 'int', des: '1主站 2chat' }
                    ]
                }
            }
        },
        application: {
            v1: {
                get_account_apps: {
                    name: '获取用户安装的应用列表',
                    docUrl: '/doc/application/account_apps.html',
                    url: '/application/get_account_apps',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_app_oauth2_url: {
                    name: '获取某应用的授权回调路径(data中返回key为url的值)',
                    docUrl: '',
                    url: '/application/get_app_oauth2_url',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'app_key', isMust: true, type: 'string', des: '应用app_key' },
                        { key: 'project_id', isMust: false, type: 'string', des: '如果是企业安装应用必须传安装的网络ID' }
                    ]
                },
                get_app_oauth2_access_token: {
                    name: '获取某应用的SSO的token(data中返回access_token的model)',
                    docUrl: '',
                    url: '/application/get_app_oauth2_access_token',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'app_key', isMust: true, type: 'string', des: '应用app_key' },
                        { key: 'project_id', isMust: false, type: 'string', des: '如果是企业安装应用必须传安装的网络ID' }
                    ]
                },
                get_app_admins: {
                    name: '获取应用管理员(只针对企业应用)',
                    docUrl: '',
                    url: '/application/get_app_admins',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'app_id', isMust: true, type: 'string', des: '应用ID' }
                    ]
                },
                get_apps: {
                    name: '获取个人和我加入的企业的安装应用',
                    docUrl: '',
                    url: '/application/get_apps',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                }
            }
        },
        admin: {
            v1: {
                application: {
                    get_project_apps: {
                        name: '获取网络安装应用列表',
                        docUrl: {type: 'string', url: ''},
                        url: '/admin/application/get_application_list',
                        requestMode: 'get',
                        params: [
                            { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                            { key: 'project_id', isMust: true, type: 'string', des: '哪个网络必传' },
                            { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码(不指定页码返回所有)' },
                            { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                        ]
                    }
                },
                department: {
                    get_project_departments: {
                        name: '获取网络部门',
                        docUrl: {type: '', url: '/v1group.html'},
                        url: '/admin/department/get_project_departments',
                        requestMode: 'get',
                        params: [
                            { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                            { key: 'project_id', isMust: true, type: 'string', des: '哪个网络必传' },
                            { key: 'keywords', isMust: false, type: 'string', des: '群组的简介' },
                            { key: 'pageindex', isMust: false, type: 'int', des: '第几页' },
                            { key: 'pagesize', isMust: false, type: 'int', des: '每页条数' },
                            { key: 'sort_field', isMust: false, type: 'int', des: '排序条件' },
                            { key: 'sort_type', isMust: false, type: 'int', des: '排序类型' }
                        ]
                    },
                    add_project_department: {
                        name: '新增网络部门',
                        docUrl: {type: 'string', url: ''},
                        url: '/admin/department/add_project_department',
                        requestMode: 'post',
                        params: [
                            { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                            { key: 'project_id', isMust: true, type: 'string', des: '哪个网络必传' },
                            { key: 'department_name', isMust: true, type: 'string', des: '部门名字' },
                            { key: 'mapping_group_id', isMust: false, type: 'string', des: '关联群组ID' }
                        ]
                    },
                    update_project_department: {
                        name: '修改网络部门',
                        docUrl: {type: 'string', url: ''},
                        url: '/admin/department/update_project_department',
                        requestMode: 'post',
                        params: [
                            { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                            { key: 'project_id', isMust: true, type: 'string', des: '哪个网络必传' },
                            { key: 'department_id', isMust: true, type: 'string', des: '部门ID' },
                            { key: 'department_name', isMust: true, type: 'string', des: '部门名字' },
                            { key: 'mapping_group_id', isMust: false, type: 'string', des: '关联群组ID' }
                        ]
                    }
                }
            },
            v2: {
                application: {
                    create_group: {
                        name: '创建一个新的群组',
                        docUrl: {type: '', url: '/v1group.html'},
                        url: '/group/create_group',
                        requestMode: 'post',
                        params: [
                            { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                            { key: 'group_name', isMust: true, type: 'string', des: '要创建的群组的名称' },
                            { key: 'about', isMust: false, type: 'string', des: '群组的简介' },
                            { key: 'is_hidden', isMust: false, type: 'bool', des: '是否列入公司群组列表(*只有私有群组才有此功能)，0不隐藏，1隐藏' },
                            { key: 'is_approval', isMust: false, type: 'string', des: '用户加入是否审批(0：否，1：是)' },
                            { key: 'is_post', isMust: false, type: 'string', des: '是否作为动态分享群组(0：否，1：是)' },
                            { key: 'dept_id', isMust: false, type: 'int', des: '部门ID(如果设置官方群组需传关联的部门ID)' },
                            { key: 'account_ids', isMust: false, type: 'string', des: '群组成员' }
                        ]
                    },
                    get_project_list: {
                        name: '获取我的网络列表',
                        docUrl: {type: 'string', url: ''},
                        url: '/company/get_project_list',
                        requestMode: 'get',
                        params: [
                            { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                            { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码(不指定页码返回所有)' },
                            { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                        ]
                    }
                }
            }
        },
        private: {
            v1: {
                group: {
                    get_all_project_groups: {
                        name: '用户所有加入的网络和群组',
                        docUrl: {type: '', url: ''},
                        url: '/private/group/get_all_project_groups',
                        requestMode: 'get',
                        params: [
                            { key: 'account_id', isMust: true, type: 'string', des: '账号ID' },
                            { key: 'type', isMust: false, type: 'int', des: '0我创建的群组 1我加入的群组 2我是管理员的群组 默认-1所有' }
                        ]
                    }
                },
                company: {
                    delete_project_cache: {
                        name: '根据订单消费类型清除网络缓存',
                        docUrl: {type: '', url: ''},
                        url: '/private/company/delete_project_cache',
                        requestMode: 'post',
                        params: [
                            { key: 'project_id', isMust: true, type: 'string', des: '网络ID' },
                            { key: 'record_type', isMust: true, type: 'int', des: '订单消费类型（1短信2充值3升级高级模式4购买用户包5应用手动账单6应用自动账单7应用归还扣款8天数包'}
                        ]
                    }
                },
                billing: {
                    add_transaction_record: {
                        name: '添加订单消费记录',
                        docUrl: {type: '', url: ''},
                        url: '/private/billing/add_transaction_record',
                        requestMode: 'post',
                        params: [
                            { key: 'project_id', isMust: true, type: 'string', des: '网络ID'},
                            { key: 'order_id', isMust: true, type: 'string', des: '订单ID' },
                            { key: 'record_type', isMust: true, type: 'string', des: '订单消费类型（1短信2充值3升级高级模式4购买用户包5应用手动账单6应用自动账单7应用归还扣款8天数包'},
                            { key: 'record_status', isMust: true, type: 'string', des: '订单状态（1等待支付2交易成功3交易失败4取消订单5订单过期6质疑中）'},
                            { key: 'create_account_id', isMust: true, type: 'string', des: '创建人ID'},
                            { key: 'pay_account_id', isMust: false, type: 'string', des: '付款人ID'},
                            { key: 'app_id', isMust: true, type: 'string', des: '应用号'},
                            { key: 'price', isMust: true, type: 'string', des: '订单价格'},
                            { key: 'remark', isMust: true, type: 'string', des: '订单描述'}
                        ]
                    },
                    update_transaction_record: {
                        name: '修改订单消费记录',
                        docUrl: {type: '', url: ''},
                        url: '/private/billing/update_transaction_record',
                        requestMode: 'post',
                        params: [
                            { key: 'project_id', isMust: true, type: 'string', des: '网络ID'},
                            { key: 'order_id', isMust: true, type: 'string', des: '订单ID' },
                            { key: 'record_status', isMust: true, type: 'string', des: '订单状态（1等待支付2交易成功3交易失败4取消订单5订单过期6质疑中）'},
                            { key: 'pay_account_id', isMust: true, type: 'string', des: '付款人ID'},
                            { key: 'app_id', isMust: false, type: 'string', des: '应用号'},
                            { key: 'price', isMust: false, type: 'string', des: '订单价格'},
                            { key: 'remark', isMust: true, type: 'string', des: '修改描述'}
                        ]
                    }
                }
            }
        },
        kc: {
            v1: {
                add_root: {
                    name: '添加根目录(共享文件夹)',
                    docUrl: '/doc/kc/kc_root_detail.html',
                    url: '/kc/add_root',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'root_name', isMust: true, type: 'string', des: '文件夹名' },
                        { key: 'members', isMust: false, type: 'string', des: '共享成员 [{"permission" : 权限(无权限=-1, 拥有者=1, 管理员=2,普通成员=3),"accountId" : "用户编号"} ]' },
                        { key: 'project_id', isMust: false, type: 'string', des: '文件夹归属于哪个网络 为空代表个人' }
                    ]
                },
                add_node: {
                    name: '添加节点',
                    docUrl: '/doc/kc/kc_node_detail.html',
                    url: '/kc/add_node',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'node_name', isMust: true, type: 'string', des: '节点名' },
                        { key: 'parent_id', isMust: false, type: 'string', des: '父节点id' },
                        { key: 'root_id', isMust: false, type: 'string', des: '根节点id' },
                        { key: 'file_path', isMust: false, type: 'string', des: '文件路径' },
                        { key: 'size', isMust: false, type: 'int', des: '文件大小' },
                        { key: 'node_type', isMust: false, type: 'int', des: '节点类型(文件夹=1,文件=2)' }
                    ]
                },
                add_star_node: {
                    name: '节点标星',
                    docUrl: '',
                    url: '/kc/add_star_node',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'node_id', isMust: true, type: 'string', des: '节点id' },
                        { key: 'is_star', isMust: true, type: 'bool', des: '是否标星 (true 标星 false 取消)' }
                    ]
                },
                add_star_root: {
                    name: '根节点标星',
                    docUrl: '',
                    url: '/kc/add_star_root',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'root_id', isMust: true, type: 'string', des: '根节点id' },
                        { key: 'is_star', isMust: true, type: 'bool', des: '是否标星 (true 标星 false 取消)' }
                    ]
                },
                delete_node: {
                    name: '删除节点',
                    docUrl: '',
                    url: '/kc/delete_node',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'node_id', isMust: true, type: 'string', des: '节点id' }
                    ]
                },
                delete_root: {
                    name: '删除根节点',
                    docUrl: '',
                    url: '/kc/delete_root',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'root_id', isMust: true, type: 'string', des: '根节点id' }
                    ]
                },
                move_node: {
                    name: '移动节点',
                    docUrl: '',
                    url: '/kc/move_node',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'node_id', isMust: true, type: 'string', des: '节点id' },
                        { key: 'moveto_id', isMust: true, type: 'string', des: '移到哪一个节点的id' },
                        { key: 'location_type', isMust: true, type: 'int', des: '节点所属类型(我的文件=1,根节点=2,子节点=3,星标文件=4,最近使用=5)' }
                    ]
                },
                update_root_owner: {
                    name: '托付共享文件夹负责人',
                    docUrl: '',
                    url: '/kc/update_root_owner',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'root_id', isMust: true, type: 'string', des: '根节点id' },
                        { key: 'member_id', isMust: true, type: 'string', des: '负责人id' }
                    ]
                },
                remove_root_member: {
                    name: '移除根节点成员',
                    docUrl: '',
                    url: '/kc/remove_root_member',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'root_id', isMust: true, type: 'string', des: '根节点id' },
                        { key: 'member_id', isMust: true, type: 'string', des: '成员id' }
                    ]
                },
                update_root_member_status: {
                    name: '修改根节点成员状态',
                    docUrl: '',
                    url: '/kc/update_root_member_status',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'root_id', isMust: true, type: 'string', des: '根节点id' },
                        { key: 'member_id', isMust: true, type: 'string', des: '成员id' },
                        { key: 'member_status', isMust: true, type: 'int', des: '成员状态(1=正常 2=未审核)' }

                    ]
                },
                add_root_member: {
                    name: '添加根节点成员',
                    docUrl: '',
                    url: '/kc/add_root_member',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'root_id', isMust: true, type: 'string', des: '根节点id' },
                        { key: 'member_id', isMust: true, type: 'string', des: '成员id' }
                    ]
                },
                update_root_member_auth: {
                    name: '修改根节点成员权限',
                    docUrl: '',
                    url: '/kc/update_root_member_auth',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'root_id', isMust: true, type: 'string', des: '根节点id' },
                        { key: 'member_id', isMust: true, type: 'string', des: '成员id' },
                        { key: 'permission', isMust: true, type: 'int', des: '根节点权限(无权限=-1,拥有者=1,管理员=2,普通成员=3)' }
                    ]
                },
                update_node_name: {
                    name: '更新节点名字',
                    docUrl: '',
                    url: '/kc/update_node_name',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'node_id', isMust: true, type: 'string', des: '节点id' },
                        { key: 'node_name', isMust: true, type: 'string', des: '节点名字' }
                    ]
                },
                update_root_name: {
                    name: '更新根节点名字',
                    docUrl: '',
                    url: '/kc/update_root_name',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'root_id', isMust: true, type: 'string', des: '根节点id' },
                        { key: 'root_name', isMust: true, type: 'string', des: '根节点名字' }
                    ]
                },
                update_node_share: {
                    name: '更新节点分享',
                    docUrl: '',
                    url: '/kc/update_node_share',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'node_id', isMust: true, type: 'string', des: '节点id' },
                        { key: 'is_downloadable', isMust: false, type: 'bool 没修改可不传', des: '是否允许下载' },
                        { key: 'is_editable', isMust: false, type: 'bool 没修改可不传', des: '是否允许编辑' },
                        { key: 'visible_type', isMust: true, type: 'int', des: '分享类型(关闭分享=1,所有联系人(node 归属个人时)|网络内成员=2,有明道帐号=3,所有人=4)' }
                    ]
                },
                get_account_usage: {
                    name: '获取用户流量使用情况',
                    docUrl: '',
                    url: '/kc/get_account_usage',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_all_nodes: {
                    name: '获取可见根节点下所有节点列表',
                    docUrl: '/doc/kc/kc_get_nodes.html',
                    url: '/kc/get_all_nodes',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'position', isMust: true, type: 'string', des: '用户可见的 position 开头的所有节点' }
                    ]
                },
                get_my_nodes: {
                    name: '获取我的节点',
                    docUrl: '/doc/kc/kc_get_nodes.html',
                    url: '/kc/get_my_nodes',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'parent_id', isMust: false, type: 'string', des: '父节点id' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键字' },
                        { key: 'skip', isMust: false, type: 'int', des: '从第几个开始查找' },
                        { key: 'limit', isMust: false, type: 'int', des: '显示数量' }
                    ]
                },
                get_node_detail: {
                    name: '获取节点详情',
                    docUrl: '/doc/kc/kc_node_detail.html',
                    url: '/kc/get_node_detail',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'node_id', isMust: true, type: 'string', des: '节点id' }
                    ]
                },
                get_root_detail: {
                    name: '获取根节点详情',
                    docUrl: '/doc/kc/kc_root_detail.html',
                    url: '/kc/get_root_detail',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'root_id', isMust: true, type: 'string', des: '根节点id' }
                    ]
                },
                get_roots: {
                    name: '获取根节点列表',
                    docUrl: '/doc/kc/kc_get_roots.html',
                    url: '/kc/get_roots',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'project_id', isMust: false, type: 'string', des: '获取根节点列表，个人不传，网络传网络id' }
                      ]
                },
                get_nodes: {
                    name: '获取根节点/父节点下节点列表',
                    docUrl: '/doc/kc/kc_get_nodes.html',
                    url: '/kc/get_nodes',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'parent_id', isMust: true, type: 'string', des: '父节点id' },
                        { key: 'type', isMust: true, type: 'int', des: '区分根节点是什么类型 1：我的文件，2：根节点' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键字' },
                        { key: 'skip', isMust: false, type: 'int', des: '从第几个开始查找' },
                        { key: 'limit', isMust: false, type: 'int', des: '显示数量' }
                    ]
                },
                get_recentlyuserd_nodes: {
                    name: '获取最近使用的节点列表',
                    docUrl: '/doc/kc/kc_get_nodes.html',
                    url: '/kc/get_recentlyuserd_nodes',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键字' }

                    ]
                },
                get_stared_nodes: {
                    name: '获取标星节点列表',
                    docUrl: '/doc/kc/kc_get_nodes.html',
                    url: '/kc/get_stared_nodes',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键字' },
                        { key: 'skip', isMust: false, type: 'int', des: '从第几个开始查找' },
                        { key: 'limit', isMust: false, type: 'int', des: '显示数量' }
                    ]
                }

            }
        },
        search: {
            v1: {
                smart_search: {
                    name: '智能搜索(全局搜索)',
                    docUrl: '/doc/search/search.html',
                    url: '/search/smart_search',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: true, type: 'string', des: '搜索关键至少2个字符' },
                        { key: 'search_type', isMust: false, type: 'int', des: '搜索类型（1用户账号2群组3动态4任务5知识）默认全部' },
                        { key: 'search_range', isMust: false, type: 'int', des: '搜索范围（0全部1个人2网络）默认0' },
                        { key: 'project_id', isMust: false, type: 'string', des: '当搜索返回为2时网络ID必传' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码(不指定页码返回所有)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                    ]
                }
            }
        }
    };

    function apiSetting() {
        var apiSetting = {
            getApiAll: getApiAll,
            getApiSetting: getApiSetting,
            getapiPram: getapiPram
        }
        return apiSetting;
        function getApiAll(scallback) {
            var moduleArray = [];
            for (var module in apiParam) {
                var moduleItem = apiParam[module];
                var moduleObj = {};
                var versionArray = [];
                for (var version in moduleItem) {
                    var versionItem = moduleItem[version];
                    var versionObj = {};
                    var portArray = [];
                    for (var port in versionItem) {
                        var privateItem = versionItem[port];
                        var privateObj = {};
                        var privateArray = [];
                        if (module === 'admin' || module === 'private') {
                            for (var privates in privateItem) {
                                privateArray.push(privates);
                            }
                            privateObj.port = port;
                            privateObj.value = privateArray;
                            portArray.push(privateObj);
                        } else {
                            portArray.push(port);
                        }
                    }
                    versionObj.version = version;
                    versionObj.value = portArray;
                    versionArray.push(versionObj);
                }
                moduleObj.module = module;
                moduleObj.value = versionArray;
                moduleArray.push(moduleObj);
            }
            scallback(moduleArray);
        }

        function getApiSetting(module, version, port, item, scallback) {
            var param = '';
            if (module == 'oauth2') {
                param = apiParam[module][port];
            } else {
                if (item) {
                    param = apiParam[module][version][port][item];
                } else {
                    param = apiParam[module][version][port];
                }
            }

            if (param) {
                scallback(param);
            }
        }

        function getapiPram(search, scallback) {
            var list = [];
            for (var module in apiParam) {
                var moduleItem = apiParam[module];
                var moduleObj = {};
                var versionArray = [];
                for (var version in moduleItem) {
                    var versionItem = moduleItem[version];
                    for (var port in versionItem) {
                        if (port.toUpperCase().indexOf(search.toUpperCase()) != -1) {
                            var portObject = { "module": module, "version": version, "port": port }
                            list.push(portObject);
                        }
                    }
                }
            }
            scallback(list)
        }
    }
})
();












