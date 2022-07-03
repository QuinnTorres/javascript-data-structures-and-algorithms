class Graph {
    constructor(v) {
        this.vertices = v;
        this.edges = 0;
        this.adj = [];
        this.adj.length = v;
        this.visited = [];
    }

    /**
     * Add an edge to the graph
     *
     * @param v the first vertex in the edge
     * @param w the second vertex in the edge
     *
     * @return {undefined}
     */
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

    /**
     * Search for a vertex using depth-first search and log it if found
     *
     * @param v the vertex to search for
     *
     * @return {undefined}
     */
    dfs(v) {
        this.visited = [];

        this.dfsRecursive(v);
    }

    /**
     * Search for a vertex using depth-first search recursively and log it if found
     *
     * @param v the vertex to search for
     *
     * @return {undefined}
     */
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

    /**
     * Search for a vertex using breadth-first search and log it if found
     *
     * @param v the vertex to search for
     *
     * @return {undefined}
     */
    bfs(v) {
        this.visited = [];

        this.bfsRecursive(v);
    }

    /**
     * Search for a vertex using breadth-first search recursively and log it if found
     *
     * @param v the vertex to search for
     *
     * @return {undefined}
     */
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

    /**
     * Log all edges in the graph
     *
     * @return {undefined}
     */
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

    // Add random vertices with values between 0 and 20 and edges between them
    while(data.edges !== 20) {
        let v = 0;
        let w = 0;

        while (v === w || (data.adj[v] && data.adj[v].includes(w))) {
            v = Math.floor(Math.random() * 21);
            w = Math.floor(Math.random() * 21);
        }

        data.addEdge(v, w);
    }

    // Graph with initial data
    console.log('graph:');
    data.toString();
    console.log('');

    // Depth-first search
    console.log(`dfs:`);
    data.dfs(0);
    console.log('');

    // Breadth-first search
    console.log(`bfs:`);
    data.bfs(0);
}

test();