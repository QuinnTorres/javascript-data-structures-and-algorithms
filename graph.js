class Graph {
    constructor(v) {
        this.vertices = v;
        this.edges = 0;
        this.adj = [];
        this.adj.length = v;
        this.visited = [];
    }

    addEdge(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    dfs(v) {
        let verticesToVisit = this.adj[v].filter((vertex) => !this.visited.includes(vertex));

        this.visited = [];
        this.visited.push(v);

        if (verticesToVisit.length !== 0) {
            verticesToVisit.forEach((vertex) => this.dfs(vertex));
        }

        console.log(v);
    }

    bfs(v) {
        let verticesToVisit = this.adj[v].filter((vertex) => !this.visited.includes(vertex));

        this.visited = [];
        this.visited.push(v);
        console.log(v);

        if (verticesToVisit.length !== 0) {
            verticesToVisit.forEach((vertex) => this.bfs(vertex));
        }
    }
}