(function () {
    'use strict';

    angular
        .module('mmpadmin')
        .factory('apiSetting2', apiSetting);

    var apiParam = {
        post: {
            v1: {
                get_all_posts: {
                    name: '获取全公司的动态更新 ',
                    docUrl: {type: '', url: ''},
                    url: '/post/v1/get_all_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'post_type', isMust: false, type: 'int', des: '筛选动态更新类型,默认-1：表示全部动态；0：普通消息；1：链接；2：图片；3：文档；4：提问；7：投票；8：视频' },
                        { key: 'since_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比since_id大的动态更新（即比since_id发表时间晚的动态更新）' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                get_at_me_posts: {
                    name: '获取提及@我的动态更新(适用inbox中的提到我的)',
                    docUrl: {type: '', url: ''},
                    url: '/post/v1/get_at_me_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'is_unreading', isMust: false, type: 'bool', des: '是否获取未读提及我的动态 默认0：否' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'post_type', isMust: false, type: 'int', des: '筛选动态更新类型,默认-1：表示全部动态；0：普通消息；1：链接；2：图片；3：文档；4：提问；7：投票' },
                        { key: 'pageindex', isMust: false, type: 'int64', des: '指定当前的页码' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                get_detail_post: {
                    name: '根据动态更新编号获取单条动态更新内容',
                    docUrl: {type: '', url: ''},
                    url: '/post/v1/get_detail_post',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'string', des: '动态更新编号' }
                    ]
                },
                get_doc_faq_img: {
                    name: '获取 文档/图片/问答 列表信息 ',
                    docUrl: {type: '', url: ''},
                    url: '/post/v1/get_doc_faq_img',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'filter_type', isMust: false, type: 'int', des: '过滤类型。默认值0，0表示所有；1表示我上传的；2表示我收藏的' },
                        { key: 'since_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比since_id大的动态更新（即比since_id发表时间晚的动态更新）' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' },
                        { key: 'select_type', isMust: true, type: 'int', des: '查询类型 （2：图片,3:文档，4：问答）' }
                    ]
                },
                get_favorite_posts: {
                    name: '获取当前登录用户收藏的动态更新',
                    docUrl: {type: '', url: ''},
                    url: '/post/v1/get_favorite_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'post_type', isMust: false, type: 'int', des: '筛选动态更新类型,默认-1：表示全部动态；0：普通消息；1：链接；2：图片；3：文档；4：提问；7：投票' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                get_group_groups: {
                    name: '获取群组的动态更新',
                    docUrl: {type: '', url: ''},
                    url: '/post/v1/get_group_groups',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                get_list_top_posts: {
                    name: '获取全公司的置顶动态更新',
                    docUrl: {type: '', url: ''},
                    url: '/post/v1/get_list_top_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_my_posts: {
                    name: '获取当前登录用户发布的动态更新',
                    docUrl: {type: '', url: ''},
                    url: '/post/v1/get_my_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'post_type', isMust: false, type: 'int', des: '筛选动态更新类型,默认-1：表示全部动态；0：普通消息；1：链接；2：图片；3：文档；4：提问；7：投票；8：视频' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'since_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比since_id大的动态更新（即比since_id发表时间晚的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                get_reply_by_me_posts: {
                    name: '获取我回复的最新回复信息',
                    docUrl: {type: '', url: ''},
                    url: '/post/v1/get_reply_by_me_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                get_reply_me_posts: {
                    name: '获取回复我的最新回复信息',
                    docUrl: {type: '', url: ''},
                    url: '/post/v1/get_reply_me_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'is_unreading', isMust: false, type: 'bool', des: '是否获取未读提及我的动态 默认0：否' },
                        { key: 'max_id', isMust: false, type: 'string', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）(特殊，数据库内部处理)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                get_reply_post: {
                    name: '根据动态更新编号获取某条动态更新的回复列表信息',
                    docUrl: {type: '', url: ''},
                    url: '/post/v1/get_reply_post',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'string', des: '动态更新编号' }
                    ]
                },
                get_tag_posts: {
                    name: '获取某个标签下的动态更新',
                    docUrl: {type: '', url: ''},
                    url: '/post/v1/get_tag_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'tag', isMust: true, type: 'string', des: '标签名称' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数（默认值20，最大值100' }
                    ]
                },
                get_user_posts: {
                    name: '获取用户发布的动态更新',
                    docUrl: {type: '', url: ''},
                    url: '/post/v1/get_user_posts',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: true, type: 'string', des: '用户编号' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                get_list_tag: {
                    name: '获取当前企业动态更新标签信息',
                    docUrl: {type: '', url: ''},
                    url: '/post/v1/get_list_tag',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索' },
                        { key: 'pageindex', isMust: false, type: 'int64', des: '指定当前的页码' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数（默认值20，最大值100' }
                    ]
                },
                post_add_favorite_or_like: {
                    name: '增加当前登录用户的一条动态更新 收藏/喜欢',
                    docUrl: {type: '', url: ''},
                    url: '/post/v1/post_add_favorite_or_like',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'string', des: '动态更新编号' },
                        { key: 'choose_type', isMust: false, type: 'int', des: '操作类型 1:喜欢 2：收藏' }
                    ]
                },
                post_add_reply: {
                    name: '增加一条动态更新的回复',
                    docUrl: {type: '', url: ''},
                    url: '/post/v1/post_add_reply',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'string', des: '回复的动态更新编号' },
                        { key: 'reply_id', isMust: false, type: 'string', des: '回复编号（可以对别人的回复进行回复）[可选]' },
                        { key: 'reply_msg', isMust: true, type: 'int', des: '回复的消息内容([aid]accountID[/aid]代表@某个人,[gid]groupID[/gid]代表@某个群组)' },
                        { key: 'file_type', isMust: false, type: 'int', des: '可为空(为空时 p_img或p_doc也必须为空)，picture：表示上传图片；document：表示上传文档' },
                        { key: 'p_img或p_doc', isMust: true, type: 'binary', des: '要上传的图片、文档。图片仅支持JPEG,GIF,PNG,目前上传图片大小限制为<8M。文档仅支持DOC,PDF,XLS,PPT,TXT,压缩包,目前上传文件大小限制为<50M' },
                        { key: 'is_share', isMust: false, type: 'bool', des: '同时转发动态(0表示不转发动态；1表示同时转发动态)' },
                        { key: 'group_ids', isMust: false, type: 'string', des: '可为空，动态分享群组编号(多个群组用逗号隔开)' },
                        { key: 'share_type', isMust: false, type: 'int', des: '分享范围(0表示分享给所有同事;1表示群内分享；2表示所有关注者和群组；3表示分享给自己； 默认0表示分享给所有同事)' }

                    ]
                },
                post_delete_tag: {
                    name: '增加/删除一条动态更新的标签',
                    docUrl: {type: '', url: ''},
                    url: '/post/v1/post_delete_tag',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'string', des: '动态更新编号(post_id为空 只创建个标签)' },
                        { key: 'tag', isMust: false, type: 'string', des: '标签名称' },
                        { key: 'choose_type', isMust: true, type: 'bool', des: '操作类型 添加=true/删除=false' }
                    ]
                },
                post_delete: {
                    name: '根据动态更新编号删除一条动态更新',
                    docUrl: {type: '', url: ''},
                    url: '/post/v1/post_delete',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'binary', des: '动态更新编号' }
                    ]
                },
                post_delete_favorite_or_like: {
                    name: '删除当前登录用户 收藏/喜欢 的一条动态更新 ',
                    docUrl: {type: '', url: ''},
                    url: '/post/v1/post_delete_favorite_or_like',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'string', des: '动态更新编号' },
                        { key: 'choose_type', isMust: true, type: 'int', des: '操作类型 喜欢=1/收藏=2' }
                    ]
                },
                post_delete_reply: {
                    name: '根据回复编号删除一条回复 *',
                    docUrl: {type: '', url: ''},
                    url: '/post/v1/post_delete_reply',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'string', des: '动态更新编号' },
                        { key: 'reply_id', isMust: false, type: 'string', des: '回复编号（必须是当前登录用户自己创建的回复' }
                    ]
                },
                post_top: {
                    name: '置顶一条动态更新（仅限网络管理员使用） ',
                    docUrl: {type: '', url: ''},
                    url: '/post/post_top',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'post_id', isMust: true, type: 'binary', des: '动态更新编号' },
                        { key: 'duration', isMust: false, type: 'int', des: '置顶时长 默认为:不限时长 1:代表时长24小时；2:代表时长48小时；3:代表时长72小时.' }
                    ]
                },
                update: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/update',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_id', isMust: false, type: 'string', des: '可为空，动态分享群组编号(多个群组用逗号隔开)' },
                        { key: 'p_msg', isMust: true, type: 'string', des: '动态更新内容(###userID###代表@某个人,$$$groupID$$$代表@某个群组，#标签内容#代表给动态定义标签)' },
                        { key: 'p_type', isMust: false, type: 'int', des: '动态更新类型( 0表示普通动态更新（默认值）;1表示链接动态更新 ;4表示问答动态更新	)' },
                        { key: 's_type', isMust: false, type: 'int', des: '分享范围(0表示分享给所有同事;1表示群内分享；2表示所有关注者和群组；3表示分享给自己； 默认0表示分享给所有同事)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                upload: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/upload',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_id', isMust: false, type: 'string', des: '可为空，动态分享群组编号(多个群组用逗号隔开)' },
                        { key: 'p_msg', isMust: true, type: 'string', des: '动态更新内容(###userID###代表@某个人,$$$groupID$$$代表@某个群组，#标签内容#代表给动态定义标签)' },
                        { key: 'f_type', isMust: false, type: 'int', des: '可为空，默认为picture：表示上传图片；document：表示上传文档' },
                        { key: 'p_img或p_doc', isMust: true, type: 'binary', des: '要上传的图片、文档。图片仅支持JPEG,GIF,PNG,目前上传图片大小限制为<8M。文档仅支持DOC,PDF,XLS,PPT,TXT,压缩包,目前上传文件大小限制为<50M' },
                        { key: 'is_center', isMust: false, type: 'int', des: '是否加入中心(0表示不加入；1表示加入 默认为1加入)' },
                        { key: 's_type', isMust: false, type: 'string', des: '分享范围(0表示分享给所有同事;1表示群内分享；2表示所有关注者和群组；3表示分享给自己； 默认0表示分享给所有同事)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                }
            }
        },
        task: {
            v1: {
                get_top_folders: {
                    name: '获取用户置顶项目',
                    docUrl: {type: '', url: '/v1task.html'},
                    url: '/task/get_top_folders',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_main_folders: {
                    name: '获取个人或网络下文件夹和初层项目列表',
                    docUrl: {type: '', url: '/v1task.html'},
                    url: '/task/get_main_folders',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'project_id', isMust: false, type: 'string', des: '加入的网络id(不传为个人自由网络)' }
                    ]
                },
                get_file_folders: {
                    name: '获取项目文件夹下的项目列表',
                    docUrl: {type: '', url: '/v1task.html'},
                    url: '/task/get_file_folders',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'folder_file_id', isMust: true, type: 'string', des: '指定的文件夹id' },
                        { key: 'project_id', isMust: false, type: 'string', des: '加入的网络id(不传为个人自由网络)' }
                    ]
                },
                get_folder_stages: {
                    name: '获取项目下的阶段',
                    docUrl: {type: '', url: '/v1task.html'},
                    url: '/task/get_folder_stages',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'folder_id', isMust: true, type: 'string', des: '指定的项目id' },
                        { key: 'project_id', isMust: false, type: 'string', des: '指定的网络id（不传获取个人网络下）' }
                    ]
                },
                add_folder: {
                    name: '创建项目',
                    docUrl: {type: '', url: ''},
                    url: '/task/add_folder',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'name', isMust: true, type: 'string', des: '项目名称' },
                        { key: 'charge_user', isMust: false, type: 'string', des: '项目负责人 默认当前登录用户' },
                        { key: 'dead_time', isMust: false, type: 'datetime', des: '项目截止日期' },
                        { key: 'is_star', isMust: false, type: 'bool', des: '是否给项目标星（默认：false）' },
                        { key: 'members', isMust: false, type: 'string', des: '项目成员ID多个以，相隔' },
                        { key: 'admins', isMust: false, type: 'string', des: '项目管理员ID多个以，相隔' },
                        { key: 'visibility', isMust: false, type: 'string', des: '项目可见性 0私密 1公开仅群组 2全公司(默认0)' },
                        { key: 'groups', isMust: false, type: 'string', des: '当项目可见性为公开群组时群组ID（多个群组已，相隔）' },
                        { key: 'folder_file_id', isMust: false, type: 'string', des: '项目文件夹ID' },
                        { key: 'is_top', isMust: false, type: 'bool', des: '是否置顶（默认：false）' },
                        { key: 'project_id', isMust: false, type: 'string', des: '添加到哪个网络中（默认个人自由网络）' }
                    ]
                },
                delete_folder:{
                    name: '删除项目',
                    docUrl: {type: '', url: ''},
                    url: '/task/delete_folder',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'folder_id', isMust: true, type: 'string', des: '项目ID' }
                    ]
                },
                add_folder_stage: {
                    name: '创建项目阶段',
                    docUrl: {type: '', url: ''},
                    url: '/task/add_folder_stage',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'folder_id', isMust: true, type: 'string', des: '项目ID' },
                        { key: 'folder_stage_name', isMust: true, type: 'string', des: '项目阶段名字' },
                        { key: 'sort', isMust: false, type: 'int', des: '阶段次序（默认排在第一个）' },
                        { key: 'project_id', isMust: false, type: 'string', des: '添加到哪个网络中（默认个人自由网络）' }
                    ]
                },
                 delete_folder_stage: {
                    name: '删除项目阶段',
                    docUrl: {type: '', url: ''},
                    url: '/task/delete_folder_stage',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'folder_id', isMust: true, type: 'string', des: '项目ID' },
                        { key: 'folder_stage_id', isMust: true, type: 'string', des: '项目阶段ID' },
                        { key: 'project_id', isMust: false, type: 'string', des: '添加到哪个网络中（默认个人自由网络）' }
                    ]
                },
                update_folder_stage: {
                    name: '修改项目阶段顺序或名字',
                    docUrl: {type: '', url: ''},
                    url: '/task/update_folder_stage',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'folder_id', isMust: true, type: 'string', des: '项目ID' },
                        { key: 'folder_stage_id', isMust: true, type: 'string', des: '项目阶段ID' },
                        { key: 'folder_stage_name', isMust: true, type: 'string', des: '新项目阶段名字' },
                        { key: 'folder_stage_sort', isMust: true, type: 'string', des: '新项目阶段顺序' },
                        { key: 'project_id', isMust: false, type: 'string', des: '添加到哪个网络中（默认个人自由网络）' }
                    ]
                },
                apply_folder_member: {
                    name: '申请成为项目成员',
                    docUrl: {type: '', url: ''},
                    url: '/task/apply_folder_member',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'folder_id', isMust: true, type: 'string', des: '项目ID' },
                        { key: 'apply_info', isMust: true, type: 'string', des: '申请成为成员的理由' },
                        { key: 'project_id', isMust: false, type: 'string', des: '添加到哪个网络中（默认个人自由网络）' }
                    ]
                },
                add_folder_member: {
                    name: '新增项目成员',
                    docUrl: {type: '', url: ''},
                    url: '/task/add_folder_member',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'folder_id', isMust: true, type: 'string', des: '项目ID' },
                        { key: 'members', isMust: true, type: 'string', des: '成员ID（多个，相隔）' },
                        { key: 'project_id', isMust: false, type: 'string', des: '添加到哪个网络中（默认个人自由网络）' }
                    ]
                },
                get_task_list: {
                    name: '获取任务列表',
                    docUrl: {type: '', url: '/task_v2.html'},
                    url: '/task/get_task_list',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'pageindex', isMust: false, type: 'int64', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' },
                        { key: 't_folder_id', isMust: false, type: 'string', des: '项目ID (folderID=1 表示获取未关联项目的任务列表)' },
                        { key: 'stage_id', isMust: false, type: 'string', des: '项目阶段ID' },
                        { key: 'filter_type', isMust: false, type: 'int', des: '过滤类型 默认1：我参与的任务；2：我负责的任务；3：我托付的任务；7：查看同事(与我协作的任务)；8:自己加星的任务' },
                        { key: 'color', isMust: false, type: 'int', des: '任务颜色 默认-1：全部；0：无颜色；1：蓝色；2：紫色；3：红色；4：橙色；5：黄色' },
                        { key: 'status', isMust: false, type: 'int', des: '筛选任务状态 默认0：进行中；1：已完成；-1：全部' },
                        { key: 'tags', isMust: false, type: 'string', des: '过滤任务标签 多个用,隔开' },
                        { key: 'other', isMust: false, type: 'string', des: '指定用户编号 查看其他同事的任务列表' },
                        { key: 'classifys', isMust: false, type: 'string', des: '任务所处分类默认全部' },
                        { key: 'is_top', isMust: false, type: 'string', des: '是否置顶' },
                        { key: 'sort', isMust: false, type: 'int', des: '任务排序 1：按首字母;2:按到期日期;3:按任务创建时间；4:按项目(查询结果结构有变化);5:任务负责人；7：按颜色；8:完成时间；9:进行中;10:最近更新' },
                        { key: 'completeTime', isMust: false, type: 'int', des: '查询的时间起始点，当sort为8时(查询时间到当前的) 格式(2015-06-10)' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索' }
                    ]
                }
            }
        },
        group: {
            v1: {
                post_create: {
                    name: '创建一个新的群组',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/post_create',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_name', isMust: true, type: 'string', des: '要创建的群组的名称' },
                        { key: 'about', isMust: false, type: 'string', des: '群组的简介' },
                        { key: 'is_hidden', isMust: false, type: 'bool', des: '是否列入公司群组列表(*只有私有群组才有此功能)，0不隐藏，1隐藏' },
                        { key: 'is_approval', isMust: false, type: 'string', des: '用户加入是否审批（0：否，1：是）' },
                        { key: 'is_post', isMust: false, type: 'string', des: '是否作为动态分享群组（0：否，1：是）' },
                        { key: 'dept_id', isMust: false, type: 'int', des: '部门ID（如果设置官方群组需传关联的部门ID）' },
                        { key: 'account_ids', isMust: false, type: 'string', des: '群组成员' }
                    ]
                },
                post_exit: {
                    name: '群组操作退出',
                    docUrl: {type: '', url: ''},
                    url: '/group/post_exit',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' }
                    ]
                },
                post_invite: {
                    name: '邀请用户（同事邮箱）加入群组',
                    docUrl: {type: '', url: ''},
                    url: '/group/post_invite',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'emails', isMust: true, type: 'string', des: '重新邀请用户email 多个邮箱用逗号隔开' },
                        { key: 'invite_type', isMust: false, type: 'int', des: '邀请类型 0：内部用户或来宾；1：外联群组用户' }
                    ]
                },
                post_add_admin: {
                    name: '	添加群组管理员（仅限群组管理员和网络管理员）',
                    docUrl: {type: '', url: ''},
                    url: '/group/post_add_admin',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'account_id', isMust: true, type: 'string', des: '用户编号' }
                    ]
                },
                post_remove_user_or_admin: {
                    name: '	移除群组用户/管理员（仅限群组管理员和网络管理员）',
                    docUrl: {type: '', url: ''},
                    url: '/group/post_remove_user_or_admin',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'account_id', isMust: false, type: 'string', des: '用户编号' },
                        { key: 'choose_type', isMust: true, type: 'int', des: '操作类型 1：移除用户 2：移除管理员(仅限群组管理员)' }
                    ]
                },
                post_again_invite: {
                    name: '重新邀请群组成员',
                    docUrl: {type: '', url: ''},
                    url: '/group/post_again_invite',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'emails', isMust: true, type: 'string', des: '重新邀请用户email 多个邮箱用逗号隔开' },
                        { key: 'invite_type', isMust: false, type: 'int', des: '邀请类型 0：内部用户或来宾；1：外联群组用户' }
                    ]
                },
                post_egroup_invite: {
                    name: '邀请外联成员',
                    docUrl: {type: '', url: ''},
                    url: '/group/post_egroup_invite',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'account_ids', isMust: false, type: 'string', des: '邀请加入群组的现有用户ID 多个用户用逗号隔开' },
                        { key: 'egroup_emails', isMust: false, type: 'string', des: '邀请外联用户email 多个邮箱用逗号隔开' },
                        { key: 'egroup_mobilephones', isMust: false, type: 'string', des: '邀请外联用户手机号码 多个手机号码用逗号隔开' }
                    ]
                },
                post_pass_unaudited_user: {
                    name: '审批用户加入群组（仅限群组管理员）',
                    docUrl: {type: '', url: ''},
                    url: '/group/post_pass_unaudited_user',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'account_ids', isMust: true, type: 'string', des: '待审批用户编号 多个用,号隔开' }
                    ]
                },
                post_refuse_unaudited_user: {
                    name: '拒绝待审批用户加入群组（仅限群组管理员）',
                    docUrl: {type: '', url: ''},
                    url: '/group/post_refuse_unaudited_user',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'account_id', isMust: true, type: 'string', des: '待审批用户编号' }
                    ]
                },
                post_chat_to_post: {
                    name: '聊天群组转永久动态群组',
                    docUrl: {type: '', url: ''},
                    url: '/group/post_chat_to_post',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' }
                    ]
                },
                get_all: {
                    name: '获取企业所有的群组 *',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/get_all',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的群组' },
                        { key: 'sort_type', isMust: false, type: 'int', des: '按群组名称排序 默认0：倒序；1：升序' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数（默认值20，最大值100）' }
                    ]
                },
                get_detail: {
                    name: '根据群组编号获取群组的基本资料',
                    docUrl: {type: '', url: '/v1group_detail.html'},
                    url: '/group/get_detail',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' }
                    ]
                },
                get_my_created: {
                    name: '获取用户创建的群组',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/get_my_created',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: false, type: 'string', des: '指定用户编号，获取此用户创建的群组，默认为当前授权用户' }
                    ]
                },
                get_my_groups: {
                    name: '获取我的群组',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/get_my_groups',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_project_groups: {
                    name: '获取公司群组',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/get_project_groups',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'sort_type', isMust: false, type: 'int', des: '按群组名称排序 默认0：倒序；1：升序' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数（默认值20，最大值100）' }
                    ]
                },
                get_my_joined: {
                    name: '获取用户加入的群组',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/get_my_joined',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: false, type: 'string', des: '指定用户编号，获取此用户创建的群组，默认为当前授权用户' }
                    ]
                },
                get_user: {
                    name: '获取群组成员的用户信息',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/get_user',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' }
                    ]
                },
                get_unaudited_users: {
                    name: '获取群组成员的用户信息',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/get_unaudited_users',
                    requestMode: 'get',
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
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/get_new_friends',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                    ]
                },
                get_my_friends: {
                    name: '我的联系人',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/get_my_friends',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                    ]
                },
                get_project_users: {
                    name: '获取通讯录',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/get_project_users',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'department', isMust: false, type: 'string', des: '部门名称' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
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
                        { key: 'account_id', isMust: true, type: 'string', des: '需要移除的用户账号ID' },
                        { key: 'status', isMust: true, type: 'int', des: '同意=1,忽略=2,拒绝=3' }
                    ]
                }
            }
        },
        company: {
            v1: {
                get_project_list: {
                    name: '获取我的网络列表',
                    docUrl: {type: 'string', url: ''},
                    url: '/company/get_project_list',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数（默认值20，最大值100）' }
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
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数（默认值20，最大值100）' }
                    ]
                }
            }
        },
        calendar: {
            v1: {
                get_to_do: {
                    name: '获取当前登录用户待办日程列表',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/get_to_do',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'rsscal', isMust: false, type: 'bool', des: '是否订阅待办日程。0表不订阅；以列表形式返回，1表示订阅，直接返回订阅链接url'},
                        { key: 'group_time', isMust: false, type: 'bool', des: '是否以日程的起始时间分组显示。0表不；以列表形式返回，1表示分组，以分组列表显示' },
                        { key: 'account_ids', isMust: false, type: 'string', des: '用户编号 查看其他同事的日程，多个以逗号相隔' },
                        { key: 'is_work_calendar', isMust: false, type: 'bool', des: '是否查看工作日程' },
                        { key: 'is_task_calendar', isMust: false, type: 'bool', des: '是否查看任务日程' },
                        { key: 'is_private_calendar', isMust: false, type: 'bool', des: '是否查看私密日程' },
                        { key: 'categorys', isMust: false, type: 'string', des: '用户日程分类，多个以逗号相隔' }
                    ]
                },
                get_day_week_month: {
                    name: '获取当前登录用户某日/某周/某月 日程列表',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/get_day_week_month',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'date', isMust: false, type: 'string', des: '日期字符串。默认值为今天。如：2013-05-05。' },
                        { key: 'account_ids', isMust: false, type: 'string', des: '用户编号 查看其他同事的日程，多个以逗号相隔' },
                        { key: 'week', isMust: false, type: 'string', des: '某年第几周数。默认值为当前日期周数。' },
                        { key: 'year', isMust: false, type: 'string', des: '日期年数字。默认值为当前年。如：2013。' },
                        { key: 'is_work_calendar', isMust: false, type: 'bool', des: '是否查看工作日程' },
                        { key: 'is_task_calendar', isMust: false, type: 'bool', des: '是否查看任务日程' },
                        { key: 'is_private_calendar', isMust: false, type: 'bool', des: '是否查看私密日程' },
                        { key: 'categorys', isMust: false, type: 'string', des: '用户日程分类，多个以逗号相隔' }
                    ]
                },
                get_detail: {
                    name: '日程详情',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/get_detail',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'calendar_id', isMust: true, type: 'string', des: '日程编号' }
                    ]
                },
                get_invite_calendars: {
                    name: '获取登录用户未确认日程列表',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/get_invite_calendars',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'pageindex', isMust: false, type: 'string', des: '指定要返回的页数' },
                        { key: 'pagesize', isMust: false, type: 'string', des: '指定要返回的记录条数' }
                    ]
                },
                get_user_all_cal_categories: {
                    name: '获取用户所有分类',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/get_user_all_cal_categories',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_user_busy_calendar: {
                    name: '获取冲突日程',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/get_user_busy_calendar',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'calendar_start_time', isMust: false, type: 'string', des: '日程开始时间' },
                        { key: 'calendar_end_time', isMust: false, type: 'string', des: '日程结束时间' }
                    ]
                },
                post_create: {
                    name: '创建一个新的日程',
                    docUrl: {type: '', url: '/v1calendar_detail.html'},
                    url: '/calendar/post_create',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'calendar_name', isMust: true, type: 'string', des: '日程主题' },
                        { key: 'calendar_start_time', isMust: true, type: 'string', des: '日程开始时间，精确到分。如：2013-05-05 10:25' },
                        { key: 'calendar_end_time', isMust: true, type: 'string', des: '日程结束时间，精确到分。如：2013-05-05 10:25' },
                        { key: 'is_all_day', isMust: false, type: 'bool', des: '是否全天日程。0表示非全天，1表示全天 默认值0' },
                        { key: 'calendar_address', isMust: false, type: 'string', des: '日程地点' },
                        { key: 'calendar_description', isMust: false, type: 'string', des: '日程描述' },
                        { key: 'calendar_private', isMust: false, type: 'bool', des: '是否私人日程。1表示私人，0表示非私人 默认值0' },
                        { key: 'group_ids', isMust: false, type: 'string', des: '私有日程分享群组 分享多群组用,隔开' },
                        { key: 'calendar_member_ids', isMust: false, type: 'string', des: '指定的日程成员 (多个成员用逗号隔开)。注：明道用户' },
                        { key: 'calendar_member_emails', isMust: false, type: 'string', des: '指定的日程成员邮件 (多个成员用逗号隔开)。注：非明道用户' },
                        { key: 'is_recur', isMust: false, type: 'bool', des: '是否为重复日程. 1:是 0:不是 默认值0' },
                        { key: 'repeat_frequency', isMust: false, type: 'int', des: '当is_recur为1 即为重复日程时该值必填，频率 1 表示Daily; 2 表示Weekly; 3 表示Monthly; 4 表示Yearly' },
                        { key: 'repeat_interval', isMust: false, type: 'int', des: '当is_recur为1 即为重复日程时该值选填，重复间隔 默认值 1。' },
                        { key: 'repeat_week_day', isMust: false, type: 'string', des: '当 frequency=2 该值必填，周几重复 1:周一 2:周二 3:周三 4:周四 5:周五 6 周六 7:周日。多选用,隔开' },
                        { key: 'repeat_recur_count', isMust: false, type: 'int', des: '当 is_recur为1即为重复日程时该值选填，周几重复 1:周一 2:周二 3:周三 4:周四 5:周五 6 周六 7:周日。多选用|隔开' },
                        { key: 'until_date', isMust: false, type: 'string', des: '当 is_recur为1 该值选填，结束日期 如果recur_count为0且until_date为null,则为永久重复' },
                        { key: 'calendar_remind_type', isMust: false, type: 'int', des: '提醒类型' },
                        { key: 'calendar_remind_time', isMust: false, type: 'int', des: '提醒时间' },
                        { key: 'calendar_category_id', isMust: false, type: 'string', des: '日程分类id' }
                    ]
                },
                post_edit: {
                    name: '根据日程编号修改日程',
                    docUrl: {type: '', url: '/v1calendar_detail.html'},
                    url: '/calendar/post_edit',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'calendar_id', isMust: true, type: 'string', des: '日程编号' },
                        { key: 'calendar_name', isMust: false, type: 'string', des: '日程主题' },
                        { key: 'calendar_start_time', isMust: false, type: 'string', des: '日程开始时间，精确到分。如：2013-05-05 10:25' },
                        { key: 'calendar_end_time', isMust: false, type: 'string', des: '日程结束时间，精确到分。如：2013-05-05 10:25' },
                        { key: 'is_all_day', isMust: false, type: 'bool', des: '是否全天日程。0表示非全天，1表示全天 默认值0' },
                        { key: 'calendar_address', isMust: false, type: 'string', des: '日程地点' },
                        { key: 'calendar_description', isMust: false, type: 'string', des: '日程描述' },
                        { key: 'calendar_private', isMust: false, type: 'bool', des: '是否私人日程。1表示私人，0表示非私人 默认值0' },
                        { key: 'group_ids', isMust: false, type: 'string', des: '私有日程分享群组 分享多群组用,隔开' },
                        { key: 'calendar_member_ids', isMust: false, type: 'string', des: '指定的日程成员 (多个成员用逗号隔开)。注：明道用户' },
                        { key: 'calendar_member_emails', isMust: false, type: 'string', des: '指定的日程成员邮件 (多个成员用逗号隔开)。注：非明道用户' },
                        { key: 'is_recur', isMust: false, type: 'bool', des: '是否为重复日程. 1:是 0:不是 默认值0' },
                        { key: 'repeat_frequency', isMust: false, type: 'int', des: '当is_recur为1 即为重复日程时该值必填，频率 1 表示Daily; 2 表示Weekly; 3 表示Monthly; 4 表示Yearly' },
                        { key: 'repeat_interval', isMust: false, type: 'int', des: '当is_recur为1 即为重复日程时该值选填，重复间隔 默认值 1。' },
                        { key: 'repeat_week_day', isMust: false, type: 'string', des: '当 frequency=2 该值必填，周几重复 1:周一 2:周二 3:周三 4:周四 5:周五 6 周六 7:周日。多选用,隔开' },
                        { key: 'repeat_recur_count', isMust: false, type: 'int', des: '当 is_recur为1即为重复日程时该值选填，周几重复 1:周一 2:周二 3:周三 4:周四 5:周五 6 周六 7:周日。多选用|隔开' },
                        { key: 'until_date', isMust: false, type: 'string', des: '当 is_recur为1 该值选填，结束日期 如果recur_count为0且until_date为null,则为永久重复' },
                        { key: 'calendar_remind_type', isMust: false, type: 'int', des: '提醒类型' },
                        { key: 'calendar_remind_time', isMust: false, type: 'int', des: '提醒时间' },
                        { key: 'calendar_category_id', isMust: false, type: 'int', des: '日程分类id' }

                    ]
                },
                post_join_or_deny: {
                    name: '确认/拒绝一个日程',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/post_join_or_deny',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'calendar_id', isMust: true, type: 'string', des: '日程id' },
                        { key: 'choose_type', isMust: true, type: 'int', des: 'join=1/ deny=2' }
                    ]
                },
                post_exit: {
                    name: '退出一个日程',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/post_exit',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'calendar_id', isMust: true, type: 'string', des: '日程id' }
                    ]
                },
                post_reinvite_member: {
                    name: '重新邀请一个日程与会人员',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/post_reinvite_member',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'calendar_id', isMust: true, type: 'string', des: '日程id' },
                        { key: 'calendar_account_id', isMust: false, type: 'string', des: '邀请人id' },
                        { key: 'calendar_account_email', isMust: false, type: 'string', des: '邀请人邮箱' }

                    ]
                },
                post_delete: {
                    name: '删除日程',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/post_delete',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'calendar_id', isMust: true, type: 'string', des: '日程id' }
                    ]
                },
                post_user_category_operate: {
                    name: '删除/添加/修改用户日程分类',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/post_user_category_operate',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'calendar_id', isMust: false, type: 'string', des: '日程id' },
                        { key: 'category_name', isMust: false, type: 'string', des: '分类名' },
                        { key: 'color', isMust: false, type: 'string', des: '分类颜色' },
                        { key: 'category_id', isMust: false, type: 'string', des: ' 用户日程分类id' },
                        { key: 'choose_type', isMust: true, type: 'string', des: '操作类型 删除=0/添加=1/修改=2' }
                    ]
                },
                post_update_cal_remind: {
                    name: '更新日程提醒',
                    docUrl: {type: '', url: ''},
                    url: '/calendar/post_update_cal_remind',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'calendar_id', isMust: true, type: 'string', des: '日程id' },
                        { key: 'calendar_remind_time', isMust: false, type: 'int', des: '提醒时间' },
                        { key: 'calendar_remind_type', isMust: false, type: 'int', des: '提醒类型' }
                    ]
                }

            }
        },
        passport: {
            v1: {
                detail: {
                    name: '创建一个投票动态',
                    docUrl: {type: 'string', url: ''},
                    url: '/vote/create',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_msg', isMust: true, type: 'int', des: '动态更新内容(###userID###代表@某个人,$$$groupID$$$代表@某个群组，#标签内容#代表给动态定义标签)' },
                        { key: 'vote_options', isMust: true, type: 'string', des: '投票选项，如：a[Option]b[Option]c[Option] 代表有选项1:a；2:b;3:c 以此类推' },
                        { key: 'v_img', isMust: false, type: 'binary', des: '要上传的图片。图片仅支持JPEG,GIF,PNG,目前上传图片大小限制为<8M.' },
                        { key: 'v_img_options', isMust: false, type: 'string', des: '	要上传的图片对应的投票选项， 如：1,2 代表上传的两张图片是对应投票选项1和2' },
                        { key: 'vote_lasttime', isMust: false, type: 'string', des: '截止日期 默认明天的这时间' },
                        { key: 'available_number', isMust: false, type: 'int', des: '允许选择多少选项 默认1项 最多3项' },
                        { key: 'vote_anonymous	', isMust: false, type: 'bool', des: '是否匿名投票 默认0：不匿名；1：匿名' },
                        { key: 'vote_visble', isMust: false, type: 'bool', des: '	是否允许投票人员查看投票结果 0：不允许；1：允许 默认1允许' },
                        { key: 'g_id', isMust: false, type: 'string', des: '可为空，动态分享群组编号(多个群组用逗号隔开)' },
                        { key: 's_type', isMust: false, type: 'int', des: '分享范围 0表示分享给所有同事;1表示群内分享；2表示所有关注者和群组；3表示分享给自己； 默认0表示分享给所有同事' }
                    ]
                }
            }
        },
        message: {
            v1: {
                get_message_list: {
                    name: '获取当前登录用户与其它单个用户的私人消息列表',
                    docUrl: {type: 'string', url: ''},
                    url: '/message/get_message_list',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: true, type: 'string', des: '发送消息对象的用户编号' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '当前页码（以1开始，1代表第一页）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数' }
                    ]
                },
                get_inbox_first_message: {
                    name: '获取消息的第一条信息',
                    docUrl: {type: 'string', url: ''},
                    url: '/message/get_inbox_first_message',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                }
            },
            WebChatV1: {
                get_chat_list: {
                    name: '获取个人和群聊最近联系人',
                    docUrl: {type: 'string', url: ''},
                    url: '/message/get_chat_list',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_un_read_count: {
                    name: '获取未读计数',
                    docUrl: {type: 'string', url: ''},
                    url: '/message/get_un_read_count',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_user_or_group_message: {
                    name: '获取与某个用户或某个群组的消息列表',
                    docUrl: {type: 'string', url: ''},
                    url: '/message/get_user_or_group_message',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: false, type: 'string', des: '用户编号' },
                        { key: 'group_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'since_time', isMust: false, type: 'string', des: '' },
                        { key: 'direction', isMust: false, type: 'bool', des: '向前 true/向后 false' },
                        { key: 'keyword', isMust: false, type: 'string', des: '搜索关键字' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '当前页码（以1开始，1代表第一页）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数' },
                        { key: 'choose_type', isMust: true, type: 'bool', des: '用户true/群组false 消息列表' }
                    ]
                },
                get_user_or_group_message_count: {
                    name: '私聊会话中用户/群组消息的总条数',
                    docUrl: {type: 'string', url: ''},
                    url: '/message/get_user_or_group_message_count',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: false, type: 'string', des: '用户编号' },
                        { key: 'group_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'choose_type', isMust: true, type: 'bool', des: '用户true/群组false 消息列表' }
                    ]
                },

                get_user_or_group_message_by_id: {
                    name: '获取跟某个用户/某个群组的前后几条信息',
                    docUrl: {type: 'string', url: ''},
                    url: '/message/get_user_or_group_message_by_id',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: false, type: 'string', des: '用户编号' },
                        { key: 'group_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'message_id', isMust: true, type: 'string', des: '消息id' },
                        { key: 'size', isMust: false, type: 'int', des: '群组编号' },
                        { key: 'choose_type', isMust: true, type: 'bool', des: '用户true/群组false 消息列表' }
                    ]
                },
                get_joined_group: {
                    name: '获取已加入的群',
                    docUrl: {type: 'string', url: ''},
                    url: '/message/get_joined_group',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                get_group_members: {
                    name: '获取群组的用户',
                    docUrl: {type: 'string', url: ''},
                    url: '/message/get_group_members',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'group_id', isMust: true, type: 'string', des: '群组编号' }
                    ]
                },
                post_delete_history_item: {
                    name: '删除历史聊天记录',
                    docUrl: {type: 'string', url: ''},
                    url: '/message/post_delete_history_item',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'account_id', isMust: false, type: 'string', des: '用户编号' },
                        { key: 'group_id', isMust: false, type: 'string', des: '群组编号' }
                    ]
                },
                post_set_single_or_all_group_push: {
                    name: '设置单个/所有群组push',
                    docUrl: {type: 'string', url: ''},
                    url: '/message/post_delete_history_item',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'is_push', isMust: true, type: 'bool', des: '是否开启推送 ' },
                        { key: 'choose_type', isMust: true, type: 'string', des: '单个 true/全部 false ' },
                        { key: 'group_id', isMust: false, type: 'string', des: '群组编号' }
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
                        portArray.push(port);
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

        function getApiSetting(module, version, port, scallback) {
            var param = apiParam[module][version][port];
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
})();










