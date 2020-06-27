import axios from '../src/index';

test('axios getList', async (): Promise<any> => {
    const option = {
        url: 'http://127.0.0.1:3000/api/blog/list',
        method: 'get',
        body: {
            userId: 6,
            token: '6_1593262591574',
            author: 'liming'
        },
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    };
    const data: any = await axios(option);
    expect(data).toEqual({
        config: {
            body: {author: 'liming', token: '6_1593262591574', userId: 6},
            data: undefined,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            method: 'get',
            responseType: 'text',
            url: 'http://127.0.0.1:3000/api/blog/list'
        },
        headers: {
            connection: 'close',
            'content-length': '39',
            'content-type': 'application/json;charset=utf-8',
            date: new Date().toUTCString()
        },
        responseData: {code: -1, message: '请先登陆！'},
        status: 200,
        statusText: null
    });
});

test('axios getDetail', async (): Promise<any> => {
    const option = {
        url: 'http://127.0.0.1:3000/api/blog/detail',
        method: 'get',
        body: {
            userId: 6,
            token: '6_1593262591574',
            id: 1
        },
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    };
    const data: any = await axios(option);
    expect(data).toEqual({
        config: {
            body: {id: 1, token: '6_1593262591574', userId: 6},
            data: undefined,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            method: 'get',
            responseType: 'text',
            url: 'http://127.0.0.1:3000/api/blog/detail'
        },
        headers: {
            connection: 'close',
            'content-length': '39',
            'content-type': 'application/json;charset=utf-8',
            date: new Date().toUTCString()
        },
        responseData: {code: -1, message: '请先登陆！'},
        status: 200,
        statusText: null
    });
});

test('axios create new Blog', async (): Promise<any> => {
    const option = {
        url: 'http://127.0.0.1:3000/api/blog/new',
        method: 'post',
        body: {
            userId: 6,
            token: '6_1593262591574',
            title: '广州',
            content: '广州是一座美丽的城市！',
            createtime: 1592727198870,
            author: 'liming'
        },
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    };
    const data: any = await axios(option);
    expect(data).toEqual({
        config: {
            body: {
                author: 'liming',
                token: '6_1593262591574',
                userId: 6,
                content: '广州是一座美丽的城市！',
                createtime: 1592727198870,
                title: '广州'
            },
            data: undefined,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            method: 'post',
            responseType: 'text',
            url: 'http://127.0.0.1:3000/api/blog/new'
        },
        headers: {
            connection: 'close',
            'content-length': '39',
            'content-type': 'application/json;charset=utf-8',
            date: new Date().toUTCString()
        },
        responseData: {code: -1, message: '请先登陆！'},
        status: 200,
        statusText: null
    });
});

test('axios update blog', async (): Promise<any> => {
    const option = {
        url: 'http://127.0.0.1:3000/api/blog/update',
        method: 'post',
        body: {
            userId: 6,
            token: '6_1593262591574',
            constet: '上海是一座美丽的城市！'
        },
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    };
    const data: any = await axios(option);
    expect(data).toEqual({
        config: {
            body: {constet: '上海是一座美丽的城市！', token: '6_1593262591574', userId: 6},
            data: undefined,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            method: 'post',
            responseType: 'text',
            url: 'http://127.0.0.1:3000/api/blog/update'
        },
        headers: {
            connection: 'close',
            'content-length': '39',
            'content-type': 'application/json;charset=utf-8',
            date: new Date().toUTCString()
        },
        responseData: {code: -1, message: '请先登陆！'},
        status: 200,
        statusText: null
    });
});

test('axios delete blog', async (): Promise<any> => {
    const option = {
        url: 'http://127.0.0.1:3000/api/blog/delete',
        method: 'post',
        body: {
            userId: 6,
            token: '6_1593262591574',
            id: 2
        },
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    };
    const data: any = await axios(option);
    expect(data).toEqual({
        config: {
            body: {id: 2, token: '6_1593262591574', userId: 6},
            data: undefined,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            method: 'post',
            responseType: 'text',
            url: 'http://127.0.0.1:3000/api/blog/delete'
        },
        headers: {
            connection: 'close',
            'content-length': '39',
            'content-type': 'application/json;charset=utf-8',
            date: new Date().toUTCString()
        },
        responseData: {code: -1, message: '请先登陆！'},
        status: 200,
        statusText: null
    });
});

test('axios login', async (): Promise<any> => {
    const option = {
        url: 'http://127.0.0.1:3000/api/user/login',
        method: 'post',
        body: {
            userName: 'liming',
            password: '12345687'
        },
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    };
    const data: any = await axios(option);
    expect(data).toEqual({
        config: {
            body: {
                userName: 'liming',
                password: '12345687'
            },
            data: undefined,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            method: 'post',
            responseType: 'text',
            url: 'http://127.0.0.1:3000/api/user/login'
        },
        headers: {
            connection: 'close',
            'content-length': '54',
            'content-type': 'application/json;charset=utf-8',
            date: new Date().toUTCString()
        },
        responseData: {code: -1, message: 'user information is not found!'},
        status: 200,
        statusText: null
    });
});
