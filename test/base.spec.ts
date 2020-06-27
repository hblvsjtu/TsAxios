import axios from '../src/index';

test('axios getList', async (): Promise<any> => {
    const option = {
        url: 'http://127.0.0.1:3000/api/blog/list',
        method: 'get',
        data: {
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
            data: 'userId=6&token=6_1593262591574&author=liming',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            method: 'get',
            responseType: 'text',
            url: 'http://127.0.0.1:3000/api/blog/list'
        },
        headers: {
            connection: 'close',
            'content-length': '66',
            'content-type': 'application/json;charset=utf-8',
            date: new Date().toUTCString()
        },
        responseData: {code: -1, message: '登陆信息已过期，请重新登陆！'},
        status: 200,
        statusText: null
    });
});

test('axios getDetail', async (): Promise<any> => {
    const option = {
        url: 'http://127.0.0.1:3000/api/blog/detail',
        method: 'get',
        data: {
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
            data: 'userId=6&token=6_1593262591574&id=1',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            method: 'get',
            responseType: 'text',
            url: 'http://127.0.0.1:3000/api/blog/detail'
        },
        headers: {
            connection: 'close',
            'content-length': '66',
            'content-type': 'application/json;charset=utf-8',
            date: new Date().toUTCString()
        },
        responseData: {code: -1, message: '登陆信息已过期，请重新登陆！'},
        status: 200,
        statusText: null
    });
});

test('axios create new Blog', async (): Promise<any> => {
    const option = {
        url: 'http://127.0.0.1:3000/api/blog/new',
        method: 'post',
        data: {
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
            data:
                'userId=6&token=6_1593262591574&title=广州&content=广州是一座美丽的城市！&createtime=1592727198870&author=liming',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            method: 'post',
            responseType: 'text',
            url: 'http://127.0.0.1:3000/api/blog/new'
        },
        headers: {
            connection: 'close',
            'content-length': '66',
            'content-type': 'application/json;charset=utf-8',
            date: new Date().toUTCString()
        },
        responseData: {code: -1, message: '登陆信息已过期，请重新登陆！'},
        status: 200,
        statusText: null
    });
});

test('axios update blog', async (): Promise<any> => {
    const option = {
        url: 'http://127.0.0.1:3000/api/blog/update',
        method: 'post',
        data: {
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
            data: 'userId=6&token=6_1593262591574&constet=上海是一座美丽的城市！',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            method: 'post',
            responseType: 'text',
            url: 'http://127.0.0.1:3000/api/blog/update'
        },
        headers: {
            connection: 'close',
            'content-length': '66',
            'content-type': 'application/json;charset=utf-8',
            date: new Date().toUTCString()
        },
        responseData: {code: -1, message: '登陆信息已过期，请重新登陆！'},
        status: 200,
        statusText: null
    });
});

test('axios delete blog', async (): Promise<any> => {
    const option = {
        url: 'http://127.0.0.1:3000/api/blog/delete',
        method: 'post',
        data: {
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
            data: 'userId=6&token=6_1593262591574&id=2',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            method: 'post',
            responseType: 'text',
            url: 'http://127.0.0.1:3000/api/blog/delete'
        },
        headers: {
            connection: 'close',
            'content-length': '66',
            'content-type': 'application/json;charset=utf-8',
            date: new Date().toUTCString()
        },
        responseData: {code: -1, message: '登陆信息已过期，请重新登陆！'},
        status: 200,
        statusText: null
    });
});

test('axios login', async (): Promise<any> => {
    const option = {
        url: 'http://127.0.0.1:3000/api/user/login',
        method: 'post',
        data: {
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
            data: 'userName=liming&password=12345687',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            method: 'post',
            responseType: 'text',
            url: 'http://127.0.0.1:3000/api/user/login'
        },
        headers: {
            connection: 'close',
            'content-length': '39',
            'content-type': 'application/json;charset=utf-8',
            date: new Date().toUTCString()
        },
        responseData: {code: -1, message: '登陆失败！'},
        status: 200,
        statusText: null
    });
});

test('axios login', async (): Promise<any> => {
    const option = {
        url: 'http://127.0.0.1:3000/api/user/login',
        method: 'post',
        data: {
            userName: 'liming',
            password: '12345678'
        },
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    };
    const data: any = await axios(option);
    if (data.responseData.data.token) {
        data.responseData.data.token = '6_1593279632096';
    }
    expect(data).toEqual({
        config: {
            data: 'userName=liming&password=12345678',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            method: 'post',
            responseType: 'text',
            url: 'http://127.0.0.1:3000/api/user/login'
        },
        headers: {
            connection: 'close',
            'content-length': '56',
            'content-type': 'application/json;charset=utf-8',
            date: new Date().toUTCString()
        },
        responseData: {
            code: 0,
            data: {
                token: '6_1593279632096',
                userId: 6
            }
        },
        status: 200,
        statusText: null
    });
});
