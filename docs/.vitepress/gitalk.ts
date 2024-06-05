import Gitalk from 'gitalk';

export default function createGitalk(path: string) {
    // 如果路径以 /en 开头，去掉前缀
    // @ts-ignore
    if (path.startsWith('/en')) {
        path = path.substring(3); // 移除前缀 /en
    }
    const gitalk = new Gitalk({
        clientID: 'Ov23liWwaL2jzt4ilEkv',
        clientSecret: 'e1afd8ae3d48154311c2288c05351c546f104937',
        repo: 'go-mongox-doc',
        owner: 'chenmingyong0423',
        admin: ['chenmingyong0423'],
        id: path,      // 确保唯一性和长度小于 50
        distractionFreeMode: false  // 类似 facebook 的无干扰模式
    });
    gitalk.render('gitalk-container');
}
