import React from "react";

const Chessboard = () => {
  return (
    <div
      className="absolute top-0 left-0"
      style={{
        width: "100%",
        height: "100%",
        color: "black",
        background: `
          var(--theme-piece-set-br, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/br.png")) 0 0 / 12.5% no-repeat,
          var(--theme-piece-set-bn, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/bn.png")) 14.29% 0 / 12.5% no-repeat,
          var(--theme-piece-set-bb, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/bb.png")) 28.57% 0 / 12.5% no-repeat,
          var(--theme-piece-set-bq, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/bq.png")) 42.86% 0 / 12.5% no-repeat,
          var(--theme-piece-set-bk, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/bk.png")) 57.14% 0 / 12.5% no-repeat,
          var(--theme-piece-set-bb, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/bb.png")) 71.43% 0 / 12.5% no-repeat,
          var(--theme-piece-set-bn, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/bn.png")) 85.71% 0 / 12.5% no-repeat,
          var(--theme-piece-set-br, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/br.png")) 100% 0 / 12.5% no-repeat,
          var(--theme-piece-set-bp, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/bp.png")) 0 14.29% / 12.5% no-repeat,
          var(--theme-piece-set-bp, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/bp.png")) 14.29% 14.29% / 12.5% no-repeat,
          var(--theme-piece-set-bp, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/bp.png")) 28.57% 14.29% / 12.5% no-repeat,
          var(--theme-piece-set-bp, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/bp.png")) 42.86% 14.29% / 12.5% no-repeat,
          var(--theme-piece-set-bp, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/bp.png")) 57.14% 14.29% / 12.5% no-repeat,
          var(--theme-piece-set-bp, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/bp.png")) 71.43% 14.29% / 12.5% no-repeat,
          var(--theme-piece-set-bp, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/bp.png")) 85.71% 14.29% / 12.5% no-repeat,
          var(--theme-piece-set-bp, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/bp.png")) 100% 14.29% / 12.5% no-repeat,
          var(--theme-piece-set-wr, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/wr.png")) 0 100% / 12.5% no-repeat,
          var(--theme-piece-set-wn, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/wn.png")) 14.29% 100% / 12.5% no-repeat,
          var(--theme-piece-set-wb, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/wb.png")) 28.57% 100% / 12.5% no-repeat,
          var(--theme-piece-set-wq, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/wq.png")) 42.86% 100% / 12.5% no-repeat,
          var(--theme-piece-set-wk, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/wk.png")) 57.14% 100% / 12.5% no-repeat,
          var(--theme-piece-set-wb, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/wb.png")) 71.43% 100% / 12.5% no-repeat,
          var(--theme-piece-set-wn, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/wn.png")) 85.71% 100% / 12.5% no-repeat,
          var(--theme-piece-set-wr, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/wr.png")) 100% 100% / 12.5% no-repeat,
          var(--theme-piece-set-wp, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/wp.png")) 0 85.71% / 12.5% no-repeat,
          var(--theme-piece-set-wp, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/wp.png")) 14.29% 85.71% / 12.5% no-repeat,
          var(--theme-piece-set-wp, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/wp.png")) 28.57% 85.71% / 12.5% no-repeat,
          var(--theme-piece-set-wp, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/wp.png")) 42.86% 85.71% / 12.5% no-repeat,
          var(--theme-piece-set-wp, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/wp.png")) 57.14% 85.71% / 12.5% no-repeat,
          var(--theme-piece-set-wp, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/wp.png")) 71.43% 85.71% / 12.5% no-repeat,
          var(--theme-piece-set-wp, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/wp.png")) 85.71% 85.71% / 12.5% no-repeat,
          var(--theme-piece-set-wp, url("https://images.chesscomfiles.com/chess-themes/pieces/glass/150/wp.png")) 100% 85.71% / 12.5% no-repeat;
        `,
      }}
    >
      {/* Coordinates SVG */}
      <svg
        viewBox="0 0 100 100"
        className="coordinates"
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <text x="0.75" y="3.5" fontSize="2.8" style={{ fill: "#282f3f" }}>
          8
        </text>
        <text x="0.75" y="15.75" fontSize="2.8" style={{ fill: "#667188" }}>
          7
        </text>
        <text x="0.75" y="28.25" fontSize="2.8" style={{ fill: "#282f3f" }}>
          6
        </text>
        <text x="0.75" y="40.75" fontSize="2.8" style={{ fill: "#667188" }}>
          5
        </text>
        <text x="0.75" y="53.25" fontSize="2.8" style={{ fill: "#282f3f" }}>
          4
        </text>
        <text x="0.75" y="65.75" fontSize="2.8" style={{ fill: "#667188" }}>
          3
        </text>
        <text x="0.75" y="78.25" fontSize="2.8" style={{ fill: "#282f3f" }}>
          2
        </text>
        <text x="0.75" y="90.75" fontSize="2.8" style={{ fill: "#667188" }}>
          1
        </text>
        <text x="10" y="99" fontSize="2.8" style={{ fill: "#667188" }}>
          a
        </text>
        <text x="22.5" y="99" fontSize="2.8" style={{ fill: "#282f3f" }}>
          b
        </text>
        <text x="35" y="99" fontSize="2.8" style={{ fill: "#667188" }}>
          c
        </text>
        <text x="47.5" y="99" fontSize="2.8" style={{ fill: "#282f3f" }}>
          d
        </text>
        <text x="60" y="99" fontSize="2.8" style={{ fill: "#667188" }}>
          e
        </text>
        <text x="72.5" y="99" fontSize="2.8" style={{ fill: "#282f3f" }}>
          f
        </text>
        <text x="85" y="99" fontSize="2.8" style={{ fill: "#667188" }}>
          g
        </text>
        <text x="97.5" y="99" fontSize="2.8" style={{ fill: "#282f3f" }}>
          h
        </text>
      </svg>
    </div>
  );
};

export default Chessboard;
