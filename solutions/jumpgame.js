const DEPTH_LIMIT = 10;

function _jumpgame(jumps, current, depth) {
  if (current === jumps.length - 1) return true;              // Made it!
  if (current < 0 || current >= jumps.length) return false;   // Gone too far
  if (jumps[current] === 0) return false;                     // Stalled
  if (depth > DEPTH_LIMIT) return false;
  
  let backward = current - jumps[current];
  let forward = current + jumps[current];
  
  return _jumpgame(jumps, backward, depth + 1) || _jumpgame(jumps, forward, depth + 1);
}

function jumpgame(jumps) {
  return _jumpgame(jumps, 0, 0);
}