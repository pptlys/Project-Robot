// The village of Meadowfield consists of 11 places with 14 roads between them.
// It's described with this array of roads.

const roads = [
    "Alice's House-Bob's House",
    "Alice's House-Cabin",
    "Alice's House-Post Office",
    "Bos's House-Town Hall",
    "Daria's House-Ernie's House",
    "Daria's House-Town Hall",
    "Ernie's House-Grete's House",
    "Grete's House-Farm",
    "Grete's House-Shop",
    "Marketplace-Farm",
    "Marketplace-Post Office",
    "Marketplace-Shop",
    "Marketplace-Town Hall",
    "Shop-Town Hall"
];

// The network of roads in the village form a graph which is a collection of points with lines between them.
// This graph will be the world that the robot moves through.
// Let's convert the array roads to a data structure that, for each place, tells us what can be reached from there.

function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);
