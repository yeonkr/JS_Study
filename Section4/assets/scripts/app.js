const ATTACK_VALUE = 10; // 전역 값은 대문자로 처리하는 게 일반적. (선택사항)
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife); // 화면 업데이트 

function reset() {
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
resetGame(chosenMaxLife);
}

function endRound() { // 승패 확인, 확인 전 보너스 생명이 있는지 살펴볼 수 있는 곳 
  const initialPlayerHealth = currentPlayerHealth
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
  currentPlayerHealth -= playerDamage;

  if( currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth
    setPlayerHealth(initialPlayerHealth)
    alert('You would be dead but the bonus life saved you')
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won!")
    reset()
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost')
    reset()
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have a draw')
    reset()
}

function attackMonster(mode) {
  let maxDamage;
  if(mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACK_VALUE;
  }
}
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound();
  }

  function attackHandler() {
    attackMonster('ATTACK')
  }

  function strongAttackHandler() {
    attackMonster('STRONG_ATTACK')
  }

  function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
      alert("You can't heal to more than your max initial health.")
      healValue = chosenMaxLife = currentPlayerHealth
    } else {
      healValue = HEAL_VALUE
    }
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += HEAL_VALUE
    endRound();
  }

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler)