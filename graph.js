class Graph {
    constructor(v) {
        this.vertices = v;
        this.edges = 0;
        this.adj = [];
        this.adj.length = v;
        this.visited = [];
    }

    addEdge(v, w) {
        if (this.adj[v] === undefined) {
            this.adj[v] = [];
        }

        if (this.adj[w] === undefined) {
            this.adj[w] = [];
        }

        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    dfs(v) {
        this.visited = [];

        this.dfsRecursive(v);
    }

    dfsRecursive(v) {
        let verticesToVisit = this.adj[v].filter((vertex) => !this.visited.includes(vertex));

        this.visited.push(v);

        if (verticesToVisit.length !== 0) {
            verticesToVisit.forEach((vertex) => {
                console.log(`visiting from ${v} -> ${vertex}`);
                this.dfsRecursive(vertex)
            });
        }

        console.log(v);
    }

    bfs(v) {
        this.visited = [];

        this.bfsRecursive(v);
    }

    bfsRecursive(v) {
        let verticesToVisit = this.adj[v].filter((vertex) => !this.visited.includes(vertex));

        this.visited.push(v);

        if (verticesToVisit.length !== 0) {
            verticesToVisit.forEach((vertex) => {
                console.log(`visiting from ${v} -> ${vertex}`);
                this.visited.push(v);
                console.log(vertex);
            });

            verticesToVisit.forEach((vertex) => {
                this.bfsRecursive(vertex)
            });
        }
    }

    toString() {
        for(let i = 0; i < this.adj.length; i++) {
            if (this.adj[i] !== undefined) {
                for(let j = 0; j < this.adj[i].length; j++) {
                    console.log(`${i} - ${this.adj[i][j]}`);
                }
            }
        }
    }
}

function test() {
    let data = new Graph(20);

    while(data.edges !== 20) {
        let v = 0;
        let w = 0;

        while (v === w || (data.adj[v] && data.adj[v].includes(w))) {
            v = Math.floor(Math.random() * 21);
            w = Math.floor(Math.random() * 21);
        }

        data.addEdge(v, w);
    }

    console.log('graph:');
    data.toString();
    console.log('');

    console.log(`dfs:`);
    data.dfs(0);
    console.log('');

    console.log(`bfs:`);
    data.bfs(0);
}

test();