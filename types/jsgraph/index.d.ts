// Type definitions for jsgraph 0.7
// Project: https://github.com/Encapsule/jsgraph
// Definitions by: Joel Rosinbum <https://github.com/rosinbum>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface jsgraph {
        directed: Directed;
}

    export interface VertexRequest {
        u: string;
        p: any;
    }

    export interface JsGraphResponse {
        error?: any;
        result?: any;
    }

    export interface Edge {
        u: string;
        v: string;
    }

    export interface EdgeRequest {
        e: Edge;
        p: any;
    }

    export class DirectedGraph {
        constructor();

        setGraphName(name: string): JsGraphResponse;

        getGraphName(): string;

        setGraphDescription(description: string): JsGraphResponse;

        getGraphDescription(): string;

        verticesCount(): number;

        getVertices(): string[];

        getEdgeCount(): number;

        getEdeges(): Edge[];

        rootVerticesCount(): number;

        getRootVertices(): string[];

        leafVerticesCount(): number;

        getLeafVertices(): string[];

        toObject(): string;

        toJSON(): string;

        stringify(replacer: () => string, space?: number): string;

        fromObject(graph: any): JsGraphResponse;

        // Vertex functions
        addVertex(vertex: VertexRequest): JsGraphResponse;

        removeVertex(vertex: string): boolean;

        getVertexProperty(vertex: string): any;

        setVertexProperty(vertex: VertexRequest): JsGraphResponse;

        hasVertexProperty(vertex: string): boolean;

        clearVertexProperty(vertex: string): boolean;

        inDegree(vertex: string): number;

        inEdges(vertex: string): Edge[];

        outDegree(vertex: string): number;

        outEdges(vertex: string): Edge[];

        // Edge functions
        addEdge(request: EdgeRequest): JsGraphResponse;

        isEdge(edge: Edge): boolean;

        removeEdge(edge: Edge): JsGraphResponse;

        getEdgeProperty(edge: Edge): any;

        setEdgeProperty(request: EdgeRequest): JsGraphResponse;

        hasEdgeProperty(edge: Edge): boolean;

        clearEdgeProperty(edge: Edge): boolean;
    }

    export interface VertexGraph {
        u: string;
        g: DirectedGraph;
    }

    export interface EdgeGraph {
        e: Edge;
        g: DirectedGraph;
    }

    export interface Visitor {
        initializeVertex(req: VertexGraph): void;

        startVertex(req: VertexGraph): void;

        discoverVertex(req: VertexGraph): void;

        examineVertex(req: VertexGraph): void;

        examineEdge(req: EdgeGraph): void;

        nonTreeEdge(req: EdgeGraph): void;

        grayTarget(req: EdgeGraph): void;

        blackTarget(req: EdgeGraph): void;

        finishVertex(req: VertexGraph): void;
    }

    export interface TraversalContext {
        searchStatus: string;
        colorMap: any;
        undiscoveredMap: any;
    }

    export interface TraversalOptions {
        startVector: string | string[];
        allowEmptyStartVector: boolean;
        signalStart: boolean;
        traverseContext: TraversalContext;
    }

    export interface TraversalParams {
        digraph: DirectedGraph;
        visitor: Visitor;
        options?: TraversalOptions;
    }

    export interface TraversalResult {
        error?: any;
        result?: TraversalContext;
    }

    export interface colors { white: 0; gray: 1; black: 2; }

    export interface Directed {
        breadthFirstTraverse(params: TraversalParams): TraversalResult;

        colors: colors;

        create(): { result: DirectedGraph };

        createTraversalContext(req: { dirgaph: DirectedGraph }): TraversalContext;

        depthFirstTraverse(params: TraversalParams): TraversalResult;

        transpose(graph: DirectedGraph): { error?: any, result?: DirectedGraph };

        directedGraph: DirectedGraph;
    }
