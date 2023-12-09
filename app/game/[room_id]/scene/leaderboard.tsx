import React from "react";
import Player_badge from "@components/player-badge";

const LeaderBoard = () => {
  return (
    <div>
      <Player_badge
        name="test"
        variant={{ variant: "leader_board", crown: true, point: 1 }}
      />
    </div>
  );
};

export default LeaderBoard;
