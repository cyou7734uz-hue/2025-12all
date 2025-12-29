let standSpriteSheet;
let walkSpriteSheet;
let runSpriteSheet;
let rollSpriteSheet;
let jumpSpriteSheet;
let attackSpriteSheet;
let standSpriteSheet2; // 角色二的待機圖片精靈
let hitSpriteSheet2; // 角色二被攻擊的圖片精靈
let triggerSpriteSheet2; // 角色二觸發的圖片精靈
let electrocutionSpriteSheet2; // 角色二電擊的圖片精靈
let danceSpriteSheet2; // 角色二跳舞的圖片精靈
let character1SpeakImage; // 角色一的說話牱像
let character2SpeakImage; // 角色二的說話牱像
let character3SpeakImage; // 角色三的說話頭像
let character4SpeakImage; // 角色四(奇怪的同學)的說話頭像
let character5SpeakImage; // 角色五(學生2)的說話頭像
let character6SpeakImage; // 新增：角色六(小老師)的說話頭像
let character7SpeakImage; // 新增：角色七(老師)的說話頭像
let character7HappyImage; // 新增：角色七(老師)的開心頭像
let character7ConfusedImage; // 新增：角色七(老師)的困惑頭像
let character7SeriousImage; // 新增：角色七(老師)的嚴肅頭像
let character7BossImage; // 新增：角色七(老師)的Boss戰頭像
let standSpriteSheet3; // 角色三(角色四)的待機圖片精靈
let standAnimation3 = []; // 角色三的待機動畫
let character3X; // 角色三的 X 座標
let character3Y; // 角色三的 Y 座標
let angrySpriteSheet3; // 角色三生氣圖片精靈
let angryAnimation3 = []; // 角色三生氣動畫
let isCharacter3Angry = false; // 角色三是否生氣
let angryFrameIndex3 = 0; // 角色三生氣動畫索引
let isCharacter3Chasing = false; // 角色三是否正在追逐
let isCharacter3Returning = false; // 角色三是否正在返回
let character3ChaseTimer = 0; // 追逐計時器
let character3OriginalX = 0; // 角色三原始位置
const character3Speed = 5; // 角色三移動速度
let standSpriteSheet4; // 新增 NPC (角色三) 的待機圖片精靈
let standAnimation4 = []; // 新增 NPC (角色三) 的待機動畫
let character4X; // 新增 NPC (角色三) 的 X 座標
let character4Y; // 新增 NPC (角色三) 的 Y 座標
let runSpriteSheet4; // 新增 NPC (角色三) 的跑步圖片精靈
let runAnimation4 = []; // 新增 NPC (角色三) 的跑步動畫
let isCharacter4RunningAway = false; // 角色四是否正在跑走
let character4RunDirection = 1; // 新增：角色四跑步方向 (1: 右, -1: 左)
let isCharacter4Gone = false; // 角色四是否已消失
let standSpriteSheet5; // 新增 NPC (學生2) 的待機圖片精靈
let standAnimation5 = []; // 新增 NPC (學生2) 的待機動畫
let character5X; // 新增 NPC (學生2) 的 X 座標
let character5Y; // 新增 NPC (學生2) 的 Y 座標
let standSpriteSheet6; // 新增 NPC (小老師) 的待機圖片精靈
let standAnimation6 = []; // 新增 NPC (小老師) 的待機動畫
let character6X; // 新增 NPC (小老師) 的 X 座標
let character6Y; // 新增 NPC (小老師) 的 Y 座標
let standSpriteSheet7; // 新增 NPC (老師) 的待機圖片精靈
let standAnimation7 = []; // 新增 NPC (老師) 的待機動畫
let character7X; // 新增 NPC (老師) 的 X 座標
let character7Y; // 新增 NPC (老師) 的 Y 座標
let character7RetreatSpriteSheet; // 新增 NPC (老師) 的後退圖片精靈
let character7RetreatAnimation = []; // 新增 NPC (老師) 的後退動畫
let character7AttackSpriteSheet; // 新增 NPC (老師) 的普通攻擊圖片精靈
let character7AttackAnimation = []; // 新增 NPC (老師) 的普通攻擊動畫
let isTeacherAttacking = false; // 老師是否正在攻擊
let teacherAttackFrameIndex = 0; // 老師攻擊動畫索引
let character7MediumAttackSpriteSheet; // 新增 NPC (老師) 的中攻擊圖片精靈
let character7MediumAttackAnimation = []; // 新增 NPC (老師) 的中攻擊動畫
let isTeacherMediumAttacking = false; // 老師是否正在中攻擊
let teacherMediumAttackFrameIndex = 0; // 老師中攻擊動畫索引
let hasTriggeredMediumAttack = false; // 是否已觸發中攻擊
let teacherMediumProjectileSpriteSheet; // 新增 NPC (老師) 的中攻擊投擲物圖片精靈
let teacherMediumProjectileAnimation = []; // 新增 NPC (老師) 的中攻擊投擲物動畫
let hasTeacherFiredMediumProjectile = false; // 老師是否已發射中攻擊投擲物
let character7SpecialAttackSpriteSheet; // 新增 NPC (老師) 的大招圖片精靈
let character7SpecialAttackAnimation = []; // 新增 NPC (老師) 的大招動畫
let isTeacherSpecialAttacking = false; // 老師是否正在大招
let teacherSpecialAttackFrameIndex = 0; // 老師大招動畫索引
let hasTriggeredSpecialAttack = false; // 是否已觸發大招
let teacherSpecialProjectileSpriteSheet; // 新增 NPC (老師) 的大招投擲物圖片精靈
let teacherSpecialProjectileAnimation = []; // 新增 NPC (老師) 的大招投擲物動畫
let hasTeacherFiredSpecialProjectile = false; // 老師是否已發射大招投擲物
let character7DeathSpriteSheet; // 新增 NPC (老師) 的死亡圖片精靈
let character7DeathAnimation = []; // 新增 NPC (老師) 的死亡動畫
let isTeacherDead = false; // 老師是否已死亡
let teacherDeathFrameIndex = 0; // 老師死亡動畫索引
let teacherProjectileSpriteSheet; // 新增 NPC (老師) 的投擲物圖片精靈
let teacherProjectileAnimation = []; // 新增 NPC (老師) 的投擲物動畫
let teacherProjectiles = []; // 老師投擲物陣列
let hasTeacherFiredProjectile = false; // 老師是否已發射投擲物
let isTeacherBossFightActive = false; // 是否正在進行老師 Boss 戰
let teacherBossFightTimer = 0; // 老師 Boss 戰計時器
let teacherBossFightPhase = 'none'; // 老師 Boss 戰階段 ('none', 'retreat', 'fighting')
let teacherRetreatTargetX = 0; // 老師後退的目標位置
let teacherFightMinX = 0; // 老師戰鬥區域的左邊界
let screenShakeTimer = 0; // 新增：螢幕震動計時器
let screenShakeDuration = 0; // 新增：螢幕震動持續時間
let teacherDeathDirection = 1; // 新增：老師死亡時的方向
let teacherTeleportTimer = 0; // 新增：老師瞬移特效計時器
let teacherTeleportX = 0; // 新增：老師瞬移位置 X
let teacherTeleportY = 0; // 新增：老師瞬移位置 Y
let npc6UpgradeSpriteSheet; // 新增 NPC (小老師) 升級圖片精靈
let npc6UpgradeAnimation = []; // 新增 NPC (小老師) 升級動畫
let isNpc6Upgrading = false; // 小老師是否正在播放升級動畫
let npc6UpgradeFrameIndex = 0; // 小老師升級動畫索引
let hasRangedAttack = false; // 是否擁有遠距攻擊
let hasUltimateAttack = false; // 是否擁有大招攻擊
let lastUltimateAttackTime = -10000; // 大招上次使用時間
let ultimateHasDamagedBoss = false; // 新增：本次大招是否已對Boss造成傷害
let char1UltimateSpriteSheet; // 角色一大招圖片精靈
let char1UltimateAnimation = []; // 角色一大招動畫
let char1UltimateWeapon0; // 角色一大招地面武器
let char1UltimateWeapon1; // 角色一大招天空武器1
let char1UltimateWeapon2; // 角色一大招天空武器2
let char1UltimateWeapon3; // 角色一大招天空武器3
let isUltimateAttacking = false; // 角色一是否正在大招
let ultimateFrameIndex = 0; // 角色一大招動畫索引
let ultimateProjectiles = []; // 角色一大招投射物
let playerUpgradeEffectTimer = -1; // 玩家升級金光特效計時器
let char1RangedAttackSpriteSheet; // 角色一遠距攻擊圖片精靈
let char1RangedAttackAnimation = []; // 角色一遠距攻擊動畫
let char1ProjectileSpriteSheet; // 角色一投射物圖片精靈
let char1ProjectileAnimation = []; // 角色一投射物動畫
let projectiles = []; // 投射物陣列 {x, y, startX, direction, frameIndex}
let lastProjectileSpawnTime = -1; // 用於偵測最近一次發射（偵錯顯示）

// --- 提示貓變數 ---
let hintCatStandSpriteSheet;
let hintCatRunSpriteSheet;
let hintCatStandAnimation = [];
let hintCatRunAnimation = [];
let hintCatX;
let hintCatY;
let isHintCatActive = false; // 提示貓是否出現
let isHintCatRunning = false; // 提示貓是否正在跑步
let hintCatTargetX; // 提示貓的目標位置
let currentHintText = ''; // 當前的提示文字
let hintBubbleTimer = 0; // 提示氣泡計時器
let currentOptions = []; // 當前題目的選項
let optionButtonRects = []; // 選項按鈕區域
let answerFeedback = null; // 新增：答題回饋狀態 { text: string, correct: boolean }
let currentQuestionWrongCount = 0; // 當前題目連續答錯次數
const HINT_CAT_RUN_FRAME_DIV = 8; // 提示貓跑步幀速：設定為8，呈現「可愛慢跑、陪伴感」，而非競速
let hintCatAnimSpeed = 1.5; // 提示貓動畫速度倍率（可由 1/2/3 鍵切換為 1.2/1.8/2.0）
let coinEffectText = ''; // 金幣特效文字
let coinEffectTimer = 0; // 金幣特效計時器
let coinEffectX = 0; // 金幣特效 X 位置
let coinEffectY = 0; // 金幣特效 Y 位置
let hintCatAnimCounter = 0; // 提示貓動畫計數器
let hintCatFrameIndex = 0; // 提示貓當前幀索引
let lastHintCatRunningState = false; // 上一次提示貓的跑步狀態
let hintCatTeleportTimer = 0; // 提示貓瞬移特效計時器
let hintCatTeleportX = 0; // 提示貓瞬移位置 X
let hintCatTeleportY = 0; // 提示貓瞬移位置 Y

let bgmStart; // 背景音樂 (開始畫面)
let bgmPlay; // 背景音樂 (遊戲中)
let bgmBoss; // 背景音樂 (Boss戰)
let sfxMoney; // 新增：金錢音效
let sfxGet; // 新增：得到物品音效
let sfxGlitch; // 新增：故障音效
let sfxButton; // 新增：按鈕音效
let isMusicOn = true; // 音樂開關狀態
let masterVolume = 1.0; // 主音量 (0.0 ~ 1.0)
let volumeSliderRect; // 音量滑桿區域
let isDraggingVolumeSlider = false; // 是否正在拖動滑桿
let musicToggleButtonRect; // 音樂開關按鈕區域
let isGamePaused = false; // 遊戲是否暫停
let isPausedInstructionsVisible = false; // 是否在暫停時顯示說明
let pausedScreenImage; // 暫停時的螢幕截圖
let lastHoveredButton = null; // 上一次懸停的按鈕
let hoveredButtonThisFrame = null; // 本幀懸停的按鈕
let pauseButtonRect; // 暫停按鈕區域
let resumeButtonRect, restartPauseButtonRect, instructionsButtonRect, pauseMusicButtonRect, backToPauseButtonRect; // 暫停選單按鈕

let backgroundImage; // 背景圖片
let gameplayBackgroundImage; // 遊戲進行時的背景圖片（all.png）
let endingBackgroundImage; // 新增：結局3背景圖片
let bgScrollX; // 背景捲動的 X 偏移量
let bgScrollSpeed = 3; // 走路時的背景捲動速度
let bgRunScrollSpeed = 8; // 跑步時的背景捲動速度

// --- UI 配色（對話框） ---
const UI_COLOR_BG = '#3c322d';        // 背景深褐色
const UI_COLOR_BORDER = '#78645a';    // 外部亮色邊框
const UI_COLOR_INNER = '#503c32';     // 內部深色線條
const TEXT_COLOR = '#ffffff';         // 白色文字

let quizEduTechTable; // 新增：教育科技概論題庫
let quizEnglishTable; // 新增：英文題庫
let quizMode = 'original'; // 新增：測驗模式 ('original', 'edutech')
let eduTechQuestionIndices = []; // 新增：教育科技概論題目索引列表 (用於不重複出題)
let eduTechQuestionIndex = 0; // 新增：當前教育科技概論題目索引
let englishQuestionIndices = []; // 新增：英文題目索引列表
let englishQuestionIndex = 0; // 新增：當前英文題目索引
let isSelectingQuizMode = false; // 新增：是否正在選擇測驗模式
let quizContentButtonRect; // 新增：測驗內容按鈕區域
let quizModeOriginalButtonRect; // 新增：原本模式按鈕區域
let quizModeEduTechButtonRect; // 新增：教育科技概論模式按鈕區域
let quizModeEnglishButtonRect; // 新增：英文模式按鈕區域
let quizTable; // 用於儲存 CSV 題庫資料
let quizHardTable; // 用於儲存困難版 CSV 題庫資料
let quiz3Table; // 用於儲存小老師 CSV 題庫資料
let currentQuestion; // 當前的題目物件

let standAnimation = [];
let walkAnimation = [];
let runAnimation = [];
let rollAnimation = [];
let jumpAnimation = [];
let attackAnimation = [];
let standAnimation2 = []; // 角色二的待機動畫
let hitAnimation2 = []; // 角色二被攻擊的動畫
let triggerAnimation2 = []; // 角色二觸發的動畫
let electrocutionAnimation2 = []; // 角色二電擊的動畫
let danceAnimation2 = []; // 角色二跳舞的動畫

let characterX;
let characterY;
let velocityY = 0;
let velocityX = 0; // 水平速度（用於彈回效果）
let isBoundaryBouncing = false; // 正在執行邊界彈回
let boundaryBounceVel = 0; // 彈回瞬間速度
let boundaryCooldown = 0; // 防止短時間重複觸發邊界
const gravity = 0.6;
const jumpForce = -15;
let isJumping = false;
let isAttacking = false;
let groundY;
let character2X; // 角色二的 X 座標
let character2Y; // 角色二的 Y 座標
let isCharacter2Hit = false; // 角色二是否被擊中
let isCharacter2Triggered = false; // 角色二是否被觸發
let isCharacter2Electrocuted = false; // 角色二是否正在被電擊
let isCharacter2Dancing = false; // 角色二是否正在跳舞
let character2HitTimer = -1; // 角色二被攻擊後的計時器，用於停止3秒
let dancePauseTimer = -1; // 角色二跳舞後的暫停計時器

// 角色一移動速度（世界座標單位）
let speed = 5;

let currentFrameIndex = 0;
let lastAnimationType = null;
let direction = 1; // 1 for right, -1 for left
let currentFrameIndex2 = 0; // 角色二的當前畫格索引
let hitFrameIndex2 = 0; // 角色二被攻擊動畫的畫格索引
let triggerFrameIndex2 = 0; // 角色二觸發動畫的畫格索引
let electrocutionFrameIndex2 = 0; // 角色二電擊動畫的畫格索引
let danceFrameIndex2 = 0; // 角色二跳舞動畫的畫格索引
let inputField; // 文字輸入框
let playerName = ''; // 儲存玩家名字
let hasProvidedName = false; // 是否已經提供過名字
let confirmButton, declineButton; // 確認與拒絕按鈕
let dialogMessage = ''; // 要顯示的對話內容
let dialogState = 'none'; // 對話狀態: none, 1_askName, 2_inputName, 3_confirmStart, 4_askQuestion, 5_inputAnswer, 6_showFeedback, completed
let showFinalDialog = false; // 是否顯示最終對話
let finalDialogTimer = -1; // 最終對話的計時器
let lockMessageTimer = 0; // 鎖頭提示訊息計時器
let inputFieldVisible = false; // 追蹤輸入框是否已顯示過
let isAutoWalking = false; // 是否正在自動走路
let autoWalkTargetX = 0; // 自動走路的目標X座標
let score = 0; // 新增分數變數
let questionsAnswered = 0; // 已回答的題數
let worldWidth = 0; // 世界總寬度 (World Width)
let hasKey = false; // 是否擁有鑰匙
let showMissionObjective = false; // 是否顯示任務目標
let isDoorUnlocked = false; // 大門是否已解鎖
let gameStartTime = 0; // 遊戲開始時間
let gameEndTime = 0; // 遊戲結束時間
let correctAnswersCount = 0; // 答對題數
let wrongAnswersLog = []; // 錯題記錄
let wrongAnswersPage = 0; // 錯題回顧當前頁數
let nextPageButtonRect; // 下一頁按鈕區域
let prevPageButtonRect; // 上一頁按鈕區域

// --- 打字機效果變數 ---
let currentDialogText = ''; // 當前要顯示的完整對話文字
let displayedDialogText = ''; // 目前已經打字顯示出來的文字
let typingIndex = 0; // 打字機效果的當前索引
let lastTypingTime = 0; // 上一次打字的時間
const typingSpeed = 35; // 打字速度 (毫秒/字)

// --- 遊戲狀態管理 ---
let gameState = 'start'; // 'start', 'instructions', 'playing'
let instructionTimer = -1; // 說明頁面的計時器
let charactersVisible = false; // 角色是否可見

// 按鈕矩形區域
let yesButtonRect = {x: 0, y: 0, w: 60, h: 40};
let noButtonRect = {x: 0, y: 0, w: 60, h: 40};
let enterGameButtonRect;
let startGameButtonRect;
let showChoiceButtons = false; // 是否顯示選擇按鈕
let shopButton1Rect, shopButton2Rect, shopButton3Rect; // 商店按鈕區域
let postQuizButton1Rect, postQuizButton2Rect, postQuizButton3Rect; // 測驗後互動按鈕區域
let postKeyButton1Rect, postKeyButton2Rect; // 班長後續互動按鈕區域
let teacherOption1Rect, teacherOption2Rect, teacherOption3Rect; // 老師互動按鈕區域
let restartButtonRect; // 重新開始按鈕區域
let startBattleButtonRect; // Boss戰開始按鈕區域

let currentQuizNpc = 'student1'; // 當前進行測驗的 NPC ('student1' 或 'student2')
let maxQuestions = 10; // 測驗總題數
let isStudent1QuizCompleted = false; // 新增：是否已完成學生1的測驗
let student2CorrectCount = 0; // 新增：學生2測驗答對題數
let hasScholarBadge = false; // 新增：是否獲得學霸勳章
let isStudent3QuizCompleted = false; // 新增：是否已完成小老師的測驗
let student3CorrectCount = 0; // 新增：小老師測驗答對題數
let isStudent2QuizCompleted = false; // 新增：是否已完成學生2的測驗
let hasQuizMasterTitle = false; // 新增：是否獲得刷題王稱號
let hasModelStudentTitle = false; // 新增：是否獲得模範生稱號
let hasNonsenseMasterTitle = false; // 新增：是否獲得胡言亂語大師成就
let student1ReplayConsecutiveCorrect = 0; // 新增：學生1重玩時連續答對次數
let creatorTestedStudent1 = false; // 新增：創造者是否已測試過學生1
let creatorTestedStudent2 = false; // 新增：創造者是否已測試過學生2
let creatorTestedStudent3 = false; // 新增：創造者是否已測試過小老師
let teacherHealth = 100; // 老師的血量 (為未來功能預留)
let playerHealth = 80; // 新增：玩家的血量
let endingType = 0; // 新增：結局類型 (1: 誰關燈了, 2: 虛擬覺醒, 3: 全勤好學生, 4: 第*亂碼*次逃離失敗, 5: 循環的一部分)
let isReloading = false; // 新增：是否正在刷新頁面
let reloadTimer = 0; // 新增：刷新頁面計時器

// --- 獎勵動畫變數 ---
let rewardAnimationState = 'none'; // 'none', 'popup', 'flying'
let rewardAnimationTimer = 0;
let rewardItemType = ''; // 'key', 'scholar_badge', 'quiz_master'
let rewardIconX = 0;
let rewardIconY = 0;
let rewardIconScale = 1;
let rewardFlyStartTime = 0;

// --- 結局特效變數 ---
let codeScrollY = 0;
const errorLines = [
  "FATAL ERROR: 0x00000000",
  "System.Runtime.InteropServices.COMException",
  "at Sketch.js:2048",
  "Memory Dump: 100%",
  "Rebooting universe...",
  "User 'Player' not found.",
  "Connection lost...",
  "Initiating forced reset..."
];

// 待機動畫的屬性
const standFrameCount = 16;
const standSheetWidth = 699;
const standFrameWidth = standSheetWidth / standFrameCount;

// 走路動畫的屬性
const walkFrameCount = 17;
const walkSheetWidth = 930;
const walkFrameWidth = walkSheetWidth / walkFrameCount;

// 跑步動畫的屬性
const runFrameCount = 16;
const runSheetWidth = 1243;
const runFrameHeight = 70;
const runFrameWidth = runSheetWidth / runFrameCount;

// 翻滾動畫的屬性
const rollFrameCount = 3;
const rollSheetWidth = 184;
const rollFrameHeight = 53;
const rollFrameWidth = rollSheetWidth / rollFrameCount;

// 跳躍動畫的屬性
const jumpFrameCount = 4;
const jumpSheetWidth = 247;
const jumpFrameHeight = 72;
const jumpFrameWidth = jumpSheetWidth / jumpFrameCount;

// 攻擊動畫的屬性
const attackFrameCount = 19;
const attackSheetWidth = 2788;
const attackFrameHeight = 89;
const attackFrameWidth = attackSheetWidth / attackFrameCount;

// 角色二待機動畫的屬性
const standFrameCount2 = 19;
const standSheetWidth2 = 1078;
const standSheetHeight2 = 82;
const standFrameWidth2 = standSheetWidth2 / standFrameCount2;

// 角色二被攻擊動畫的屬性
const hitFrameCount2 = 25;
const hitSheetWidth2 = 2720;
const hitSheetHeight2 = 103;
const hitFrameWidth2 = hitSheetWidth2 / hitFrameCount2;

// 角色二觸發動畫的屬性
const triggerFrameCount2 = 16;
const triggerSheetWidth2 = 1259;
const triggerSheetHeight2 = 91;
const triggerFrameWidth2 = triggerSheetWidth2 / triggerFrameCount2;

// 角色二電擊動畫的屬性
const electrocutionFrameCount2 = 5;
const electrocutionSheetWidth2 = 565;
const electrocutionSheetHeight2 = 131;
const electrocutionFrameWidth2 = electrocutionSheetWidth2 / electrocutionFrameCount2;

// 角色二跳舞動畫的屬性
const danceFrameCount2 = 9;
const danceSheetWidth2 = 868;
const danceSheetHeight2 = 99;
const danceFrameWidth2 = danceSheetWidth2 / danceFrameCount2;

// 角色三(角色四)待機動畫的屬性
const standFrameCount3 = 18;
const standSheetWidth3 = 1111;
const standSheetHeight3 = 63;
const standFrameWidth3 = standSheetWidth3 / standFrameCount3;

// 角色三生氣動畫的屬性
const angryFrameCount3 = 18;
const angrySheetWidth3 = 1759;
const angrySheetHeight3 = 98;
const angryFrameWidth3 = angrySheetWidth3 / angryFrameCount3;

// 新增 NPC (角色三) 待機動畫的屬性
const standFrameCount4 = 12;
const standSheetWidth4 = 619;
const standSheetHeight4 = 112;
const standFrameWidth4 = standSheetWidth4 / standFrameCount4;

// 新增 NPC (角色三) 跑步動畫的屬性
const runFrameCount4 = 6;
const runSheetWidth4 = 547;
const runSheetHeight4 = 110;
const runFrameWidth4 = runSheetWidth4 / runFrameCount4;

// 新增 NPC (學生2) 待機動畫的屬性
const standFrameCount5 = 12;
const standSheetWidth5 = 499;
const standSheetHeight5 = 95;
const standFrameWidth5 = standSheetWidth5 / standFrameCount5;

// 新增 NPC (小老師) 待機動畫的屬性
const standFrameCount6 = 8;
const standSheetWidth6 = 707;
const standSheetHeight6 = 96;
const standFrameWidth6 = standSheetWidth6 / standFrameCount6;

// 新增 NPC (老師) 待機動畫的屬性
const standFrameCount7 = 24;
const standSheetWidth7 = 1363;
const standSheetHeight7 = 106;
const standFrameWidth7 = standSheetWidth7 / standFrameCount7;

// 新增 NPC (老師) 後退動畫的屬性
const character7RetreatFrameCount = 28;
const character7RetreatSheetWidth = 2123;
const character7RetreatSheetHeight = 102;
const character7RetreatFrameWidth = character7RetreatSheetWidth / character7RetreatFrameCount;

// 新增 NPC (老師) 普通攻擊動畫的屬性
const character7AttackFrameCount = 17;
const character7AttackSheetWidth = 1729;
const character7AttackSheetHeight = 118;
const character7AttackFrameWidth = character7AttackSheetWidth / character7AttackFrameCount;

// 新增 NPC (老師) 中攻擊動畫的屬性
const character7MediumAttackFrameCount = 19;
const character7MediumAttackSheetWidth = 1762;
const character7MediumAttackSheetHeight = 105;
const character7MediumAttackFrameWidth = character7MediumAttackSheetWidth / character7MediumAttackFrameCount;

// 新增 NPC (老師) 中攻擊投擲物動畫的屬性
const teacherMediumProjectileFrameCount = 15;
const teacherMediumProjectileSheetWidth = 2110;
const teacherMediumProjectileSheetHeight = 102;
const teacherMediumProjectileFrameWidth = teacherMediumProjectileSheetWidth / teacherMediumProjectileFrameCount;

// 新增 NPC (老師) 大招動畫的屬性
const character7SpecialAttackFrameCount = 12;
const character7SpecialAttackSheetWidth = 1351;
const character7SpecialAttackSheetHeight = 101;
const character7SpecialAttackFrameWidth = character7SpecialAttackSheetWidth / character7SpecialAttackFrameCount;

// 新增 NPC (老師) 死亡動畫的屬性
const character7DeathFrameCount = 11;
const character7DeathSheetWidth = 1249;
const character7DeathSheetHeight = 75;
const character7DeathFrameWidth = character7DeathSheetWidth / character7DeathFrameCount;

// 新增 NPC (老師) 大招投擲物動畫的屬性
const teacherSpecialProjectileFrameCount = 14;
const teacherSpecialProjectileSheetWidth = 7905;
const teacherSpecialProjectileSheetHeight = 171;
const teacherSpecialProjectileFrameWidth = teacherSpecialProjectileSheetWidth / teacherSpecialProjectileFrameCount;

// 新增 NPC (老師) 投擲物動畫的屬性
const teacherProjectileFrameCount = 10;
const teacherProjectileSheetWidth = 1525;
const teacherProjectileSheetHeight = 52;
const teacherProjectileFrameWidth = teacherProjectileSheetWidth / teacherProjectileFrameCount;

// 角色一大招動畫屬性
const char1UltimateFrameCount = 19;
const char1UltimateSheetWidth = 4422;
const char1UltimateSheetHeight = 176;
const char1UltimateFrameWidth = char1UltimateSheetWidth / char1UltimateFrameCount;

// 新增 NPC (小老師) 升級動畫屬性
const npc6UpgradeFrameCount = 9;
const npc6UpgradeSheetWidth = 1381;
const npc6UpgradeSheetHeight = 128;
const npc6UpgradeFrameWidth = npc6UpgradeSheetWidth / npc6UpgradeFrameCount;

// 角色一遠距攻擊動畫屬性
const rangedAttackFrameCount = 7;


// 角色一投射物動畫屬性
const projectileFrameCount = 8;
// projectile frame width computed from loaded image in setup

// 在 setup() 之前預先載入圖片資源
function preload() {
  standSpriteSheet = loadImage('角色一/待機/all.png');
  walkSpriteSheet = loadImage('角色一/走/all.png');
  runSpriteSheet = loadImage('角色一/跑跑/all.png');
  rollSpriteSheet = loadImage('角色一/翻滾/all.png');
  jumpSpriteSheet = loadImage('角色一/跳/all2.png');
  attackSpriteSheet = loadImage('角色一/向前攻擊/all.png');
  character1SpeakImage = loadImage('角色一/說話/0.png'); // 載入角色一的說話牱像
  character2SpeakImage = loadImage('角色二/對話/0.png'); // 載入角色二的說話牱像
  character3SpeakImage = loadImage('角色四/商店/0.png'); // 載入角色三的說話頭像
  character4SpeakImage = loadImage('角色三/互動對話/0.png'); // 載入角色四(奇怪的同學)的說話頭像
  character5SpeakImage = loadImage('角色五/互動/0.png'); // 載入角色五(學生2)的說話頭像
  character6SpeakImage = loadImage('角色六/頭像/1.png'); // 載入角色六(小老師)的說話頭像
  character7SpeakImage = loadImage('角色七/頭像/0.png'); // 載入角色七(老師)的說話頭像
  character7HappyImage = loadImage('角色七/頭像/3.png'); // 載入角色七(老師)的開心頭像
  character7ConfusedImage = loadImage('角色七/頭像/1.png'); // 載入角色七(老師)的困惑頭像
  character7SeriousImage = loadImage('角色七/頭像/2.png'); // 載入角色七(老師)的嚴肅頭像
  character7BossImage = loadImage('角色七/頭像/4.png'); // 載入角色七(老師)的Boss戰頭像
  // 載入角色二的圖片
  standSpriteSheet2 = loadImage('角色二/待機/all.png');
  hitSpriteSheet2 = loadImage('角色二/被攻擊/all.png');
  triggerSpriteSheet2 = loadImage('角色二/觸發/all.png');
  electrocutionSpriteSheet2 = loadImage('角色二/電擊/all.png');
  danceSpriteSheet2 = loadImage('角色二/跳舞/all.png');
  standSpriteSheet3 = loadImage('角色四/待機/all.png'); // 載入角色三(角色四)
  angrySpriteSheet3 = loadImage('角色四/生氣/all.png'); // 載入角色三生氣動畫
  standSpriteSheet4 = loadImage('角色三/待機/all.png'); // 載入新增 NPC (角色三)
  runSpriteSheet4 = loadImage('角色三/跑步/all.png'); // 載入新增 NPC (角色三) 跑步動畫
  standSpriteSheet5 = loadImage('角色五/待機/all.png'); // 載入新增 NPC (學生2)
  standSpriteSheet6 = loadImage('角色六/待機/all.png'); // 載入新增 NPC (小老師)
  standSpriteSheet7 = loadImage('角色七/待機/all.png'); // 載入新增 NPC (老師)
  character7RetreatSpriteSheet = loadImage('角色七/後退/all.png'); // 載入新增 NPC (老師) 的後退動畫
  character7AttackSpriteSheet = loadImage('角色七/普通攻擊/all.png'); // 載入新增 NPC (老師) 的普通攻擊動畫
  character7MediumAttackSpriteSheet = loadImage('角色七/遠攻/all.png'); // 載入新增 NPC (老師) 的中攻擊動畫
  teacherMediumProjectileSpriteSheet = loadImage('角色七/遠攻的投擲物/all.png'); // 載入新增 NPC (老師) 的中攻擊投擲物動畫
  character7SpecialAttackSpriteSheet = loadImage('角色七/死亡攻擊/all.png'); // 載入新增 NPC (老師) 的大招動畫
  teacherSpecialProjectileSpriteSheet = loadImage('角色七/死亡攻擊的投擲物/all.png'); // 載入新增 NPC (老師) 的大招投擲物動畫
  character7DeathSpriteSheet = loadImage('角色七/被擊敗/all.png'); // 載入新增 NPC (老師) 的死亡動畫
  teacherProjectileSpriteSheet = loadImage('角色七/普通攻擊的投擲物/all.png'); // 載入新增 NPC (老師) 的投擲物動畫
  npc6UpgradeSpriteSheet = loadImage('角色六/升級/all.png'); // 載入小老師升級動畫
  char1RangedAttackSpriteSheet = loadImage('角色一/遠距攻擊/all.png'); // 載入角色一遠距攻擊
  char1ProjectileSpriteSheet = loadImage('角色一/遠距攻擊的武器/all.png'); // 載入投射物
  char1UltimateSpriteSheet = loadImage('角色一/大招/all.png'); // 載入角色一大招動畫
  char1UltimateWeapon0 = loadImage('角色一/大招武器/1/0.png'); // 載入角色一大招地面武器
  char1UltimateWeapon1 = loadImage('角色一/大招武器/1/1.png'); // 載入角色一大招天空武器1
  char1UltimateWeapon2 = loadImage('角色一/大招武器/1/2.png'); // 載入角色一大招天空武器2
  char1UltimateWeapon3 = loadImage('角色一/大招武器/1/3.png'); // 載入角色一大招天空武器3
  hintCatStandSpriteSheet = loadImage('提示/待機/all.png'); // 載入提示貓待機
  hintCatRunSpriteSheet = loadImage('提示/跑步/all.png'); // 載入提示貓跑步
  // 載入背景音樂
  bgmStart = loadSound('音樂/2.mp3');
  bgmPlay = loadSound('音樂/1.mp3');
  bgmBoss = loadSound('音樂/3.mp3'); // 載入 Boss 戰音樂
  sfxMoney = loadSound('音效/好多錢.mp3'); // 新增：載入金錢音效
  sfxGet = loadSound('音效/得到.mp3'); // 新增：載入得到物品音效
  sfxGlitch = loadSound('音效/故障.mp3'); // 新增：載入故障音效
  sfxButton = loadSound('音效/按鈕.mp3'); // 新增：載入按鈕音效
  backgroundImage = loadImage('背景/1.png'); // 載入背景圖片
  gameplayBackgroundImage = loadImage('背景/all.png'); // 遊戲進行時的背景（all.png）
  endingBackgroundImage = loadImage('背景/2.png'); // 新增：載入結局3背景
  // 載入 CSV 題庫，'csv' 表示檔案類型，'header' 表示第一行為標題
  quizTable = loadTable('quiz.csv', 'csv', 'header');
  quizHardTable = loadTable('quiz_hard.csv', 'csv', 'header');
  quiz3Table = loadTable('quiz_3.csv', 'csv', 'header');
  quizEduTechTable = loadTable('Q概論.csv', 'csv', 'header'); // 載入教育科技概論題庫
  quizEnglishTable = loadTable('英文.csv', 'csv', 'header'); // 載入英文題庫
}

// --- 核心邏輯：將世界座標轉換為螢幕座標 ---
// 處理無限循環地圖的關鍵函數
function getScreenX(worldX) {
  return worldX - bgScrollX;
}

// --- 檢查按鈕懸停狀態 ---
function checkHover(btnRect, btnId) {
  if (btnRect && mouseX > btnRect.x && mouseX < btnRect.x + btnRect.w &&
      mouseY > btnRect.y && mouseY < btnRect.y + btnRect.h) {
    hoveredButtonThisFrame = btnId;
  }
}

function updateHoverSound() {
  if (hoveredButtonThisFrame && hoveredButtonThisFrame !== lastHoveredButton) {
    if (isMusicOn && sfxButton) sfxButton.play();
  }
  lastHoveredButton = hoveredButtonThisFrame;
}

function setup() {
  // 建立一個填滿整個瀏覽器視窗的畫布
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER); // 將圖片的繪製模式設定為中心對齊

  // 建立輸入框並初始隱藏
  inputField = createInput();
  inputField.hide();

  // 按鈕已改為手動繪製的白色方框

  // 初始化角色位置在畫面中央
  groundY = height * 2 / 3; // 地面在視窗高度的2/3位置
  characterX = width / 2; // 角色一固定在畫面中央
  characterY = groundY;

  // 初始化角色二的位置
  // 角色二的絕對位置，相對於整個大背景
  // 計算背景的實際寬度（保持長寬比適應視窗高度）
  const bgWidth = gameplayBackgroundImage.width * (height / gameplayBackgroundImage.height);
  worldWidth = bgWidth; // 初始化世界寬度
  // 將角色二放在最左邊視窗的最右邊
  character2X = width - 80;

  // --- 初始化背景滾動位置為最左邊 ---
  bgScrollX = 0; // 遊戲開始時，畫面在all.png的最左邊
  character2Y = groundY;
  
  // 初始化角色三的位置 (畫布中間)
  character3X = worldWidth / 2;
  character3OriginalX = character3X; // 記錄原始位置
  character3Y = groundY;
  
  // 初始化新增 NPC (角色三) 的位置 (在角色二和角色三中間)
  character4X = (character2X + character3X) / 2;
  character4Y = groundY;
  
  // 初始化新增 NPC (學生2) 的位置 (在角色二和角色四中間)
  character5X = (character2X + character4X) / 2;
  character5Y = groundY;
  
  // 初始化新增 NPC (小老師) 的位置 (在奇怪的同學和班長中間)
  character6X = (character3X + character4X) / 2;
  character6Y = groundY;

  // 初始化新增 NPC (老師) 的位置 (在班長右邊 35+8=43 公分, 1cm ~ 40px => 1720px)
  character7X = character3X + 1720;
  character7Y = groundY;

  hintCatY = groundY + 30; // 提示貓較小，調整高度以對齊地面

  // 初始化角色一世界座標，使角色一位於畫面中心（相對於初始 bgScrollX）
  characterX = bgScrollX + width / 2;

  // 將圖片精靈切割成 16 個獨立的畫格
  for (let i = 0; i < standFrameCount; i++) {
    let frame = standSpriteSheet.get(i * standFrameWidth, 0, standFrameWidth, 88); // 待機高度為 88
    standAnimation.push(frame);
  }

  // 將走路的圖片精靈切割成 17 個獨立的畫格
  for (let i = 0; i < walkFrameCount; i++) {
    let frame = walkSpriteSheet.get(i * walkFrameWidth, 0, walkFrameWidth, 88); // 走路高度為 88
    walkAnimation.push(frame);
  }

  // 將跑步的圖片精靈切割成 16 個獨立的畫格
  for (let i = 0; i < runFrameCount; i++) {
    let frame = runSpriteSheet.get(i * runFrameWidth, 0, runFrameWidth, runFrameHeight);
    runAnimation.push(frame);
  }

  // 將翻滾的圖片精靈切割成 11 個獨立的畫格
  for (let i = 0; i < rollFrameCount; i++) {
    let frame = rollSpriteSheet.get(i * rollFrameWidth, 0, rollFrameWidth, rollFrameHeight);
    rollAnimation.push(frame);
  }

  // 將跳躍的圖片精靈切割成 4 個獨立的畫格
  for (let i = 0; i < jumpFrameCount; i++) {
    let frame = jumpSpriteSheet.get(i * jumpFrameWidth, 0, jumpFrameWidth, jumpFrameHeight);
    jumpAnimation.push(frame);
  }

  // 將攻擊的圖片精靈切割成 19 個獨立的畫格
  for (let i = 0; i < attackFrameCount; i++) {
    let frame = attackSpriteSheet.get(i * attackFrameWidth, 0, attackFrameWidth, attackFrameHeight);
    attackAnimation.push(frame);
  }

  // 將角色二的圖片精靈切割成 19 個獨立的畫格
  for (let i = 0; i < standFrameCount2; i++) {
    let frame = standSpriteSheet2.get(i * standFrameWidth2, 0, standFrameWidth2, standSheetHeight2);
    standAnimation2.push(frame);
  }

  // 將角色二被攻擊的圖片精靈切割成 25 個獨立的畫格
  for (let i = 0; i < hitFrameCount2; i++) {
    let frame = hitSpriteSheet2.get(i * hitFrameWidth2, 0, hitFrameWidth2, hitSheetHeight2);
    hitAnimation2.push(frame);
  }

  // 將角色二觸發的圖片精靈切割成 7 個獨立的畫格
  for (let i = 0; i < triggerFrameCount2; i++) {
    let frame = triggerSpriteSheet2.get(i * triggerFrameWidth2, 0, triggerFrameWidth2, triggerSheetHeight2);
    triggerAnimation2.push(frame);
  }

  // 將角色二電擊的圖片精靈切割成 5 個獨立的畫格
  for (let i = 0; i < electrocutionFrameCount2; i++) {
    let frame = electrocutionSpriteSheet2.get(i * electrocutionFrameWidth2, 0, electrocutionFrameWidth2, electrocutionSheetHeight2);
    electrocutionAnimation2.push(frame);
  }

  // 將角色二跳舞的圖片精靈切割成 9 個獨立的畫格
  for (let i = 0; i < danceFrameCount2; i++) {
    let frame = danceSpriteSheet2.get(i * danceFrameWidth2, 0, danceFrameWidth2, danceSheetHeight2);
    danceAnimation2.push(frame);
  }
  
  // 將角色三的圖片精靈切割成 18 個獨立的畫格
  for (let i = 0; i < standFrameCount3; i++) {
    let frame = standSpriteSheet3.get(i * standFrameWidth3, 0, standFrameWidth3, standSheetHeight3);
    standAnimation3.push(frame);
  }
  
  // 將角色三生氣的圖片精靈切割成 18 個獨立的畫格
  for (let i = 0; i < angryFrameCount3; i++) {
    let frame = angrySpriteSheet3.get(i * angryFrameWidth3, 0, angryFrameWidth3, angrySheetHeight3);
    angryAnimation3.push(frame);
  }
  
  // 將新增 NPC (角色三) 的圖片精靈切割成 12 個獨立的畫格
  for (let i = 0; i < standFrameCount4; i++) {
    let frame = standSpriteSheet4.get(i * standFrameWidth4, 0, standFrameWidth4, standSheetHeight4);
    standAnimation4.push(frame);
  }
  
  // 將新增 NPC (角色三) 的跑步圖片精靈切割成 6 個獨立的畫格
  for (let i = 0; i < runFrameCount4; i++) {
    let frame = runSpriteSheet4.get(i * runFrameWidth4, 0, runFrameWidth4, runSheetHeight4);
    runAnimation4.push(frame);
  }

  // 將新增 NPC (學生2) 的圖片精靈切割成 12 個獨立的畫格
  for (let i = 0; i < standFrameCount5; i++) {
    let frame = standSpriteSheet5.get(i * standFrameWidth5, 0, standFrameWidth5, standSheetHeight5);
    standAnimation5.push(frame);
  }

  // 將新增 NPC (小老師) 的圖片精靈切割成 8 個獨立的畫格
  for (let i = 0; i < standFrameCount6; i++) {
    let frame = standSpriteSheet6.get(i * standFrameWidth6, 0, standFrameWidth6, standSheetHeight6);
    standAnimation6.push(frame);
  }

  // 將新增 NPC (老師) 的圖片精靈切割成 24 個獨立的畫格
  for (let i = 0; i < standFrameCount7; i++) {
    let frame = standSpriteSheet7.get(i * standFrameWidth7, 0, standFrameWidth7, standSheetHeight7);
    standAnimation7.push(frame);
  }

  // 將老師後退的圖片精靈切割成 28 個獨立的畫格
  for (let i = 0; i < character7RetreatFrameCount; i++) {
    let frame = character7RetreatSpriteSheet.get(i * character7RetreatFrameWidth, 0, character7RetreatFrameWidth, character7RetreatSheetHeight);
    character7RetreatAnimation.push(frame);
  }

  // 將老師普通攻擊的圖片精靈切割成 17 個獨立的畫格
  for (let i = 0; i < character7AttackFrameCount; i++) {
    let frame = character7AttackSpriteSheet.get(i * character7AttackFrameWidth, 0, character7AttackFrameWidth, character7AttackSheetHeight);
    character7AttackAnimation.push(frame);
  }

  // 將老師中攻擊的圖片精靈切割成 19 個獨立的畫格
  for (let i = 0; i < character7MediumAttackFrameCount; i++) {
    let frame = character7MediumAttackSpriteSheet.get(i * character7MediumAttackFrameWidth, 0, character7MediumAttackFrameWidth, character7MediumAttackSheetHeight);
    character7MediumAttackAnimation.push(frame);
  }

  // 將老師中攻擊投擲物的圖片精靈切割成 15 個獨立的畫格
  for (let i = 0; i < teacherMediumProjectileFrameCount; i++) {
    let frame = teacherMediumProjectileSpriteSheet.get(i * teacherMediumProjectileFrameWidth, 0, teacherMediumProjectileFrameWidth, teacherMediumProjectileSheetHeight);
    teacherMediumProjectileAnimation.push(frame);
  }

  // 將老師大招的圖片精靈切割成 12 個獨立的畫格
  for (let i = 0; i < character7SpecialAttackFrameCount; i++) {
    let frame = character7SpecialAttackSpriteSheet.get(i * character7SpecialAttackFrameWidth, 0, character7SpecialAttackFrameWidth, character7SpecialAttackSheetHeight);
    character7SpecialAttackAnimation.push(frame);
  }

  // 將老師死亡的圖片精靈切割成 11 個獨立的畫格
  for (let i = 0; i < character7DeathFrameCount; i++) {
    let frame = character7DeathSpriteSheet.get(i * character7DeathFrameWidth, 0, character7DeathFrameWidth, character7DeathSheetHeight);
    character7DeathAnimation.push(frame);
  }

  // 將老師大招投擲物的圖片精靈切割成 14 個獨立的畫格
  for (let i = 0; i < teacherSpecialProjectileFrameCount; i++) {
    let frame = teacherSpecialProjectileSpriteSheet.get(i * teacherSpecialProjectileFrameWidth, 0, teacherSpecialProjectileFrameWidth, teacherSpecialProjectileSheetHeight);
    teacherSpecialProjectileAnimation.push(frame);
  }

  // 將老師投擲物的圖片精靈切割成 10 個獨立的畫格
  for (let i = 0; i < teacherProjectileFrameCount; i++) {
    let frame = teacherProjectileSpriteSheet.get(i * teacherProjectileFrameWidth, 0, teacherProjectileFrameWidth, teacherProjectileSheetHeight);
    teacherProjectileAnimation.push(frame);
  }

  // 切割角色一大招動畫
  for (let i = 0; i < char1UltimateFrameCount; i++) {
    let frame = char1UltimateSpriteSheet.get(i * char1UltimateFrameWidth, 0, char1UltimateFrameWidth, char1UltimateSheetHeight);
    char1UltimateAnimation.push(frame);
  }

  // 切割小老師升級動畫
  for (let i = 0; i < npc6UpgradeFrameCount; i++) {
    let frame = npc6UpgradeSpriteSheet.get(i * npc6UpgradeFrameWidth, 0, npc6UpgradeFrameWidth, npc6UpgradeSheetHeight);
    npc6UpgradeAnimation.push(frame);
  }

  // 切割角色一遠距攻擊動畫
  // 計算遠距攻擊每幀寬度（圖片尺寸為 499x92 或總寬可能是多張接在一起的寬度）
  let rangedAttackFrameWidth = Math.floor(char1RangedAttackSpriteSheet.width / rangedAttackFrameCount);
  for (let i = 0; i < rangedAttackFrameCount; i++) {
    let frame = char1RangedAttackSpriteSheet.get(i * rangedAttackFrameWidth, 0, rangedAttackFrameWidth, 92);
    char1RangedAttackAnimation.push(frame);
  }

  // 切割投射物動畫
  let projectileFrameWidth = Math.floor(char1ProjectileSpriteSheet.width / projectileFrameCount);
  for (let i = 0; i < projectileFrameCount; i++) {
    let frame = char1ProjectileSpriteSheet.get(i * projectileFrameWidth, 0, projectileFrameWidth, 58);
    char1ProjectileAnimation.push(frame);
  }

  // 將提示貓待機圖片精靈切割成 10 個獨立的畫格 (355x28)
  const hintCatStandFrameCount = 10;
  const hintCatStandSheetWidth = 355;
  const hintCatStandSheetHeight = 28;
  const hintCatStandFrameWidth = hintCatStandSheetWidth / hintCatStandFrameCount;
  for (let i = 0; i < hintCatStandFrameCount; i++) {
    let frame = hintCatStandSpriteSheet.get(i * hintCatStandFrameWidth, 0, hintCatStandFrameWidth, hintCatStandSheetHeight);
    hintCatStandAnimation.push(frame);
  }

  // 將提示貓跑步圖片精靈切割成 12 個獨立的畫格 (499x30)
  const hintCatRunFrameCount = 12;
  const hintCatRunSheetWidth = 499;
  const hintCatRunSheetHeight = 30;
  const hintCatRunFrameWidth = hintCatRunSheetWidth / hintCatRunFrameCount;
  for (let i = 0; i < hintCatRunFrameCount; i++) {
    let frame = hintCatRunSpriteSheet.get(i * hintCatRunFrameWidth, 0, hintCatRunFrameWidth, hintCatRunSheetHeight);
    hintCatRunAnimation.push(frame);
  }

  // 初始化按鈕位置
  enterGameButtonRect = {x: width / 2 - 100, y: height / 2 - 60, w: 200, h: 50}; // 上移以容納新按鈕
  quizContentButtonRect = {x: width / 2 - 100, y: height / 2 + 10, w: 200, h: 50}; // 新增：測驗內容按鈕
  startGameButtonRect = {x: width / 2 - 100, y: height - 80, w: 200, h: 50};
  musicToggleButtonRect = {x: width / 2 + 120, y: height / 2 - 60, w: 50, h: 50}; // 音樂按鈕跟隨上移
  
  // 初始化測驗模式選擇按鈕
  quizModeOriginalButtonRect = {x: width / 2 - 100, y: height / 2 - 100, w: 200, h: 50};
  quizModeEduTechButtonRect = {x: width / 2 - 100, y: height / 2 - 30, w: 200, h: 50};
  quizModeEnglishButtonRect = {x: width / 2 - 100, y: height / 2 + 40, w: 200, h: 50};
  
  // 初始化暫停相關按鈕
  pauseButtonRect = {x: width - 60, y: 20, w: 40, h: 40};
  resumeButtonRect = {x: width / 2 - 100, y: height / 2 - 70, w: 200, h: 50};
  restartPauseButtonRect = {x: width / 2 - 100, y: height / 2, w: 200, h: 50};
  instructionsButtonRect = {x: width / 2 - 100, y: height / 2 + 70, w: 200, h: 50};
  pauseMusicButtonRect = {x: width / 2 - 130, y: height / 2 + 140, w: 50, h: 50}; // 暫停選單的音樂按鈕 (移至左側)
  volumeSliderRect = {x: width / 2 - 50, y: height / 2 + 165, w: 150, h: 20}; // 音量滑桿 (放在按鈕右側)
  backToPauseButtonRect = {x: width / 2 - 100, y: height - 100, w: 200, h: 50}; // 暫停說明頁面的返回按鈕
  startBattleButtonRect = {x: width / 2 - 100, y: height - 100, w: 200, h: 50}; // Boss戰開始按鈕

  // 初始化音量
  bgmStart.setVolume(masterVolume);
  bgmPlay.setVolume(masterVolume);
  bgmBoss.setVolume(masterVolume);
  sfxMoney.setVolume(masterVolume);
  sfxGet.setVolume(masterVolume);
  sfxGlitch.setVolume(masterVolume);
  sfxButton.setVolume(masterVolume);

  // 播放開始畫面音樂
  bgmStart.loop();
}

// 顯示對話框
function showDialogBox(message, title = "系統", showArrow = false, portrait = null) {
  // --- 打字機效果邏輯 ---
  // 如果傳入的訊息跟當前記錄的不同，代表是新的對話，重置打字狀態
  if (message !== currentDialogText) {
    currentDialogText = message;
    displayedDialogText = "";
    typingIndex = 0;
    lastTypingTime = millis();

    // 播放故障音效
    if (isMusicOn && sfxGlitch && (
      message.includes("我們都被困在程式碼裡，一次又一次...") || 
      message.includes("警告：系統崩潰中...") || 
      message.includes("不....循環又發生了...")
    )) {
      sfxGlitch.play();
    }
  }

  // 根據時間逐字增加顯示內容
  if (typingIndex < currentDialogText.length) {
    if (millis() - lastTypingTime > typingSpeed) {
      displayedDialogText += currentDialogText.charAt(typingIndex);
      typingIndex++;
      lastTypingTime = millis();
    }
  } else {
    displayedDialogText = currentDialogText;
  }

  // 特殊效果：當對話包含 "金錢的力量!" 時，背景閃爍金黃色
  if (message.includes("金錢的力量!")) {
    push();
    fill(255, 215, 0, 40 + 30 * sin(frameCount * 0.5)); // 金黃色呼吸閃爍 (稍微調低透明度)
    noStroke();
    rectMode(CORNER);
    rect(0, 0, width, height);
    pop();
  }

  // 特殊效果：當奇怪的同學說 "循環又發生了" 時，畫面出現雜訊
  if (message.includes("循環又發生了") || message.includes("困在程式碼裡")) {
    push();
    // 隨機偏移畫面區塊
    for (let i = 0; i < 8; i++) {
      let x = random(width);
      let y = random(height);
      let w = random(50, 150);
      let h = random(2, 15);
      let shiftX = random(-15, 15);
      let region = get(x, y, w, h);
      image(region, x + shiftX, y);
    }
    // 繪製隨機掃描線
    for (let i = 0; i < 15; i++) {
      stroke(random(150, 255), 100);
      strokeWeight(random(1, 2));
      line(0, random(height), width, random(height));
    }
    pop();
  }

  // NieR:Automata 風格系統對話框 (固定在螢幕底部)
  const boxH = height * 0.25; // 高度約 25%
  const boxW = width * 0.85;  // 寬度約 85%
  const boxX = (width - boxW) / 2; // 水平置中
  const boxY = height - boxH - 20; // 距離底部 20px

  push();
  // 黑色半透明背景
  fill(0, 0, 0, 200); 
  stroke(255); // 白色邊框
  strokeWeight(1);
  rectMode(CENTER);
  rectMode(CORNER);
  rect(boxX, boxY, boxW, boxH);

  // 裝飾線條與標題
  stroke(100);
  line(boxX, boxY + 40, boxX + boxW, boxY + 40);
  noStroke();
  fill(200);
  textSize(20);
  textAlign(LEFT, CENTER);
  text(title, boxX + 20, boxY + 20);

  let textMaxWidth = boxW - 40;
  // 如果有頭像，繪製頭像並調整文字寬度
  if (portrait) {
    const imgSize = boxH - 20; // 頭像大小
    let imgX = boxX + boxW - imgSize - 10; // 靠右對齊
    let imgY = boxY + 10;

    // 特殊效果：當班長說 "金錢的力量!" 時，讓頭像震動
    if (message.includes("金錢的力量!")) {
      imgX += random(-3, 3);
      imgY += random(-3, 3);
    }

    imageMode(CORNER);
    image(portrait, imgX, imgY, imgSize, imgSize);
    textMaxWidth -= (imgSize + 10);
  }

  // 對話內容
  textSize(24);
  textAlign(LEFT, TOP);
  
  let startX = boxX + 20;
  let startY = boxY + 60;
  let currentX = startX;
  let currentY = startY;
  let leading = 30; // 行距

  for (let i = 0; i < displayedDialogText.length; i++) {
    let char = displayedDialogText[i];
    
    // 處理換行符號
    if (char === '\n') {
      currentX = startX;
      currentY += leading;
      continue;
    }

    // 檢查是否為 "金幣" 關鍵字，若是則顯示黃色
    if ((char === '金' && displayedDialogText[i+1] === '幣') || 
        (char === '幣' && displayedDialogText[i-1] === '金')) {
      fill(255, 223, 0); // 金黃色
    } else {
      fill(255); // 白色
    }

    // 新增：處理亂碼佔位符 (\u0001)
    if (char === '\u0001') {
      let glitchStr = generateRandomString(5); // 隨機生成5個字元
      let fixedW = textWidth("WWWWW"); // 使用固定寬度避免後方文字抖動

      if (currentX + fixedW > startX + textMaxWidth) {
        currentX = startX;
        currentY += leading;
      }

      text(glitchStr, currentX, currentY);
      currentX += fixedW;
      continue;
    }

    let charW = textWidth(char);

    // 檢查是否需要換行
    if (currentX + charW > startX + textMaxWidth) {
      currentX = startX;
      currentY += leading;
    }

    text(char, currentX, currentY);
    currentX += charW;
  }

  // 顯示底部閃爍箭頭 (暗示還有下一句)
  if (showArrow) {
    if (frameCount % 60 < 30) { // 每秒閃爍一次
      fill(255);
      noStroke();
      triangle(boxX + boxW - 40, boxY + boxH - 30, boxX + boxW - 20, boxY + boxH - 30, boxX + boxW - 30, boxY + boxH - 15);
    }
  }
  pop();
}

// 顯示角色二對話框 (原本的浮動顯示方法)
function showCharacter2DialogBox(message) {
  let character2ScreenX = getScreenX(character2X);
  const textY = character2Y - 80; // 文字方塊在角色上方
  textSize(20);
  textAlign(CENTER, CENTER);
  fill(255, 255, 255, 200); // 白色半透明背景
  rectMode(CENTER);
  rect(character2ScreenX, textY, textWidth(message) + 30, 40, 5); // 圓角矩形
  fill(0); // 黑色文字
  text(message, character2ScreenX, textY);
}

// --- 像素風繪製輔助函式 (來自使用者範例) ---
function drawDialogueSystem(x, y, name, message) {
  const portraitSize = 120;
  const nameBoxHeight = 40;
  const dialogueWidth = 600;
  const dialogueHeight = 180;
  const padding = 10;

  // 圖層順序：1. 主對話框(背景) → 2. 頭像框(中層) → 3. 頭像圖片(頂層)
  
  // 1. 繪製主對話框 (右側) - 背景圖層
  const dialogueX = x + portraitSize + 5;
  drawPixelBox(dialogueX, y + 20, dialogueWidth, dialogueHeight);

  // 2. 繪製頭像框 - 中層
  drawPixelBox(x, y, portraitSize, portraitSize);

  // 3. 繪製頭像圖片 - 頂層
  if (character1SpeakImage) {
    imageMode(CENTER);
    image(character1SpeakImage, x + portraitSize / 2, y + portraitSize / 2, portraitSize - 10, portraitSize - 10);
  } else {
    fill(0); rect(x + 5, y + 5, portraitSize - 10, portraitSize - 10);
  }

  // 4. 繪製名字框
  drawPixelBox(x, y + portraitSize - 2, portraitSize, nameBoxHeight);
  fill(TEXT_COLOR);
  textAlign(CENTER, CENTER);
  textSize(18);
  textFont('monospace');
  text(name, x + portraitSize / 2, y + portraitSize + nameBoxHeight / 2 - 2);

  // 4. 繪製對話文字
  textAlign(LEFT, TOP);
  fill(TEXT_COLOR);
  text(message, dialogueX + 30, y + 55);

  // 5. 繪製底部閃爍的箭頭
  if (floor(frameCount / 30) % 2 == 0) {
    fill(TEXT_COLOR);
    const centerX = dialogueX + dialogueWidth / 2;
    const bottomY = y + 20 + dialogueHeight - 20;
    triangle(centerX - 8, bottomY, centerX + 8, bottomY, centerX, bottomY + 8);
  }
}

function drawPixelBox(x, y, w, h) {
  push();
  // 外部亮色主邊框
  stroke(UI_COLOR_BORDER);
  strokeWeight(4);
  fill(UI_COLOR_BG);
  rect(x, y, w, h);

  // 內部深色修飾線（增加立體感）
  noFill();
  stroke(UI_COLOR_INNER);
  strokeWeight(2);
  rect(x + 2, y + 2, w - 4, h - 4);
  
  // 模擬像素邊角的四個小點
  noStroke();
  fill(UI_COLOR_BORDER);
  rect(x, y, 2, 2);
  rect(x + w - 2, y, 2, 2);
  rect(x, y + h - 2, 2, 2);
  rect(x + w - 2, y + h - 2, 2, 2);
  pop();
}

// 顯示輸入框
function showInputField() {
  let character2ScreenX = getScreenX(character2X);
  if (!inputFieldVisible) {
    inputField.show();
    inputField.style('position', 'absolute');
    inputField.style('font-size', '16px');
    inputField.style('padding', '5px');
    inputField.style('z-index', '100');
    // 還原為預設樣式 (移除 NieR 風格)
    inputField.style('background', '');
    inputField.style('color', '');
    inputField.style('border', '');
    
    // 輸入框顯示在角色二上方 (還原位置)
    inputField.position(character2ScreenX - inputField.width / 2, character2Y - 100);
    
    inputField.elt.focus(); // 自動聚焦輸入框
    inputFieldVisible = true;
  }
}

// 顯示確認按鈕 (還原為跟隨角色二的白色方框)
function showConfirmButtons(yesText = '是', noText = '否') {
  // 此函數現在只負責繪製選擇按鈕，對話框由 draw() 中的 showDialogBox 處理
  const boxH = height * 0.25;
  const boxW = width * 0.85;
  const boxX = (width - boxW) / 2;
  const boxY = height - boxH - 20;

  const buttonWidth = 120;
  const buttonHeight = 45;
  // 將按鈕定位在主對話框的右上方
  const buttonsY = boxY - buttonHeight - 15;
  const rightEdge = boxX + boxW;

  yesButtonRect = {x: rightEdge - buttonWidth * 2 - 20, y: buttonsY, w: buttonWidth, h: buttonHeight};
  noButtonRect = {x: rightEdge - buttonWidth - 10, y: buttonsY, w: buttonWidth, h: buttonHeight};

  checkHover(yesButtonRect, 'yesBtn');
  checkHover(noButtonRect, 'noBtn');

  // 繪製按鈕 (白色方框風格)
  push();
  rectMode(CENTER); // 改為中心模式方便縮放
  textAlign(CENTER, CENTER);
  textSize(18);
  
  // 處理 "是" 按鈕
  let yesCenterX = yesButtonRect.x + yesButtonRect.w / 2;
  let yesCenterY = yesButtonRect.y + yesButtonRect.h / 2;
  let isYesHover = mouseX > yesButtonRect.x && mouseX < yesButtonRect.x + yesButtonRect.w &&
                   mouseY > yesButtonRect.y && mouseY < yesButtonRect.y + yesButtonRect.h;

  push();
  translate(yesCenterX, yesCenterY);
  if (isYesHover) scale(1.1); // 滑鼠移上去放大 1.1 倍
  fill(255); stroke(0); strokeWeight(2);
  rect(0, 0, yesButtonRect.w, yesButtonRect.h, 5);
  fill(0); noStroke();
  text(yesText, 0, 0);
  pop();
  
  // 處理 "否" 按鈕
  let noCenterX = noButtonRect.x + noButtonRect.w / 2;
  let noCenterY = noButtonRect.y + noButtonRect.h / 2;
  let isNoHover = mouseX > noButtonRect.x && mouseX < noButtonRect.x + noButtonRect.w &&
                  mouseY > noButtonRect.y && mouseY < noButtonRect.y + noButtonRect.h;

  push();
  translate(noCenterX, noCenterY);
  if (isNoHover) scale(1.1); // 滑鼠移上去放大 1.1 倍
  fill(255); stroke(0); strokeWeight(2);
  rect(0, 0, noButtonRect.w, noButtonRect.h, 5);
  fill(0); noStroke();
  text(noText, 0, 0);
  pop();

  pop();

  showChoiceButtons = true;
}

// 顯示商店按鈕 (三個選項)
function showShopButtons() {
  const boxH = height * 0.25;
  const boxW = width * 0.85;
  const boxX = (width - boxW) / 2;
  const boxY = height - boxH - 20;

  const btnW = 200;
  const btnH = 45;
  const gap = 15;
  
  // 定位在對話框右側 (頭像上方)
  const rightEdge = boxX + boxW;
  const buttonX = rightEdge - btnW - 10; // 靠右對齊，留 10px 邊距

  // 垂直向上堆疊
  // 按鈕 3 (最下方)
  const btn3Y = boxY - btnH - 10;
  // 按鈕 2
  const btn2Y = btn3Y - btnH - gap;
  // 按鈕 1 (最上方)
  const btn1Y = btn2Y - btnH - gap;

  shopButton1Rect = {x: buttonX, y: btn1Y, w: btnW, h: btnH};
  shopButton2Rect = {x: buttonX, y: btn2Y, w: btnW, h: btnH};
  shopButton3Rect = {x: buttonX, y: btn3Y, w: btnW, h: btnH};

  checkHover(shopButton1Rect, 'shopBtn1');
  checkHover(shopButton2Rect, 'shopBtn2');
  checkHover(shopButton3Rect, 'shopBtn3');

  push();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(18);
  
  // 按鈕 1
  let btn1CenterX = shopButton1Rect.x + shopButton1Rect.w / 2;
  let btn1CenterY = shopButton1Rect.y + shopButton1Rect.h / 2;
  let isBtn1Hover = mouseX > shopButton1Rect.x && mouseX < shopButton1Rect.x + shopButton1Rect.w &&
                    mouseY > shopButton1Rect.y && mouseY < shopButton1Rect.y + shopButton1Rect.h;
  
  push();
  translate(btn1CenterX, btn1CenterY);
  if (isBtn1Hover) scale(1.1);
  fill(255); stroke(0); strokeWeight(2);
  rect(0, 0, shopButton1Rect.w, shopButton1Rect.h, 5);
  fill(0); noStroke();
  text("我有的是金幣", 0, 0);
  pop();

  // 按鈕 2
  let btn2CenterX = shopButton2Rect.x + shopButton2Rect.w / 2;
  let btn2CenterY = shopButton2Rect.y + shopButton2Rect.h / 2;
  let isBtn2Hover = mouseX > shopButton2Rect.x && mouseX < shopButton2Rect.x + shopButton2Rect.w &&
                    mouseY > shopButton2Rect.y && mouseY < shopButton2Rect.y + shopButton2Rect.h;

  push();
  translate(btn2CenterX, btn2CenterY);
  if (isBtn2Hover) scale(1.1);
  fill(255); stroke(0); strokeWeight(2);
  rect(0, 0, shopButton2Rect.w, shopButton2Rect.h, 5);
  fill(0); noStroke();
  text("我沒這麼多金幣", 0, 0);
  pop();

  // 按鈕 3
  let btn3CenterX = shopButton3Rect.x + shopButton3Rect.w / 2;
  let btn3CenterY = shopButton3Rect.y + shopButton3Rect.h / 2;
  let isBtn3Hover = mouseX > shopButton3Rect.x && mouseX < shopButton3Rect.x + shopButton3Rect.w &&
                    mouseY > shopButton3Rect.y && mouseY < shopButton3Rect.y + shopButton3Rect.h;

  push();
  translate(btn3CenterX, btn3CenterY);
  if (isBtn3Hover) scale(1.1);
  fill(255); stroke(0); strokeWeight(2);
  rect(0, 0, shopButton3Rect.w, shopButton3Rect.h, 5);
  fill(0); noStroke();
  text("你搶金幣啊?", 0, 0);
  pop();

  pop();
}

// 顯示測驗後的互動按鈕
function showPostQuizButtons() {
  const boxH = height * 0.25;
  const boxW = width * 0.85;
  const boxX = (width - boxW) / 2;
  const boxY = height - boxH - 20;

  const btnW = 200;
  const btnH = 45;
  const gap = 15;
  
  const rightEdge = boxX + boxW;
  const buttonX = rightEdge - btnW - 10;

  // 按鈕 1: 沒事 (下方)
  const btn1Y = boxY - btnH - 10; 
  // 按鈕 2: 怎麼獲得金幣? (中間)
  const btn2Y = btn1Y - btnH - gap;
  // 按鈕 3: 我想重新挑戰 (上方)
  const btn3Y = btn2Y - btnH - gap;

  postQuizButton1Rect = {x: buttonX, y: btn1Y, w: btnW, h: btnH};
  postQuizButton2Rect = {x: buttonX, y: btn2Y, w: btnW, h: btnH};
  postQuizButton3Rect = {x: buttonX, y: btn3Y, w: btnW, h: btnH};

  checkHover(postQuizButton1Rect, 'postQuizBtn1');
  checkHover(postQuizButton2Rect, 'postQuizBtn2');
  checkHover(postQuizButton3Rect, 'postQuizBtn3');

  push();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(18);
  
  // 繪製按鈕輔助函式
  function drawBtn(btn, label) {
    let centerX = btn.x + btn.w / 2;
    let centerY = btn.y + btn.h / 2;
    let isHover = mouseX > btn.x && mouseX < btn.x + btn.w && mouseY > btn.y && mouseY < btn.y + btn.h;
    push();
    translate(centerX, centerY);
    if (isHover) scale(1.1);
    fill(255); stroke(0); strokeWeight(2);
    rect(0, 0, btn.w, btn.h, 5);
    fill(0); noStroke(); text(label, 0, 0);
    pop();
  }

  drawBtn(postQuizButton2Rect, "怎麼獲得金幣?");
  drawBtn(postQuizButton3Rect, "我想重新挑戰");
  drawBtn(postQuizButton1Rect, "沒事");

  pop();
}

// 顯示班長後續互動按鈕
function showPostKeyButtons() {
  const boxH = height * 0.25;
  const boxW = width * 0.85;
  const boxX = (width - boxW) / 2;
  const boxY = height - boxH - 20;

  const btnW = 200;
  const btnH = 45;
  const gap = 15;
  
  const rightEdge = boxX + boxW;
  const buttonX = rightEdge - btnW - 10;

  // 按鈕 1: 真相 (上方)
  // 按鈕 2: 什麼也沒有 (下方)
  const btn2Y = boxY - btnH - 10;
  const btn1Y = btn2Y - btnH - gap;

  postKeyButton1Rect = {x: buttonX, y: btn1Y, w: btnW, h: btnH};
  postKeyButton2Rect = {x: buttonX, y: btn2Y, w: btnW, h: btnH};

  checkHover(postKeyButton1Rect, 'postKeyBtn1');
  checkHover(postKeyButton2Rect, 'postKeyBtn2');

  push();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(18);
  
  function drawBtn(btn, label) {
    let centerX = btn.x + btn.w / 2;
    let centerY = btn.y + btn.h / 2;
    let isHover = mouseX > btn.x && mouseX < btn.x + btn.w && mouseY > btn.y && mouseY < btn.y + btn.h;
    push();
    translate(centerX, centerY);
    if (isHover) scale(1.1);
    fill(255); stroke(0); strokeWeight(2);
    rect(0, 0, btn.w, btn.h, 5);
    fill(0); noStroke(); text(label, 0, 0);
    pop();
  }

  drawBtn(postKeyButton1Rect, "真相");
  drawBtn(postKeyButton2Rect, "什麼也沒有");

  pop();
}

// 顯示老師互動按鈕
function showTeacherOptions() {
  const boxH = height * 0.25;
  const boxW = width * 0.85;
  const boxX = (width - boxW) / 2;
  const boxY = height - boxH - 20;

  const btnW = 200;
  const btnH = 45;
  const gap = 15;
  
  const rightEdge = boxX + boxW;
  const buttonX = rightEdge - btnW - 10;

  // 按鈕 3 (最下方)
  const btn3Y = boxY - btnH - 10;
  // 按鈕 2
  const btn2Y = btn3Y - btnH - gap;
  // 按鈕 1 (最上方)
  const btn1Y = btn2Y - btnH - gap;

  teacherOption1Rect = {x: buttonX, y: btn1Y, w: btnW, h: btnH};
  teacherOption2Rect = {x: buttonX, y: btn2Y, w: btnW, h: btnH};
  teacherOption3Rect = {x: buttonX, y: btn3Y, w: btnW, h: btnH};

  checkHover(teacherOption1Rect, 'teacherOpt1');
  checkHover(teacherOption2Rect, 'teacherOpt2');
  checkHover(teacherOption3Rect, 'teacherOpt3');

  push();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(18);
  
  function drawBtn(btn, label) {
    let centerX = btn.x + btn.w / 2;
    let centerY = btn.y + btn.h / 2;
    let isHover = mouseX > btn.x && mouseX < btn.x + btn.w && mouseY > btn.y && mouseY < btn.y + btn.h;
    push();
    translate(centerX, centerY);
    if (isHover) scale(1.1);
    fill(255); stroke(0); strokeWeight(2);
    rect(0, 0, btn.w, btn.h, 5);
    fill(0); noStroke(); text(label, 0, 0);
    pop();
  }

  drawBtn(teacherOption1Rect, "我要去開大門");
  drawBtn(teacherOption2Rect, "鄰居家小狗生了");
  drawBtn(teacherOption3Rect, "趕去教室讀書");

  pop();
}

// --- 觸發獎勵動畫 ---
function triggerRewardAnimation(type) {
  rewardItemType = type;
  rewardAnimationState = 'popup';
  rewardAnimationTimer = millis();
  rewardIconX = width / 2;
  rewardIconY = height / 2;
  rewardIconScale = 0; // 從 0 開始放大

  // 播放獲得物品/成就的音效
  if (isMusicOn && sfxGet) {
    sfxGet.play();
  }
}

// --- 繪製獎勵動畫 ---
function drawRewardAnimation() {
  if (rewardAnimationState === 'none') return;

  let targetX = 50; // 目標位置 (左上角計分板附近)
  let targetY = 80; 

  if (rewardAnimationState === 'popup') {
    let elapsed = millis() - rewardAnimationTimer;
    if (elapsed < 300) {
       // 彈出效果 (Ease Out Back)
       let t = elapsed / 300;
       let s = 1.70158;
       t -= 1;
       rewardIconScale = 4 * (t * t * ((s + 1) * t + s) + 1);
    } else if (elapsed < 2000) {
       // 懸浮呼吸效果
       rewardIconScale = 4 + sin(frameCount * 0.1) * 0.2;
    } else {
       // 切換到飛行狀態
       rewardAnimationState = 'flying';
       rewardFlyStartTime = millis();
    }
    rewardIconX = width / 2;
    rewardIconY = height / 2;

  } else if (rewardAnimationState === 'flying') {
    let flyDuration = 800;
    let elapsed = millis() - rewardFlyStartTime;
    let t = elapsed / flyDuration;
    
    if (t >= 1) {
      rewardAnimationState = 'none';
      return;
    }
    
    // 平滑飛行 (Ease In Out)
    t = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    rewardIconX = lerp(width / 2, targetX, t);
    rewardIconY = lerp(height / 2, targetY, t);
    rewardIconScale = lerp(4, 0.5, t); // 縮小
  }

  push();
  translate(rewardIconX, rewardIconY);
  scale(rewardIconScale);

  // 繪製光暈特效 (僅在彈出階段)
  if (rewardAnimationState === 'popup') {
      noFill();
      for(let i=0; i<3; i++) {
          let size = 40 + (frameCount * 3 + i * 30) % 60;
          let alpha = map(size, 40, 100, 200, 0);
          stroke(255, 255, 200, alpha);
          strokeWeight(2);
          ellipse(0, 0, size, size);
      }
  }

  // 根據類型繪製圖示
  if (rewardItemType === 'key') {
    stroke(255, 215, 0); strokeWeight(2); fill(255, 223, 0);
    rotate(PI / 4);
    rectMode(CENTER);
    rect(0, 0, 10, 10);
    rect(0, 15, 4, 20);
    rect(3, 20, 6, 4);
  } else if (rewardItemType === 'scholar_badge') {
    rectMode(CENTER);
    fill(50, 100, 255); noStroke(); rect(0, -5, 10, 10);
    fill(255, 215, 0); stroke(200, 180, 0); strokeWeight(1); ellipse(0, 5, 18, 18);
    fill(0); noStroke(); textAlign(CENTER, CENTER); textSize(10); text("S", 0, 5);
  } else if (rewardItemType === 'quiz_master') {
    let pulse = (sin(frameCount * 0.2) + 1) / 2;
    noStroke();
    fill(255, 69, 0, 150 + pulse * 50);
    ellipse(0, -2 - pulse * 2, 22 + pulse * 4, 26 + pulse * 6);
    fill(255, 215, 0, 180 + pulse * 20);
    ellipse(0, 1 - pulse, 14 + pulse * 2, 18 + pulse * 3);
    rectMode(CENTER);
    fill(147, 112, 219); noStroke(); rect(0, 0, 16, 16, 3);
    fill(255); textAlign(CENTER, CENTER); textSize(12); text("K", 0, 0);
  } else if (rewardItemType === 'model_student') {
    // 綠色徽章放大版
    fill(34, 139, 34); noStroke();
    ellipse(0, 0, 30, 30);
    fill(255); textAlign(CENTER, CENTER); textSize(14); textStyle(BOLD); text("A+", 0, 0); textStyle(NORMAL);
    fill(34, 139, 34);
    triangle(-5, 12, -10, 25, 0, 15);
    triangle(5, 12, 10, 25, 0, 15);
  } else if (rewardItemType === 'nonsense_master') {
    // 紫色問號圖示
    fill(148, 0, 211); noStroke(); textSize(40); textStyle(BOLD); textAlign(CENTER, CENTER);
    text("?", 0, -5);
    textStyle(NORMAL);
    fill(255); textSize(12); text("胡言亂語", 0, 20);
  }

  pop();
}

// --- 新增：繪製故障特效 ---
function drawGlitchEffect() {
  if (isMusicOn && sfxGlitch && sfxGlitch.isPlaying()) {
    push();
    
    // 1. 畫面錯位切片 (模擬震動/撕裂)
    for (let i = 0; i < 5; i++) {
      let h = random(20, 60);
      let y = random(height);
      let shift = random(-30, 30);
      let strip = get(0, y, width, h);
      image(strip, shift, y);
    }

    // 2. 局部色差偏移 (RGB Split)
    blendMode(ADD);
    for (let i = 0; i < 3; i++) {
      let w = random(200, 500);
      let h = random(50, 200);
      let x = random(width - w);
      let y = random(height - h);
      
      let region = get(x, y, w, h);
      
      // 紅色偏移
      tint(255, 0, 0, 180);
      image(region, x + random(-15, 15), y);
      
      // 藍色偏移
      tint(0, 0, 255, 180);
      image(region, x, y + random(-15, 15));
    }
    blendMode(BLEND);
    noTint();

    // 3. 隨機雜訊線條
    strokeWeight(random(1, 3));
    for (let i = 0; i < 15; i++) {
      stroke(random(255), random(255), random(255), 200);
      let ly = random(height);
      line(0, ly, width, ly);
    }

    pop();
  }
}

function draw() {
  hoveredButtonThisFrame = null; // 重置本幀懸停狀態

  // 如果正在刷新頁面，播放刷新動畫並阻斷其他繪製
  if (isReloading) {
    drawReloadAnimation();
    return;
  }

  // 根據遊戲狀態設定背景
  if (gameState === 'playing' && gameplayBackgroundImage) {
    // --- 有限地圖的背景繪製邏輯 (寬度適應視窗) ---
    // 計算背景圖在保持長寬比的情況下，適應視窗高度後的新寬度
    const bgWidth = gameplayBackgroundImage.width * (height / gameplayBackgroundImage.height);
    worldWidth = bgWidth; // 更新全域變數，確保與背景繪製同步

    // 有限地圖的繪製策略：
    // cameraX = clamp(bgScrollX, 0, worldWidth - screenWidth)
    const cameraX = constrain(bgScrollX, 0, max(0, worldWidth - width));
    // baseX 為世界左邊在螢幕上的位置（以畫面左上為 x=0）
    const baseX = -cameraX;

    // 先繪製一次背景圖
    // 因為使用 imageMode(CENTER)，計算背景中心座標
    const bgCenter = baseX + bgWidth / 2;
    image(gameplayBackgroundImage, bgCenter, height / 2, bgWidth, height);

    // 若畫面右側出現空白（baseX + worldWidth < screenWidth），則補畫右邊一份（最多一次）
    if (baseX + worldWidth < width) {
      const offset = worldWidth; // 向右補一份
      image(gameplayBackgroundImage, bgCenter + offset, height / 2, bgWidth, height);
    }

    // 若畫面左側出現空白（baseX > 0），則補畫左邊一份（最多一次）
    if (baseX > 0) {
      const offset = -worldWidth; // 向左補一份
      image(gameplayBackgroundImage, bgCenter + offset, height / 2, bgWidth, height);
    }

    // --- 特殊劇情特效：大門鎖高亮 ---
    if (!isDoorUnlocked) {
      let lockWorldX = worldWidth - 60 - width / 2 - 190; 
      let lockWorldY = height / 2;
      let lockScreenX = getScreenX(lockWorldX);

      push();
      translate(lockScreenX, lockWorldY);
      // 呼吸燈閃爍效果
      let pulse = (sin(frameCount * 0.15) + 1) / 2; // 0 ~ 1
      let glowSize = 80 + pulse * 40;
      // 繪製光暈
      noStroke();
      fill(255, 255, 0, 100 * (1 - pulse) + 50); // 黃色半透明
      ellipse(0, 0, glowSize, glowSize);
      // 繪製鎖頭圖示
      stroke(255); strokeWeight(3); fill(255, 200, 0); rectMode(CENTER);
      rect(0, 10, 40, 30, 5); // 鎖身
      noFill(); arc(0, -5, 25, 30, PI, 0); // 鎖環
      noStroke(); fill(0); ellipse(0, 10, 8, 8); triangle(0, 10, -3, 20, 3, 20); // 鑰匙孔

      if (!hasKey) { // 還沒有鑰匙
        // 顯示 "需要鑰匙" 提示訊息
        if (millis() - lockMessageTimer < 2000) {
          stroke(255); // 白色外框
          strokeWeight(4); // 外框粗細
          fill(255, 50, 50); // 紅色警示
          textSize(20);
          textAlign(CENTER, BOTTOM);
          text("需要鑰匙", 0, -30);
        }
      } else { // 有鑰匙了，檢查是否靠近門
        const unlockTriggerDist = 200; // 5公分 (約200像素)
        if (abs(characterX - lockWorldX) < unlockTriggerDist) {
          // 繪製 "點擊解鎖" 提示
          fill(255, 255, 150);
          // 檢查鎖頭懸停
          if (dist(mouseX, mouseY, lockScreenX, lockWorldY) < 40) { // 假設鎖頭半徑約40
             hoveredButtonThisFrame = 'lock';
          }
          stroke(0);
          strokeWeight(4);
          textSize(24);
          textAlign(CENTER, BOTTOM);
          text("點擊解鎖", 0, -50);
        }
      }
      pop();
    }
  } else if (backgroundImage) {
    image(backgroundImage, width / 2, height / 2, width, height);
  }

  // --- 遊戲狀態機 ---
  if (gameState === 'ending') {
    if (endingType === 3) {
      if (dialogState === 'end_8_stats') {
        if (endingBackgroundImage) {
          image(endingBackgroundImage, width / 2, height / 2, width, height);
        } else {
          background(0);
        }
      } else if (dialogState === 'end_study_title' || dialogState === 'end_study_thanks') {
        if (endingBackgroundImage) {
          image(endingBackgroundImage, width / 2, height / 2, width, height);
        } else {
          background(0);
        }
      } else {
        background(0);
      }
    } else {
      background(0); // 黑屏
    }
    // 根據不同對話狀態顯示UI
    switch (dialogState) {
      case 'end_1_what':
        showDialogBox("什麼!?", "我", true, character1SpeakImage);
        break;
      case 'end_2_dark':
        showDialogBox("怎麼世界都黑了!", "我", true, character1SpeakImage);
        break;
      case 'end_3_happened':
        showDialogBox("到底出了什麼事", "我", true, character1SpeakImage);
        break;
      case 'end_4_switch':
        showDialogBox("誰又按到燈的開關?", "班長", true, character3SpeakImage);
        break;
      case 'end_5_wire':
        showDialogBox("可能門關太久，一開門撞到電線了...", "學生1", true, character2SpeakImage);
        break;
      case 'end_6_title':
        showDialogBox("結局1：誰關燈了?", "系統");
        break;
      case 'end_7_thanks':
        showDialogBox("感謝遊玩~", "系統");
        break;
      case 'end_truth_1':
        push();
        fill(random(255), random(255), random(255), 100);
        rect(random(width), random(height), random(100, 300), random(10, 50));
        pop();
        showDialogBox("警告：系統崩潰中...", "系統", true);
        break;
      case 'end_truth_2':
        showDialogBox("錯誤代碼：404 真相未找到", "系統", true);
        break;
      case 'end_truth_3':
        showDialogBox("結局2：虛擬的覺醒", "系統");
        break;
      case 'end_truth_4_code':
        push();
        background(0, 0, 180); // 藍屏背景
        fill(255);
        textFont('monospace');
        textSize(20);
        textAlign(LEFT, TOP);
        
        for (let i = 0; i < errorLines.length; i++) {
          text(errorLines[i], 50, codeScrollY + i * 30);
        }
        codeScrollY -= 2; // 向上捲動

        // 隨機雜訊特效
        if (random() < 0.1) {
          filter(INVERT);
        }
        
        // 5秒後強制重置
        if (millis() - finalDialogTimer > 5000) {
          dialogState = 'end_8_stats';
        }
        pop();
        break;
      case 'end_8_stats':
        drawStatsScreen();
        break;
      case 'end_study_title':
        showDialogBox("結局3：全勤好學生", "系統");
        break;
      case 'end_study_thanks':
        showDialogBox("感謝遊玩~", "系統");
        break;
      case 'end_death_1':
        showDialogBox("好痛...", "我", true, character1SpeakImage);
        break;
      case 'end_death_2':
        showDialogBox("意識...越來越模糊了...", "我", true, character1SpeakImage);
        break;
      case 'end_death_3':
        showDialogBox("...", "我", true, character1SpeakImage);
        break;
      case 'end_death_title':
        showDialogBox("結局4：第\u0001  次逃離失敗", "系統");
        break;
      case 'end_join_cycle_anim':
        let animElapsed = millis() - gameEndTime;
        
        if (pausedScreenImage) {
            image(pausedScreenImage, width/2, height/2);
        }
        
        rectMode(CORNER);
        let fadeAlpha = map(animElapsed, 0, 2000, 0, 255);
        fill(0, constrain(fadeAlpha, 0, 255));
        rect(0, 0, width, height);
        
        if (animElapsed > 2000) {
            let eyeAlpha = map(animElapsed, 2000, 3000, 0, 255);
            push();
            translate(width/2, height/2);
            noStroke();
            fill(255, 0, 0, constrain(eyeAlpha - 100, 0, 100)); // Glow
            ellipse(-60, 0, 100, 60);
            ellipse(60, 0, 100, 60);
            fill(200, 0, 0, constrain(eyeAlpha, 0, 255)); // Sclera
            ellipse(-60, 0, 80, 40);
            ellipse(60, 0, 80, 40);
            fill(0, constrain(eyeAlpha, 0, 255)); // Pupil
            ellipse(-60, 0, 10, 35);
            ellipse(60, 0, 10, 35);
            pop();
        }
        
        if (animElapsed > 5000) {
            dialogState = 'end_join_cycle';
        }
        break;
      case 'end_join_cycle':
        showDialogBox("結局5：循環的一部分", "系統");
        push();
        textAlign(CENTER, CENTER);
        textSize(48);
        let glitchStr = "你成為了循環的一部分";
        let cx = width / 2;
        let cy = height / 2;

        // 1. 色差偏移 (RGB Split)
        if (frameCount % 6 < 4) { 
            fill(255, 0, 0);
            text(glitchStr, cx + random(-5, 5), cy + random(-5, 5));
            fill(0, 255, 255);
            text(glitchStr, cx + random(-5, 5), cy + random(-5, 5));
        }

        // 2. 文字內容亂碼與繪製
        fill(255);
        if (random() < 0.1) {
            let gText = glitchStr.split('').map(c => random() < 0.3 ? String.fromCharCode(floor(random(33, 126))) : c).join('');
            text(gText, cx, cy);
        } else {
            text(glitchStr, cx, cy);
        }
        pop();
        break;
    }
    drawGlitchEffect(); // 在結局畫面應用故障特效
    updateHoverSound();
    return; // 結束 draw，不繪製遊戲世界
  }

  if (gameState === 'start') {
    // 繪製標題
    push();
    translate(width / 2, enterGameButtonRect.y - 50);
    
    textSize(65);
    textAlign(CENTER, BOTTOM);
    strokeWeight(5);

    let shakeX = 0;
    let shakeY = 0;
    // 隨機抖動
    if (random() < 0.1) {
      shakeX = random(-5, 5);
      shakeY = random(-5, 5);
    }

    // 幻影/色差效果
    if (random() < 0.15) {
      fill(255, 0, 0, 150);
      noStroke();
      text('逃離學校大作戰', shakeX + random(-5, 5), shakeY + random(-5, 5));
      fill(0, 255, 255, 150);
      noStroke();
      text('逃離學校大作戰', shakeX + random(-5, 5), shakeY + random(-5, 5));
    }

    // 主標題 (帶有閃爍)
    if (random() > 0.05) {
      fill('#FCBB0A');
      stroke('#fffedeff');
      text('逃離學校大作戰', shakeX, shakeY);
    }
    pop();

    // --- 狀態一之二：顯示測驗模式選擇選單 ---
    if (isSelectingQuizMode) {
      // 半透明背景遮罩
      fill(0, 0, 0, 200);
      rectMode(CORNER);
      rect(0, 0, width, height);
      
      textAlign(CENTER, CENTER);
      fill(255);
      textSize(32);
      text("選擇測驗內容", width/2, height/2 - 100);

      // 繪製 "原本 (目前版本)" 按鈕
      checkHover(quizModeOriginalButtonRect, 'quizModeOriginal');
      let isOrgHover = mouseX > quizModeOriginalButtonRect.x && mouseX < quizModeOriginalButtonRect.x + quizModeOriginalButtonRect.w &&
                       mouseY > quizModeOriginalButtonRect.y && mouseY < quizModeOriginalButtonRect.y + quizModeOriginalButtonRect.h;
      drawButton(quizModeOriginalButtonRect, "原本 (目前版本)", isOrgHover, quizMode === 'original');

      // 繪製 "教育科技概論" 按鈕
      checkHover(quizModeEduTechButtonRect, 'quizModeEduTech');
      let isEduHover = mouseX > quizModeEduTechButtonRect.x && mouseX < quizModeEduTechButtonRect.x + quizModeEduTechButtonRect.w &&
                       mouseY > quizModeEduTechButtonRect.y && mouseY < quizModeEduTechButtonRect.y + quizModeEduTechButtonRect.h;
      drawButton(quizModeEduTechButtonRect, "教育科技概論", isEduHover, quizMode === 'edutech');

      // 繪製 "英文" 按鈕
      checkHover(quizModeEnglishButtonRect, 'quizModeEnglish');
      let isEngHover = mouseX > quizModeEnglishButtonRect.x && mouseX < quizModeEnglishButtonRect.x + quizModeEnglishButtonRect.w &&
                       mouseY > quizModeEnglishButtonRect.y && mouseY < quizModeEnglishButtonRect.y + quizModeEnglishButtonRect.h;
      drawButton(quizModeEnglishButtonRect, "英文", isEngHover, quizMode === 'english');

      updateHoverSound();
      return;
    }

    // 狀態一：顯示 "進入遊戲" 按鈕
    checkHover(enterGameButtonRect, 'enterGame');
    checkHover(musicToggleButtonRect, 'musicToggle');

    let enterBtnCenterX = enterGameButtonRect.x + enterGameButtonRect.w / 2;
    let enterBtnCenterY = enterGameButtonRect.y + enterGameButtonRect.h / 2;
    let isEnterHover = mouseX > enterGameButtonRect.x && mouseX < enterGameButtonRect.x + enterGameButtonRect.w &&
                       mouseY > enterGameButtonRect.y && mouseY < enterGameButtonRect.y + enterGameButtonRect.h;

    push();
    translate(enterBtnCenterX, enterBtnCenterY);
    if (isEnterHover) scale(1.1);
    rectMode(CENTER);
    fill(255);
    stroke(0);
    strokeWeight(2);
    rect(0, 0, enterGameButtonRect.w, enterGameButtonRect.h, 10);

    fill(0);
    noStroke();
    textSize(24);
    textAlign(CENTER, CENTER);
    text('進入遊戲', 0, 0);
    pop();

    // 繪製 "測驗內容" 按鈕
    let modeText = "原本";
    if (quizMode === 'edutech') modeText = "教育科技概論";
    else if (quizMode === 'english') modeText = "英文";
    let buttonLabel = "測驗內容: " + modeText;

    // 動態計算按鈕寬度以適應文字
    push();
    textSize(20); // 與 drawButton 內部使用的字體大小一致
    let newWidth = textWidth(buttonLabel) + 40; // 增加左右邊距
    pop();
    quizContentButtonRect.w = newWidth;
    quizContentButtonRect.x = width / 2 - newWidth / 2; // 重新置中

    checkHover(quizContentButtonRect, 'quizContent');
    let isQuizHover = mouseX > quizContentButtonRect.x && mouseX < quizContentButtonRect.x + quizContentButtonRect.w &&
                      mouseY > quizContentButtonRect.y && mouseY < quizContentButtonRect.y + quizContentButtonRect.h;
    drawButton(quizContentButtonRect, buttonLabel, isQuizHover);

    // 繪製音樂開關按鈕
    rectMode(CORNER); // 確保音樂按鈕使用 CORNER 模式
    fill(isMusicOn ? 255 : 200); // 開啟時白色，關閉時灰色
    stroke(0);
    strokeWeight(2);
    rect(musicToggleButtonRect.x, musicToggleButtonRect.y, musicToggleButtonRect.w, musicToggleButtonRect.h, 10);

    fill(0);
    noStroke();
    textSize(24);
    textAlign(CENTER, CENTER);
    // 顯示音符符號或 X
    text(isMusicOn ? '♪' : 'X', musicToggleButtonRect.x + musicToggleButtonRect.w / 2, musicToggleButtonRect.y + musicToggleButtonRect.h / 2);
    
    updateHoverSound();
    return; // 結束 draw 函數，不執行後續遊戲邏輯
  }

  if (gameState === 'instructions') {
    // 狀態二：顯示操作說明
    // 繪製半透明背景
    fill(255, 255, 255, 255 * 0.7); // 70% 透明度的白色
    noStroke();
    rectMode(CENTER);
    rect(width / 2, height / 2, width * 0.6, height * 0.6, 20);

    // 繪製說明文字
    fill(0);
    textSize(22);
    textAlign(CENTER, CENTER);
    const instructions = `
    遊戲操作說明：

    - ← / →：左右移動
    - SHIFT + ← / →：跑步
    - UP_ARROW：跳躍
    - Ctrl+← / →：翻滾
    - SPACE：近身攻擊
    - F：遠距攻擊（若已升級）
    - ENTER：繼續

    靠近NPC可觸發互動！
    暫停遊戲請按「Esc」鍵。
    小提示:互動過的NPC若再靠近會有不同反應哦！
    `;
    text(instructions, width / 2, height / 2);

    // 繪製 "開始遊戲" 按鈕
    checkHover(startGameButtonRect, 'startGame');

    let startBtnCenterX = startGameButtonRect.x + startGameButtonRect.w / 2;
    let startBtnCenterY = startGameButtonRect.y + startGameButtonRect.h / 2;
    let isStartHover = mouseX > startGameButtonRect.x && mouseX < startGameButtonRect.x + startGameButtonRect.w &&
                       mouseY > startGameButtonRect.y && mouseY < startGameButtonRect.y + startGameButtonRect.h;

    push();
    translate(startBtnCenterX, startBtnCenterY);
    if (isStartHover) scale(1.1);
    rectMode(CENTER);
    fill(255);
    stroke(0);
    strokeWeight(2);
    rect(0, 0, startGameButtonRect.w, startGameButtonRect.h, 10);

    fill(0);
    noStroke();
    textSize(24);
    textAlign(CENTER, CENTER);
    text('開始遊戲', 0, 0);
    pop();

    updateHoverSound();
    return;
  }

  // --- 暫停邏輯 ---
  if (isGamePaused && pausedScreenImage) {
    // 1. 繪製凍結的遊戲畫面
    image(pausedScreenImage, width / 2, height / 2);
    
    // 2. 繪製半透明黑色遮罩
    fill(0, 0, 0, 150);
    rectMode(CORNER);
    rect(0, 0, width, height);

    // 繪製按鈕輔助函式
    function drawMenuBtn(btn, label) {
      let isHover = mouseX > btn.x && mouseX < btn.x + btn.w &&
                    mouseY > btn.y && mouseY < btn.y + btn.h;
      rectMode(CORNER);
      if (isHover) { fill(230); stroke(255, 215, 0); } 
      else { fill(255); stroke(0); }
      strokeWeight(2);
      rect(btn.x, btn.y, btn.w, btn.h, 10);
      fill(0); noStroke(); textSize(20);
      text(label, btn.x + btn.w / 2, btn.y + btn.h / 2);
    }

    if (isPausedInstructionsVisible) {
      // --- 繪製暫停時的操作說明 ---
      rectMode(CENTER);
      fill(255, 255, 255, 204); // 80% 不透明度的白格
      noStroke();
      rect(width / 2, height / 2 - 20, width * 0.6, height * 0.6, 20);

      fill(0); // 改為黑色文字以利閱讀
      textSize(22);
      textAlign(CENTER, CENTER);
      const instructions = `
      遊戲操作說明：

      - ← / →：左右移動
      - SHIFT + ← / →：跑步
      - UP_ARROW：跳躍
      - Ctrl+← / →：翻滾
      - SPACE：近身攻擊
      - F：遠距攻擊（若已升級）
      - ENTER：繼續

      靠近NPC可觸發互動！
      暫停遊戲請按「Esc」鍵。
       小提示:互動過的NPC若再靠近會有不同反應哦！
      `;
      text(instructions, width / 2, height / 2 - 20);

      checkHover(backToPauseButtonRect, 'backToPause');
      drawMenuBtn(backToPauseButtonRect, "返回");
      updateHoverSound();
      return;
    }

    // 3. 繪製暫停選單
    rectMode(CENTER);
    fill(255); noStroke(); textSize(32); textAlign(CENTER, CENTER);
    text("遊戲暫停", width / 2, height / 2 - 130);

    drawMenuBtn(resumeButtonRect, "繼續遊戲");
    drawMenuBtn(restartPauseButtonRect, "重新開始");
    drawMenuBtn(instructionsButtonRect, "遊戲操作說明");
    checkHover(resumeButtonRect, 'resume');
    checkHover(restartPauseButtonRect, 'restartPause');
    checkHover(instructionsButtonRect, 'instructions');

    // 繪製音樂開關按鈕 (暫停選單)
    let mBtn = pauseMusicButtonRect;
    let isMHover = mouseX > mBtn.x && mouseX < mBtn.x + mBtn.w &&
                   mouseY > mBtn.y && mouseY < mBtn.y + mBtn.h;
    
    rectMode(CORNER);
    if (isMHover) { stroke(255, 215, 0); } else { stroke(0); }
    strokeWeight(2);
    fill(isMusicOn ? 255 : 200); 
    rect(mBtn.x, mBtn.y, mBtn.w, mBtn.h, 10);
    fill(0); noStroke(); textSize(24); textAlign(CENTER, CENTER);
    text(isMusicOn ? '♪' : 'X', mBtn.x + mBtn.w / 2, mBtn.y + mBtn.h / 2);
    checkHover(pauseMusicButtonRect, 'pauseMusic');

    // 繪製音量滑桿
    // 1. 軌道
    stroke(255); strokeWeight(4);
    line(volumeSliderRect.x, volumeSliderRect.y, volumeSliderRect.x + volumeSliderRect.w, volumeSliderRect.y);
    
    // 2. 控制圓點
    let handleX = map(masterVolume, 0, 1, volumeSliderRect.x, volumeSliderRect.x + volumeSliderRect.w);
    fill(255); stroke(0); strokeWeight(2);
    ellipse(handleX, volumeSliderRect.y, 20, 20);

    // 3. 文字標示
    fill(255); noStroke(); textSize(18); textAlign(LEFT, BOTTOM);
    text(`音量: ${floor(masterVolume * 100)}%`, volumeSliderRect.x, volumeSliderRect.y - 15);

    updateHoverSound();
    return; // 直接結束 draw，不執行後續遊戲邏輯
  }

  // 繪製暫停按鈕 (在遊戲進行中且未暫停時)
  if (gameState === 'playing') {
    fill(255, 200); stroke(0); strokeWeight(2); rectMode(CORNER);
    rect(pauseButtonRect.x, pauseButtonRect.y, pauseButtonRect.w, pauseButtonRect.h, 8);
    fill(0); noStroke(); textAlign(CENTER, CENTER); textSize(20);
    text("||", pauseButtonRect.x + pauseButtonRect.w / 2, pauseButtonRect.y + pauseButtonRect.h / 2);
    checkHover(pauseButtonRect, 'pauseGame');
  }

  // --- 繪製計分板 ---
  push();
  translate(20, 20); // 左上角定位
  
  // 計算任務目標文字與背景高度
  let objectiveText = "";
  let needed = 100 - score;
  let boxHeight = 50;
  let extraHeight = 0;
  if (hasScholarBadge) extraHeight += 30;
  if (hasQuizMasterTitle) extraHeight += 30;
  if (hasModelStudentTitle) extraHeight += 30;
  if (hasNonsenseMasterTitle) extraHeight += 30;
  
  if (hasKey) {
    objectiveText = "目標：前往大門";
    boxHeight = 110 + extraHeight; // 分數 + 鑰匙 + 目標 + (勳章/稱號)
  } else if (showMissionObjective) {
    if (needed > 0) {
      objectiveText = "目標：收集 " + needed + " 金幣";
    } else {
      objectiveText = "目標：去找班長買鑰匙";
    }
    boxHeight = 80 + extraHeight; // 分數 + 目標 + (勳章/稱號)
  } else if (extraHeight > 0) {
    boxHeight = 50 + extraHeight; // 只有分數 + 勳章/稱號
  }

  // 1. 白色背景方框
  rectMode(CORNER);
  fill(255, 255, 255, 220); // 白色半透明
  stroke(0);
  strokeWeight(2);
  rect(0, 0, 230, boxHeight, 10); // 寬度加大以容納文字，高度動態調整

  // 2. 金幣圖示 (繪製一個簡單的金色圓形)
  fill(255, 223, 0); // 金黃色
  stroke(218, 165, 32); // 暗金色邊框
  strokeWeight(2);
  ellipse(30, 25, 30, 30); // 圓心 (30, 25)
  
  // 金幣上的 $ 符號
  fill(218, 165, 32);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(20);
  text("$", 30, 27);

  // 3. 金幣數值文字
  fill(0);
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(24);
  text("金幣: " + score, 55, 25);

  // 4. 繪製鑰匙 (如果有) 與 任務目標
  fill(0); noStroke(); textAlign(LEFT, CENTER); textSize(16);

  let currentY = 55; // 物件起始 Y 座標

  // 繪製學霸勳章
  if (hasScholarBadge) {
    push();
    translate(30, currentY + 10);
    // 繪製勳章圖示
    rectMode(CENTER);
    fill(50, 100, 255); noStroke(); rect(0, -5, 10, 10); // 藍色緞帶
    fill(255, 215, 0); stroke(200, 180, 0); strokeWeight(1); ellipse(0, 5, 18, 18); // 金牌
    fill(0); noStroke(); textAlign(CENTER, CENTER); textSize(10); text("S", 0, 5); // S 代表 Scholar
    
    // 閃爍特效：每隔一段時間在右上角閃爍十字光芒
    if (frameCount % 120 > 100) { 
       push();
       translate(6, 2); // 偏移至金牌右上角
       let s = map(sin(frameCount * 0.4), -1, 1, 0.5, 1.2); // 縮放效果
       scale(s);
       fill(255, 255, 255, 220);
       noStroke();
       // 繪製十字星
       rect(0, 0, 2, 10);
       rect(0, 0, 10, 2);
       pop();
    }
    pop();

    text("學霸勳章", 55, currentY + 10);
    currentY += 30; // 增加 Y 偏移
  }

  // 繪製刷題王稱號
  if (hasQuizMasterTitle) {
    push();
    translate(30, currentY + 10);
    
    // 火焰特效：在圖示後方繪製閃爍的紅/黃光暈
    let pulse = (sin(frameCount * 0.2) + 1) / 2; // 0 ~ 1
    noStroke();
    
    // 外焰 (紅) - 稍微向上偏移模擬燃燒
    fill(255, 69, 0, 150 + pulse * 50);
    ellipse(0, -2 - pulse * 2, 22 + pulse * 4, 26 + pulse * 6);
    
    // 內焰 (黃)
    fill(255, 215, 0, 180 + pulse * 20);
    ellipse(0, 1 - pulse, 14 + pulse * 2, 18 + pulse * 3);

    rectMode(CENTER);
    fill(147, 112, 219); noStroke(); rect(0, 0, 16, 16, 3); // 紫色方塊
    fill(255); textAlign(CENTER, CENTER); textSize(12); text("K", 0, 0); // K 代表 King
    pop();

    text("刷題王", 55, currentY + 10);
    currentY += 30; // 增加 Y 偏移
  }

  // 繪製模範生稱號
  if (hasModelStudentTitle) {
    push();
    translate(30, currentY + 10);
    // 綠色徽章
    fill(34, 139, 34); noStroke(); ellipse(0, 0, 24, 24);
    // 白色 A+
    fill(255); textAlign(CENTER, CENTER); textSize(10); textStyle(BOLD);
    text("A+", 0, 0);
    textStyle(NORMAL);
    pop();

    text("模範生", 55, currentY + 10);
    currentY += 30;
  }

  // 繪製胡言亂語大師稱號
  if (hasNonsenseMasterTitle) {
    push();
    translate(30, currentY + 10);
    // 紫色問號
    fill(148, 0, 211); noStroke(); textSize(20); textStyle(BOLD); textAlign(CENTER, CENTER);
    text("?", 0, 0);
    textStyle(NORMAL);
    pop();

    text("胡言亂語大師", 55, currentY + 10);
    currentY += 30;
  }

  if (hasKey) {
    push();
    translate(30, currentY + 10); // 在金幣/勳章下方
    // 簡單的鑰匙圖案
    stroke(255, 215, 0); strokeWeight(2); fill(255, 223, 0);
    rotate(PI / 4);
    rectMode(CENTER);
    rect(0, 0, 10, 10); // 鑰匙頭
    rect(0, 15, 4, 20); // 鑰匙身
    rect(3, 20, 6, 4); // 齒
    pop();
    
    text("已獲得鑰匙", 55, currentY + 10);
    text(objectiveText, 20, currentY + 35); // 鑰匙下方顯示目標
  } else if (showMissionObjective) {
    text(objectiveText, 20, currentY); // 分數/勳章下方顯示目標
  }
  
  pop();

  // --- 決定角色二的方向 ---
  let direction2 = 1; // 預設向右
  let character2ScreenX = getScreenX(character2X); // 使用新函數取得螢幕座標
  // 角色一的螢幕座標（來源為世界座標）
  const characterScreenX = getScreenX(characterX);
  if (characterScreenX < character2ScreenX) {
    direction2 = -1; // 如果角色一在左邊，角色二就轉向左邊
  }

  // --- 觸發 NPC 對話邏輯 ---
  if (dialogState === 'seeking_npc') {
    const distance = abs(characterX - character2X);
    const triggerDistance = 150;
    if (distance < triggerDistance) {
      isCharacter2Triggered = true; 
      triggerFrameIndex2 = 0;
      // 如果已經回答完所有問題，顯示測驗後的互動
      if (playerName === '530' && !creatorTestedStudent1) {
        currentQuizNpc = 'student1';
        dialogState = 'creator_ask_test';
      } else if (isStudent1QuizCompleted) {
        dialogState = 'post_quiz_greeting';
      } else {
        dialogState = hasProvidedName ? '3_confirmStart' : '1_askName';
      }
    } else if (abs(characterX - character3X) < triggerDistance) {
      // 觸發角色三 (班長)
      if (hasKey) {
        dialogState = 'npc3_post_key_question';
      } else {
        dialogState = 'npc3_1_greeting';
      }
    } else if (abs(characterX - character5X) < triggerDistance) {
      if (playerName === '530' && !creatorTestedStudent2) {
        currentQuizNpc = 'student2';
        dialogState = 'creator_ask_test';
      } else if (isStudent2QuizCompleted) {
        dialogState = 'npc5_completed';
      } else {
        dialogState = 'npc5_1_smile';
      }
    } else if (abs(characterX - character6X) < triggerDistance) {
      if (playerName === '530' && !creatorTestedStudent3) {
        currentQuizNpc = 'student3';
        dialogState = 'creator_ask_test';
      } else if (isStudent3QuizCompleted || (playerName === '530' && creatorTestedStudent3)) {
        if (!hasRangedAttack) {
          dialogState = 'npc6_offer_upgrade';
        } else if (!hasUltimateAttack) {
          dialogState = 'npc6_offer_ultimate';
        } else {
          dialogState = 'npc6_completed';
        }
      } else {
        dialogState = 'npc6_1_homework';
      }
    } else if (abs(characterX - character7X) < triggerDistance) {
      if (teacherBossFightPhase === 'none') {
        dialogState = 'npc7_1_greeting';
      }
    } else if (!isCharacter4Gone && abs(characterX - character4X) < triggerDistance) {
      // 觸發角色四 (奇怪的同學)
      dialogState = 'npc4_1_wait';
    }
  } else if (dialogState === 'cooldown_npc') {
    const dist2 = abs(characterX - character2X);
    const dist3 = abs(characterX - character3X);
    const dist4 = isCharacter4Gone ? 9999 : abs(characterX - character4X); // 如果消失了，視為無限遠
    const dist5 = abs(characterX - character5X); // 新增：計算與學生2的距離
    const dist6 = abs(characterX - character6X); // 新增：計算與小老師的距離
    const dist7 = abs(characterX - character7X); // 新增：計算與老師的距離
    const resetDistance = 200; // 約 5 公分 (1cm ~ 40px)
    
    // 必須遠離所有 NPC 且班長不在追逐或返回中，才能重置互動
    if (dist2 > resetDistance && dist3 > resetDistance && dist4 > resetDistance && dist5 > resetDistance && dist6 > resetDistance && dist7 > resetDistance && !isCharacter3Chasing && !isCharacter3Returning) {
      dialogState = 'seeking_npc'; // 玩家已遠離，可以重新觸發互動
    }
  }

  // 根據不同對話狀態顯示UI
  switch (dialogState) {
    case 'intro_1':
      showDialogBox("這裡是哪裡...", "我", true, character1SpeakImage);
      break;
    case 'intro_2':
      showDialogBox("這裡給我一種陰森的感覺，我得離開這裡...", "我", true, character1SpeakImage);
      break;
    case 'intro_3':
      showDialogBox("前方有人，去問問看好了", "我", true, character1SpeakImage);
      break;
    case '1_askName':
      showDialogBox("你叫什麼名字?", "學生1", true, character2SpeakImage);
      break;
    case '2_inputName':
      showDialogBox("請輸入你的名字", "系統");
      showInputField();
      break;
    case '2_1_greeting':
      showDialogBox(playerName + "?真好聽的名字!", "學生1", true, character2SpeakImage);
      break;
    case '2_2_askLocation':
      showDialogBox("你知道這裡是哪裡嗎?", "我", true, character1SpeakImage);
      break;
    case '2_3_askExit':
      showDialogBox("我要怎麼出去?", "我", true, character1SpeakImage);
      break;
    case '2_4_silence':
      showDialogBox("...", "學生1", true, character2SpeakImage);
      break;
    case '2_5_newcomer':
      showDialogBox("你是...新來的呀!", "學生1", true, character2SpeakImage);
      break;
    case '2_6_explain':
      showDialogBox("這裡是學校!你得回答所有人的問題來賺取金幣，看到左上角的金幣了嗎?", "學生1", true, character2SpeakImage);
      break;
    case '2_7_sawCoin':
      showDialogBox("看到了", "我", true, character1SpeakImage);
      break;
    case '2_8_goal':
      showDialogBox("你得賺夠100金幣!才能找班長買鑰匙，解鎖大門", "學生1", true, character2SpeakImage);
      break;
    case '2_9_understood':
      showDialogBox("原來如此...", "我", true, character1SpeakImage);
      break;
    case '2_10_challenge':
      showDialogBox("既然你是新來的，就先讓我考考你!", "學生1", true, character2SpeakImage);
      break;
    case '3_confirmStart':
      showDialogBox("準備好了嗎？", "學生1", false, character2SpeakImage);
      showConfirmButtons();
      break;
    case '3_1_ready':
      showDialogBox("我準備好了", "我", true, character1SpeakImage);
      break;
    case '3_2_not_ready':
      showDialogBox("我再想想...", "我", true, character1SpeakImage);
      break;
    case '3_3_refused':
      showDialogBox("好吧，下次再來!", "學生1", true, character2SpeakImage);
      break;
    case '7_quiz_end_praise':
      showDialogBox("你真是太厲害了！看到金幣增加了嗎?只要答對一題，可以獲得10金幣!但答錯會扣5金幣!如果是你，一定可以離開這裡...", "學生1", true, character2SpeakImage);
      break;
    case '7_1_quiz_end_resolve':
      showDialogBox("那就出發吧...", "我", true, character1SpeakImage);
      break;
    case 'boundary_left':
      showDialogBox("這裡看起來沒路了...", "我", true, character1SpeakImage);
      break;
    case 'boundary_right':
      showDialogBox("門被鎖住了，似乎要有鑰匙...", "我", true, character1SpeakImage);
      break;
    case 'boundary_quiz_lock':
      showDialogBox("前面好像有空氣牆擋住了，看來得先完成測驗...", "我", true, character1SpeakImage);
      break;
    case 'confirm_unlock':
      showDialogBox("是否解鎖大門?", "系統", false);
      showConfirmButtons();
      break;
    
    // --- 創造者模式測試對話 ---
    case 'creator_ask_test':
      let npcName = "學生1";
      let npcImg = character2SpeakImage;
      if (currentQuizNpc === 'student2') { npcName = "學生2"; npcImg = character5SpeakImage; }
      else if (currentQuizNpc === 'student3') { npcName = "小老師"; npcImg = character6SpeakImage; }
      
      showDialogBox("創造者，請問要測試題目嗎?", npcName, false, npcImg);
      showConfirmButtons("要", "不要");
      break;
    
    // --- 角色三 (班長) 對話流程 ---
    case 'npc3_1_greeting':
      showDialogBox("你就是" + (playerName ? playerName : "新來的") + "吧!", "???", true, character3SpeakImage);
      break;
    case 'npc3_2_who':
      showDialogBox("你是誰!?你怎麼知道", "我", true, character1SpeakImage);
      break;
    case 'npc3_3_iam':
      showDialogBox("我是...", "???", true, character3SpeakImage);
      break;
    case 'npc3_4_titles':
      showDialogBox("班級魔術師、校園小博士、學校守護神、桌椅奇兵、清風使者、彩虹護衛...", "???", true, character3SpeakImage);
      break;
    case 'npc3_5_human':
      showDialogBox("說人話", "我", true, character1SpeakImage);
      break;
    case 'npc3_6_dots':
      showDialogBox("...", "???", true, character3SpeakImage);
      break;
    case 'npc3_7_monitor':
      showDialogBox("我就是班長", "班長", true, character3SpeakImage);
      break;
    case 'npc3_8_offer':
      if (hasScholarBadge) {
        showDialogBox("哇!那是學霸勳章嗎?真不簡單!既然是聰明人，鑰匙算你90金幣就好!", "班長", true, character3SpeakImage);
      } else {
        showDialogBox("聽說你需要鑰匙?那可是需要100金幣!", "班長", true, character3SpeakImage);
      }
      break;
    case 'npc3_9_confirm':
      showDialogBox("你確定要花" + (hasScholarBadge ? 90 : 100) + "金幣買鑰匙嗎?", "班長", false, character3SpeakImage);
      showShopButtons();
      break;
    // 選項結果
    case 'npc3_buy_attempt':
      showDialogBox("我有的是金幣", "我", true, character1SpeakImage);
      break;
    case 'npc3_buy_success':
      showDialogBox("金錢的力量!", "班長", true, character3SpeakImage);
      break;
    case 'npc3_buy_fail':
      showDialogBox("金幣不足! 你還差 " + ((hasScholarBadge ? 90 : 100) - score) + " 金幣", "系統");
      break;
    case 'npc3_refuse_1':
      showDialogBox("我沒這麼多金幣", "我", true, character1SpeakImage);
      break;
    case 'npc3_refuse_2':
      showDialogBox("下次再來吧!", "班長", true, character3SpeakImage);
      break;
    case 'npc3_rude_1':
      showDialogBox("你搶金幣啊?", "我", true, character1SpeakImage);
      break;
    case 'npc3_rude_2':
      showDialogBox("怎麼可以!對班長態度不佳!", "班長", true, character3SpeakImage);
      break;
    case 'npc3_post_key_question':
      showDialogBox("除了鑰匙，你還在尋找什麼?", "班長", false, character3SpeakImage);
      showPostKeyButtons();
      break;
    case 'npc3_truth':
      showDialogBox("真相...往往比謊言更傷人。", "班長", true, character3SpeakImage);
      break;
    case 'npc3_truth_1':
      showDialogBox("你以為拿到鑰匙就能離開嗎？", "班長", true, character3SpeakImage);
      break;
    case 'npc3_truth_2':
      showDialogBox("這扇門只是通往另一個循環的開始。", "班長", true, character3SpeakImage);
      break;
    case 'npc3_truth_3':
      showDialogBox("我們都被困在程式碼裡，一次又一次...", "班長", true, character3SpeakImage);
      break;
    case 'npc3_truth_4':
      showDialogBox("既然你想知道真相，那就讓你看看世界的盡頭吧。", "班長", true, character3SpeakImage);
      break;
    case 'npc3_nothing':
      showDialogBox("那就好，無知也是一種幸福。", "班長", true, character3SpeakImage);
      break;
    
    // --- 新增 NPC (學生2) 對話流程 ---
    case 'npc5_1_smile':
      showDialogBox(":>", "學生2", true, character5SpeakImage);
      break;
    case 'npc5_2_question':
      showDialogBox("?", "我", true, character1SpeakImage);
      break;
    case 'npc5_3_challenge':
      showDialogBox("來吧!考驗時間!!!", "學生2", true, character5SpeakImage);
      break;
    case 'npc5_4_sudden':
      showDialogBox("...真是突然", "我", true, character1SpeakImage);
      break;
    case 'npc5_quiz_end':
      showDialogBox("不錯嘛!", "學生2", true, character5SpeakImage);
      break;
    case 'npc5_quiz_perfect':
      showDialogBox("簡直是天才...", "學生2", true, character5SpeakImage);
      break;
    case 'npc5_quiz_good':
      showDialogBox("唉呦還不錯欸", "學生2", true, character5SpeakImage);
      break;
    case 'npc5_quiz_bad':
      showDialogBox("...呵", "學生2", true, character5SpeakImage);
      break;
    case 'npc5_completed':
      if (hasScholarBadge) {
        showDialogBox("不愧是學霸! 你的智慧令人佩服!", "學生2", true, character5SpeakImage);
      } else {
        showDialogBox("已經考驗過了...", "學生2", true, character5SpeakImage);
      }
      break;

    // --- 新增 NPC (小老師) 對話流程 ---
    case 'npc6_1_homework':
      showDialogBox("你作業交了嗎?", "小老師", true, character6SpeakImage);
      break;
    case 'npc6_2_what':
      showDialogBox("什麼作業?", "我", true, character1SpeakImage);
      break;
    case 'npc6_3_forgot':
      showDialogBox("看來完全忘了...", "小老師", true, character6SpeakImage);
      break;
    case 'npc6_4_supervise':
      showDialogBox("那就只好督促你寫了", "小老師", true, character6SpeakImage);
      break;
    case 'npc6_completed':
      showDialogBox("作業寫得不錯嘛。", "小老師", true, character6SpeakImage);
      break;
    case 'npc6_quiz_perfect':
      showDialogBox("全對！？這才是模範生該有的樣子！", "小老師", true, character6SpeakImage);
      break;
    case 'npc6_offer_upgrade':
      showDialogBox("需要花費10金幣將近身攻擊鍵升級為遠距攻擊嗎?", "小老師", false, character6SpeakImage);
      showConfirmButtons("是", "否");
      break;
    case 'npc6_upgrade_success':
      showDialogBox("升級完成！現在你可以按 F 鍵發射遠距攻擊，空白鍵仍為近身攻擊！", "小老師", true, character6SpeakImage);
      break;
    case 'npc6_offer_ultimate':
      showDialogBox("需要花費20金幣將進化大招攻擊(10秒冷卻，當使用時會使敵方扣15HP並增加我方10HP)嗎?", "小老師", false, character6SpeakImage);
      showConfirmButtons("是", "否");
      break;
    case 'npc6_ultimate_success':
      showDialogBox("大招升級完成！按 向下 鍵釋放！", "小老師", true, character6SpeakImage);
      break;
    case 'npc6_ultimate_fail':
      showDialogBox("你的金幣不足喔，需要20金幣。", "小老師", true, character6SpeakImage);
      break;
    case 'npc6_upgrade_fail':
      showDialogBox("你的金幣不足喔，需要10金幣。", "小老師", true, character6SpeakImage);
      break;
    case 'npc6_upgrade_done':
      // 升級完成後的閒聊
      showDialogBox("好好善用這個力量吧。", "小老師", true, character6SpeakImage);
      break;

    // --- 新增 NPC (老師) 對話流程 --- //
    case 'npc7_1_greeting':
      showDialogBox(playerName + "，這麼急匆匆的，要趕去哪裡?", "老師", false, character7SpeakImage);
      showTeacherOptions();
      break;
    // 選擇"我要去開大門"後的劇情分支
    case 'npc7_2_gate':
      showDialogBox("?", "老師", true, character7SeriousImage);
      break;
    case 'npc7_2_gate_response':
      showDialogBox("開大門嗎?", "老師", true, character7SeriousImage);
      break;
    case 'npc7_2_gate_response_2':
      showDialogBox("...", "我", true, character1SpeakImage);
      break;
    case 'npc7_2_gate_response_3':
      showDialogBox("...", "老師", true, character7SeriousImage);
      break;
    case 'npc7_2_gate_response_4':
      showDialogBox("我是不會讓你離開這裡的。", "老師", true, character7SeriousImage);
      break;
    case 'npc7_3_dog':
      showDialogBox("鄰居家小狗生了!", "我", true, character1SpeakImage);
      break;
    case 'npc7_3_dog_response':
      showDialogBox("?", "老師", true, character7ConfusedImage);
      break;
    case 'npc7_3_dog_response_2':
      showDialogBox("你覺得我信嗎?", "老師", true, character7ConfusedImage);
      break;
    case 'npc7_3_dog_response_3':
      showDialogBox("...", "我", true, character1SpeakImage);
      break;
    case 'npc7_4_study':
      showDialogBox("趕去教室讀書!", "我", true, character1SpeakImage);
      break;
    case 'npc7_4_study_response':
      showDialogBox("正好，我也要去上課!一起走吧~", "老師", true, character7HappyImage);
      break;
    case 'npc7_boss_intro_1':
      showDialogBox("請在60秒內避老師攻擊，並擊倒老師", "系統", true);
      break;
    case 'npc7_boss_intro_2':
      showDialogBox("我看好你･ิ≖ ω ≖･ิ✧", "系統", true);
      break;

    // --- 老師被擊敗後的對話 ---
    case 'npc7_defeated_1':
      showDialogBox("你居然成功擊敗了...", "奇怪的同學", true, character4SpeakImage);
      break;
    case 'npc7_defeated_2':
      showDialogBox("但又如何...", "奇怪的同學", true, character4SpeakImage);
      break;
    case 'npc7_defeated_3':
      showDialogBox("循環會一直存在...", "奇怪的同學", true, character4SpeakImage);
      break;
    case 'npc7_defeated_4':
      showDialogBox("但如果加入我們，也許結局會不一樣", "奇怪的同學", true, character4SpeakImage);
      break;
    case 'npc7_defeated_5':
      showDialogBox("結局?", "我", true, character1SpeakImage);
      break;
    case 'npc7_defeated_6':
      showDialogBox("不!你到底在說什麼?", "我", true, character1SpeakImage);
      break;
    case 'npc7_defeated_7':
      showDialogBox(playerName, "奇怪的同學", true, character4SpeakImage);
      break;
    case 'npc7_defeated_8':
      showDialogBox("你要加入我們嗎?", "奇怪的同學", false, character4SpeakImage);
      showConfirmButtons("加入", "拒絕");
      break;
    case 'npc7_refused_join':
      showDialogBox("好吧...", "奇怪的同學", true, character4SpeakImage);
      break;
    case 'npc7_time_up_1':
      showDialogBox("乖乖回去上課吧!", "老師", true, character7HappyImage);
      break;
    
    // --- 新增 NPC (奇怪的同學) 對話流程 ---
    case 'npc4_1_wait':
      showDialogBox("等一下!", "奇怪的同學", true, character4SpeakImage);
      break;
    case 'npc4_2_who':
      showDialogBox("你是?", "我", true, character1SpeakImage);
      break;
    case 'npc4_3_times':
      showDialogBox("這是第幾次了?", "奇怪的同學", true, character4SpeakImage);
      break;
    case 'npc4_4_what':
      showDialogBox("什麼意思?", "我", true, character1SpeakImage);
      break;
    case 'npc4_5_loop':
      showDialogBox("不....循環又發生了...", "奇怪的同學", true, character4SpeakImage);
      break;
    case 'npc4_6_cycle':
      showDialogBox("循環?", "我", true, character1SpeakImage);
      break;
    case 'npc4_7_what_cycle':
      showDialogBox("什麼循環?", "我", true, character1SpeakImage);
      break;
    case 'npc4_8_find_monitor':
      showDialogBox("不...現在應該先完成任務", "我", true, character1SpeakImage);
      break;
    
    // --- 結局對話 (此處不會被執行，因為 gameState 已變為 'ending') ---
    // 僅為保留完整狀態列表
    case 'end_1_what': break;
    case 'end_2_dark': break;
    case 'end_3_happened': break;
    case 'end_4_switch': break;
    case 'end_5_wire': break;
    case 'end_6_title': break;
    case 'end_7_thanks': break;

    case '4_askQuestion':
      const questionText = currentQuestion.getString('題目');
      if (currentQuizNpc === 'student2') {
        showDialogBox(questionText, "學生2", true, character5SpeakImage);
      } else if (currentQuizNpc === 'student3') {
        showDialogBox(questionText, "小老師", true, character6SpeakImage);
      } else {
        showDialogBox(questionText, "學生1", true, character2SpeakImage);
      }
      break;
    case '5_inputAnswer':
      const qText = currentQuestion.getString('題目');
      if (currentQuizNpc === 'student2') {
        showDialogBox(qText, "學生2", false, character5SpeakImage);
      } else if (currentQuizNpc === 'student3') {
        showDialogBox(qText, "小老師", false, character6SpeakImage);
      } else {
        showDialogBox(qText, "學生1", false, character2SpeakImage);
      }
      showQuizOptions();
      break;
    case 'quiz_fail_1':
      showDialogBox("看到金幣增加後又減少了嗎?只要答對一題，可以獲得10金幣!但答錯會扣5金幣!，不過...也許你該再練習一下!", "學生1", true, character2SpeakImage);
      break;
    case 'quiz_fail_2':
      showDialogBox("...", "我", true, character1SpeakImage);
      break;
    case 'quiz_pass_1':
      showDialogBox("我相信你可以的!", "學生1", true, character2SpeakImage);
      break;
    case 'quiz_pass_2':
      showDialogBox("看到金幣增加了嗎?只要答對一題，可以獲得10金幣!但答錯會扣5金幣!", "學生1", true, character2SpeakImage);
      break;
    case 'quiz_pass_3':
      showDialogBox("前方還有許多挑戰，一定要小心...", "學生1", true, character2SpeakImage);
      break;
    case 'quiz_pass_4':
      showDialogBox("那就出發吧...", "我", true, character1SpeakImage);
      break;
    case 'post_quiz_greeting':
      showDialogBox("怎麼了嗎", "學生1", false, character2SpeakImage);
      showPostQuizButtons();
      break;
    case 'post_quiz_nothing':
      showDialogBox("沒事", "我", true, character1SpeakImage);
      break;
    case 'post_quiz_explain_coins':
      showDialogBox("只要答對一題，可以獲得10金幣!但答錯會扣5金幣!", "學生1", true, character2SpeakImage);
      break;
    case 'post_quiz_retry':
      showDialogBox("沒問題，那就再來一次吧!這次要拿更高分喔!", "學生1", true, character2SpeakImage);
      break;
  }

  // --- 繪製角色二 ---
  if (!charactersVisible) return; // 如果角色不可見，則不繪製

  imageMode(CENTER);
  
  // --- 繪製新增 NPC (角色三) ---
  if (!isCharacter4Gone) {
    if (isCharacter4RunningAway) {
      // 跑步離開邏輯
      character4X += 10 * character4RunDirection; // 支援方向
      
      let screenX = getScreenX(character4X);
      // 檢查是否跑出螢幕外
      let isGone = (character4RunDirection === 1 && screenX > width + 200) || 
                   (character4RunDirection === -1 && screenX < -200);

      if (isGone) {
        isCharacter4Gone = true;
        isCharacter4RunningAway = false;
        
        if (isTeacherDead) {
             // Boss戰後的跑走，不觸發 npc4_6_cycle
             dialogState = 'cooldown_npc'; 
        } else {
             dialogState = 'npc4_6_cycle'; // 觸發角色一的獨白
        }
      }

      let character4ScreenX = getScreenX(character4X);
      let runFrameIndex = floor(frameCount / 5) % runAnimation4.length;
      
      push();
      translate(character4ScreenX, character4Y);
      if (character4RunDirection === -1) scale(-1, 1);
      image(runAnimation4[runFrameIndex], 0, 0);
      pop();
    } else {
      // 待機邏輯
      let character4ScreenX = getScreenX(character4X);
      let direction4 = 1;
      // 讓 NPC 面向玩家
      if (getScreenX(characterX) < character4ScreenX) direction4 = -1;

      let currentFrameIndex4 = floor(frameCount / 6) % standAnimation4.length;
      if (direction4 === -1) {
        push();
        translate(character4ScreenX, character4Y);
        scale(-1, 1);
        image(standAnimation4[currentFrameIndex4], 0, 0);
        pop();
      } else {
        image(standAnimation4[currentFrameIndex4], character4ScreenX, character4Y);
      }
    }
  }

  // --- 繪製新增 NPC (學生2) ---
  {
    let character5ScreenX = getScreenX(character5X);
    let direction5 = 1;
    // 讓 NPC 面向玩家
    if (getScreenX(characterX) < character5ScreenX) direction5 = -1;

    let currentFrameIndex5 = floor(frameCount / 6) % standAnimation5.length;
    if (direction5 === -1) {
      push();
      translate(character5ScreenX, character5Y);
      scale(-1, 1);
      image(standAnimation5[currentFrameIndex5], 0, 0);
      pop();
    } else {
      image(standAnimation5[currentFrameIndex5], character5ScreenX, character5Y);
    }
  }

  // --- 繪製新增 NPC (小老師) ---
  {
    let character6ScreenX = getScreenX(character6X);
    let direction6 = 1;
    // 讓 NPC 面向玩家 (升級動畫時不轉向，保持播放方向)
    if (!isNpc6Upgrading && getScreenX(characterX) < character6ScreenX) direction6 = -1;

    let currentFrame;
    let drawY = character6Y;

    if (isNpc6Upgrading) {
      // 播放升級動畫
      currentFrame = npc6UpgradeAnimation[npc6UpgradeFrameIndex];
      // 升級動畫高度為 128，待機為 96，調整 Y 軸對齊底部
      // 待機中心點 character6Y，圖片高 96 => 底部 = Y + 48
      // 升級圖片高 128 => 中心點應為 底部 - 64 = Y + 48 - 64 = Y - 16
      drawY = character6Y - 16;

      if (frameCount % 6 === 0) {
        npc6UpgradeFrameIndex++;
        if (npc6UpgradeFrameIndex >= npc6UpgradeAnimation.length) {
          isNpc6Upgrading = false; // 動畫結束
          npc6UpgradeFrameIndex = 0;
        }
      }
    } else {
      currentFrame = standAnimation6[floor(frameCount / 6) % standAnimation6.length];
    }

    if (direction6 === -1) {
      push();
      translate(character6ScreenX, drawY);
      scale(-1, 1);
      image(currentFrame, 0, 0);
      pop();
    } else {
      image(currentFrame, character6ScreenX, drawY);
    }
  }

  // --- 繪製新增 NPC (老師) ---
  {
    let character7ScreenX = getScreenX(character7X);

    // 新增：檢查老師是否死亡
    if (teacherHealth <= 0 && !isTeacherDead) {
      isTeacherDead = true;
      teacherDeathFrameIndex = 0;
      isTeacherBossFightActive = false; // 結束 Boss 戰狀態 (隱藏血條等)
      // 清除所有攻擊狀態
      isTeacherAttacking = false;
      isTeacherMediumAttacking = false;
      isTeacherSpecialAttacking = false;
      
      // 1. 鎖定方向 (不隨玩家移動改變)
      teacherDeathDirection = (getScreenX(characterX) < character7ScreenX) ? -1 : 1;

      // 2. 觸發螢幕震動
      screenShakeTimer = millis();
      screenShakeDuration = 1000; // 震動 1 秒

      // 3. 奇怪的同學出現並觸發對話
      isCharacter4Gone = false;
      isCharacter4RunningAway = false;
      character4X = characterX - 150; // 出現在玩家左側附近
      character4Y = groundY;
      dialogState = 'npc7_defeated_1';

      // Boss 戰結束 (勝利)，切換回 2.mp3
      if (isMusicOn) {
        bgmBoss.stop();
        bgmStart.loop();
      }
    }

    if (isTeacherDead) {
      // 播放死亡動畫
      let currentFrame = character7DeathAnimation[teacherDeathFrameIndex];
      // 調整 Y 軸對齊 (待機高 106, 死亡高 75, 底部對齊計算: Y+53 = DrawY+37.5 => DrawY = Y+15.5)
      let drawY = character7Y + 15.5;
      
      // 死亡時固定方向
      let direction7 = teacherDeathDirection;

      if (direction7 === -1) {
        push();
        translate(character7ScreenX, drawY);
        scale(-1, 1);
        image(currentFrame, 0, 0);
        pop();
      } else {
        image(currentFrame, character7ScreenX, drawY);
      }

      // 播放動畫直到最後一幀停止
      if (frameCount % 6 === 0) {
        if (teacherDeathFrameIndex < character7DeathAnimation.length - 1) {
          teacherDeathFrameIndex++;
        }
      }
    } else if (teacherBossFightPhase === 'retreat') {
      // 播放後退動畫
      let retreatSpeed = 8;
      if (character7X < teacherRetreatTargetX) {
        character7X += retreatSpeed;
      } else {
        character7X = teacherRetreatTargetX;
        teacherBossFightPhase = 'fighting'; // 後退結束，進入戰鬥階段
      }
      
      let currentFrameIndex7 = floor(frameCount / 4) % character7RetreatAnimation.length;
      // 後退動畫：面向玩家（左），向右移動
      push();
      // 修正Y軸以對齊腳底 (待機106, 後退102, 差異4, 中心點上移2)
      translate(character7ScreenX, character7Y + 2);
      scale(-1, 1); // 面向左
      image(character7RetreatAnimation[currentFrameIndex7], 0, 0);
      pop();

    } else {
      // 正常待機動畫
      let direction7 = 1;
      
      // --- 老師 Boss 戰 AI 邏輯 (移動與攻擊頻率) ---
      let distToPlayer = abs(characterX - character7X);
      let animSpeed = 4; // 預設動畫速度 (frameCount % 4)

      if (teacherBossFightPhase === 'fighting') {
        // 1. 移動邏輯 (保持距離 / Kiting)
        // 當玩家靠近時，老師會嘗試後退，但限制在戰鬥區域內
        // 戰鬥區域：[teacherFightMinX, teacherRetreatTargetX]
        let arenaMinX = (teacherFightMinX > 0) ? teacherFightMinX : (character3X + 1720);
        let arenaMaxX = teacherRetreatTargetX;

        if (distToPlayer < 320) { // 玩家進入警戒範圍 (8公分 = 320px)
           let moveSpeed = map(distToPlayer, 0, 320, 10, 3); // 距離越近，移動越快
           
           // 瞬移邏輯：隨機觸發 (例如 2% 機率)，且必須在玩家視野內
           if (random(100) < 2) {
             let visibleMin = bgScrollX + 100; // 視野左邊界 + 緩衝
             let visibleMax = bgScrollX + width - 100; // 視野右邊界 - 緩衝
             // 確保瞬移目標在戰鬥區域且在視野內
             let targetMin = max(arenaMinX, visibleMin);
             let targetMax = min(arenaMaxX, visibleMax);
             
             if (targetMin < targetMax) {
               // 記錄舊位置用於特效
               teacherTeleportX = character7X;
               teacherTeleportY = character7Y;
               teacherTeleportTimer = millis();

               character7X = random(targetMin, targetMax);
             }
           } else {
             // 一般移動：往反方向移動
             if (characterX < character7X) character7X += moveSpeed;
             else character7X -= moveSpeed;
           }
           
           // 限制移動範圍 (不能離開剛剛經過的地方)
           character7X = constrain(character7X, arenaMinX, arenaMaxX);
        }

        // 2. 動畫速度調整 (距離越近，動作越快)
        if (distToPlayer < 400) {
          animSpeed = 2; // 加快動畫
        }
      }

      // 在戰鬥階段，老師應該持續面向玩家
      if (teacherBossFightPhase === 'fighting') {
        if (characterX < character7X) direction7 = -1;
        else direction7 = 1;
      } else if (getScreenX(characterX) < character7ScreenX) {
        direction7 = -1;
      }

      // 當老師血量低於 50% 時觸發大招
      if (teacherHealth < 50 && !hasTriggeredSpecialAttack && teacherBossFightPhase === 'fighting') {
          isTeacherSpecialAttacking = true;
          teacherSpecialAttackFrameIndex = 0;
          hasTriggeredSpecialAttack = true;
          isTeacherAttacking = false; // 中斷其他攻擊
          isTeacherMediumAttacking = false;
      }

      // Boss 戰鬥邏輯：隨機攻擊
      if (isTeacherBossFightActive && teacherBossFightPhase === 'fighting' && !isTeacherAttacking && !isTeacherMediumAttacking && !isTeacherSpecialAttacking) {
         // 3. 攻擊觸發邏輯 (距離越近，攻擊頻率越高，大招/中招機率越高)
         let attackChance = map(constrain(distToPlayer, 0, 800), 0, 800, 5, 1.5); // 1.5% ~ 5% 機率
         
         // 新增：瞬移後攻擊機率大幅提升 (瞬移後 1.5 秒內，機率提升至 50%)
         if (teacherTeleportTimer > 0 && millis() - teacherTeleportTimer < 1500) {
            attackChance = 50;
         }

         // 當玩家血量低於 30% (24) 時，降低攻擊頻率，給玩家喘息機會
         if (playerHealth < 24) {
            attackChance *= 0.5; 
         }

         if (random(100) < attackChance) {
           let rand = random(100);
           // 根據距離與血量決定攻擊類型
           let specialChance = (teacherHealth < 50) ? (distToPlayer < 400 ? 40 : 10) : 0; // 血量低且近身時，大招機率高
           let mediumChance = (distToPlayer < 400) ? 40 : 20; // 近身時，中招機率高

           if (rand < specialChance) {
             isTeacherSpecialAttacking = true;
             teacherSpecialAttackFrameIndex = 0;
             hasTeacherFiredSpecialProjectile = false;
           } else if (rand < specialChance + mediumChance) {
             isTeacherMediumAttacking = true;
             teacherMediumAttackFrameIndex = 0;
             hasTeacherFiredMediumProjectile = false;
           } else {
             isTeacherAttacking = true;
             teacherAttackFrameIndex = 0;
             hasTeacherFiredProjectile = false;
           }
         }
      }

      if (isTeacherSpecialAttacking) {
        // 播放大招動畫
        let currentFrame = character7SpecialAttackAnimation[teacherSpecialAttackFrameIndex];
        // 調整 Y 軸對齊 (待機高 106, 大招高 101, 底部對齊計算: Y+53 = DrawY+50.5 => DrawY = Y+2.5)
        let drawY = character7Y + 2.5;

        // 當動畫播放到第 4 張 (index 3) 時發射投擲物
        if (teacherSpecialAttackFrameIndex === 3 && !hasTeacherFiredSpecialProjectile) {
          teacherProjectiles.push({
            x: character7X,
            y: character7Y - 20, // 調整投擲物高度
            startX: character7X,
            direction: direction7,
            frameIndex: 0,
            type: 'special' // 標記為大招投擲物
          });
          hasTeacherFiredSpecialProjectile = true;
        }

        if (direction7 === -1) {
          push();
          translate(character7ScreenX, drawY);
          scale(-1, 1);
          image(currentFrame, 0, 0);
          pop();
        } else {
          image(currentFrame, character7ScreenX, drawY);
        }

        if (frameCount % animSpeed === 0) {
          teacherSpecialAttackFrameIndex++;
        }
        
        if (teacherSpecialAttackFrameIndex >= character7SpecialAttackAnimation.length) {
          isTeacherSpecialAttacking = false;
          teacherSpecialAttackFrameIndex = 0;
          hasTeacherFiredSpecialProjectile = false;
        }
      } else if (isTeacherMediumAttacking) {
        // 播放中攻擊動畫
        let currentFrame = character7MediumAttackAnimation[teacherMediumAttackFrameIndex];
        // 調整 Y 軸對齊 (待機高 106, 中攻擊高 105, 底部對齊計算: Y+53 = DrawY+52.5 => DrawY = Y+0.5)
        let drawY = character7Y + 0.5;

        // 當動畫播放到第 6 張 (index 5) 時發射投擲物
        if (teacherMediumAttackFrameIndex === 5 && !hasTeacherFiredMediumProjectile) {
          teacherProjectiles.push({
            x: character7X,
            y: character7Y - 20, // 調整投擲物高度
            startX: character7X,
            direction: direction7,
            frameIndex: 0,
            type: 'medium' // 標記為中攻擊投擲物
          });
          hasTeacherFiredMediumProjectile = true;
        }

        if (direction7 === -1) {
          push();
          translate(character7ScreenX, drawY);
          scale(-1, 1);
          image(currentFrame, 0, 0);
          pop();
        } else {
          image(currentFrame, character7ScreenX, drawY);
        }

        if (frameCount % animSpeed === 0) {
          teacherMediumAttackFrameIndex++;
        }
        
        if (teacherMediumAttackFrameIndex >= character7MediumAttackAnimation.length) {
          isTeacherMediumAttacking = false;
          teacherMediumAttackFrameIndex = 0;
          hasTeacherFiredMediumProjectile = false;
        }
      } else if (isTeacherAttacking) {
        // 播放攻擊動畫
        let currentFrame = character7AttackAnimation[teacherAttackFrameIndex];
        // 調整 Y 軸對齊 (待機高 106, 攻擊高 118, 差 12, 中心點偏移 6)
        let drawY = character7Y - 6;

        // 當動畫播放到第 7 張 (index 7) 時發射投擲物
        if (teacherAttackFrameIndex === 7 && !hasTeacherFiredProjectile) {
          teacherProjectiles.push({
            x: character7X,
            y: character7Y - 20, // 調整投擲物高度
            startX: character7X,
            direction: direction7,
            frameIndex: 0
          });
          hasTeacherFiredProjectile = true;
        }

        if (direction7 === -1) {
          push();
          translate(character7ScreenX, drawY);
          scale(-1, 1);
          image(currentFrame, 0, 0);
          pop();
        } else {
          image(currentFrame, character7ScreenX, drawY);
        }

        if (frameCount % animSpeed === 0) {
          teacherAttackFrameIndex++;
        }
        
        if (teacherAttackFrameIndex >= character7AttackAnimation.length) {
          isTeacherAttacking = false;
          teacherAttackFrameIndex = 0;
          hasTeacherFiredProjectile = false;
        }
      } else {
        // 待機動畫
        let currentFrameIndex7 = floor(frameCount / 6) % standAnimation7.length;
        if (direction7 === -1) {
          push();
          translate(character7ScreenX, character7Y);
          scale(-1, 1);
          image(standAnimation7[currentFrameIndex7], 0, 0);
          pop();
        } else {
          image(standAnimation7[currentFrameIndex7], character7ScreenX, character7Y);
        }
      }
    }
  }

  // --- 繪製提示貓 ---
  if (isHintCatActive) {
    // 更新位置邏輯
    hintCatTargetX = characterX + 60; // 目標在角色右邊
    
    let distX = hintCatTargetX - hintCatX; // 計算距離與方向

    // 如果距離過遠（例如超過螢幕寬度），直接瞬移到目標位置
    if (abs(distX) > width) {
      hintCatTeleportTimer = millis(); // 啟動特效計時
      hintCatTeleportX = hintCatTargetX; // 記錄特效位置
      hintCatTeleportY = hintCatY;
      hintCatX = hintCatTargetX;
      distX = 0;
    }

    let moveSpeed = 6; // 固定速度，讓奔跑動畫看起來自然，不用刻意追上主角

    if (abs(distX) > 5) {
      isHintCatRunning = true;
      hintCatX += Math.sign(distX) * moveSpeed;
    } else {
      isHintCatRunning = false;
      hintCatX = hintCatTargetX;
    }

    let hintCatScreenX = getScreenX(hintCatX);
    let anim = isHintCatRunning ? hintCatRunAnimation : hintCatStandAnimation;
    
    // 檢測狀態切換，重置動畫
    if (isHintCatRunning !== lastHintCatRunningState) {
      hintCatFrameIndex = 0;
      hintCatAnimCounter = 0;
      lastHintCatRunningState = isHintCatRunning;
    }

    // 設定提示貓動畫幀數與速度（使用可變速度倍率 hintCatAnimSpeed）
    let frameCountDiv = 6; // 預設待機
    let currentAnimSpeed = 1; // 預設速度
    if (isHintCatRunning) {
      frameCountDiv = HINT_CAT_RUN_FRAME_DIV; // 使用設定的慢跑幀數，呈現陪伴感
      currentAnimSpeed = hintCatAnimSpeed; // 使用可變速度倍率
    }

    // 使用自定義計數器驅動動畫，避免 frameCount 造成的相位跳動
    // animCounter 以 speed 倍率累加，當累積超過 divisor 時推進一幀，並保留餘數保持平滑
    hintCatAnimCounter += currentAnimSpeed;
    if (hintCatAnimCounter >= frameCountDiv) {
      hintCatFrameIndex++;
      hintCatAnimCounter -= frameCountDiv; // 保留小數部分以維持流暢度
    }
    hintCatFrameIndex %= anim.length;

    push();
    // 使用 Math.round 對齊整數像素，避免子像素抖動 (Jitter)
    translate(Math.round(hintCatScreenX), Math.round(hintCatY));
    
    // 決定面向方向
    let faceDir = direction; // 預設與角色一方向一致 (跟隨時)

    // 若距離較遠且正在跑步 (例如剛出現時)，則面向移動方向 (面向角色)
    if (isHintCatRunning && abs(distX) > 100) {
      faceDir = (distX >= 0) ? 1 : -1;
    }

    // 處理面向方向 (原始素材面朝右)
    if (faceDir === -1) {
      scale(-1, 1); // 面向左
    } else {
      scale(1, 1); // 面向右
    }
    
    image(anim[hintCatFrameIndex], 0, 0);
    pop();

    // --- 繪製瞬移特效 (煙霧/閃光) ---
    if (millis() - hintCatTeleportTimer < 500) {
      push();
      let effectScreenX = getScreenX(hintCatTeleportX);
      translate(effectScreenX, hintCatTeleportY);
      noStroke();
      let t = (millis() - hintCatTeleportTimer) / 500.0; // 0.0 ~ 1.0 進度
      
      // 中心閃光/白煙
      fill(255, 255, 255, 200 * (1 - t));
      ellipse(0, 0, 60 * t + 20, 60 * t + 20);
      
      // 周圍煙霧粒子
      fill(240, 240, 240, 150 * (1 - t));
      for (let i = 0; i < 8; i++) {
        let angle = TWO_PI * i / 8;
        let dist = 30 * t + 10;
        let size = 15 * (1 - t);
        ellipse(cos(angle) * dist, sin(angle) * dist, size, size);
      }
      pop();
    }

    // 繪製提示氣泡 (當貓停下來時顯示)
    if (!isHintCatRunning && currentHintText !== '') {
      // 檢查計時器，超過 3 秒則隱藏氣泡
      if (millis() - hintBubbleTimer > 3000) {
        currentHintText = '';
      } else {
        push();
        textSize(16);
        let bubbleW = textWidth(currentHintText) + 24;
        let bubbleH = 35;
        fill(255, 255, 255, 230);
        stroke(0);
        strokeWeight(1);
        rectMode(CENTER);
        rect(Math.round(hintCatScreenX), Math.round(hintCatY) - 80, bubbleW, bubbleH, 8);
        fill(0);
        noStroke();
        textAlign(CENTER, CENTER);
        text(currentHintText, Math.round(hintCatScreenX), Math.round(hintCatY) - 80);
        pop();
      }
    }
  }

  // --- 繪製角色三 (NPC2) ---
  // 角色三行為邏輯 (追逐與返回)
  if (isCharacter3Chasing) {
    if (millis() - character3ChaseTimer < 5000) {
      // 追逐玩家 (保持一點距離)
      if (characterX < character3X - 60) {
        character3X -= character3Speed;
      } else if (characterX > character3X + 60) {
        character3X += character3Speed;
      }
    } else {
      // 時間到，停止追逐，開始返回
      isCharacter3Chasing = false;
      isCharacter3Returning = true;
      isCharacter3Angry = false; // 停止攻擊動畫
    }
  } else if (isCharacter3Returning) {
    // 返回原位
    let dist = character3X - character3OriginalX;
    if (abs(dist) > character3Speed) {
      character3X -= Math.sign(dist) * character3Speed;
    } else {
      character3X = character3OriginalX;
      isCharacter3Returning = false;
    }
  }

  let character3ScreenX = getScreenX(character3X);
  let direction3 = 1;
  // 讓角色三面向玩家 (若在返回中則面向原點)
  if (isCharacter3Returning) {
    if (character3OriginalX < character3X) direction3 = -1;
  } else if (getScreenX(characterX) < character3ScreenX) direction3 = -1;
  
  if (isCharacter3Angry) {
    // 播放生氣攻擊動畫
    let currentFrame = angryAnimation3[angryFrameIndex3];
    // 調整 Y 座標以對齊腳底 (高度差修正: 98 - 63 = 35, 中心點偏移約 17.5)
    let drawY = character3Y - 17;

    if (direction3 === -1) {
      push();
      translate(character3ScreenX, drawY);
      scale(-1, 1);
      image(currentFrame, 0, 0);
      pop();
    } else {
      image(currentFrame, character3ScreenX, drawY);
    }

    if (frameCount % 4 === 0) { // 控制動畫速度
      angryFrameIndex3++;
    }
    if (angryFrameIndex3 >= angryAnimation3.length) {
      if (isCharacter3Chasing) {
        angryFrameIndex3 = 0; // 追逐中循環播放
      } else {
        isCharacter3Angry = false;
        angryFrameIndex3 = 0;
      }
    }
  } else {
    let currentFrameIndex3 = floor(frameCount / 6) % standAnimation3.length;
    if (direction3 === -1) {
      push();
      translate(character3ScreenX, character3Y);
      scale(-1, 1);
      image(standAnimation3[currentFrameIndex3], 0, 0);
      pop();
    } else {
      image(standAnimation3[currentFrameIndex3], character3ScreenX, character3Y);
    }
  }

  if (isCharacter2Dancing) {
    // 播放跳舞動畫 (最高優先級)
    let frameToShow = danceAnimation2[danceFrameIndex2];

    // 動畫播放完畢後，進入暫停階段
    if (danceFrameIndex2 >= danceAnimation2.length) {
      frameToShow = danceAnimation2[danceAnimation2.length - 1]; // 顯示最後一幀      
      if (dancePauseTimer === -1) {
        dancePauseTimer = millis(); // 啟動暫停計時器
      }
    }

    if (direction2 === -1) {
      push();
      translate(character2ScreenX, character2Y);
      scale(-1, 1);
      image(frameToShow, 0, 0);
      pop();
    } else {
      image(frameToShow, character2ScreenX, character2Y);
    }

    if (frameCount % 6 === 0 && danceFrameIndex2 < danceAnimation2.length) { // 控制跳舞動畫速度
      danceFrameIndex2++;
    }

    // 檢查暫停時間是否結束
    if (dancePauseTimer !== -1 && millis() - dancePauseTimer > 500) {
      isCharacter2Dancing = false;
      danceFrameIndex2 = 0;
      dancePauseTimer = -1;
      dialogState = '7_quiz_end_praise'; // 進入高分獎勵對話
    }
  } else if (isCharacter2Electrocuted) {
    // 播放電擊動畫 (最高優先級)
    if (direction2 === -1) {
      push();
      translate(character2ScreenX, character2Y);
      scale(-1, 1);
      image(electrocutionAnimation2[electrocutionFrameIndex2], 0, 0);
      pop();
    } else {
      image(electrocutionAnimation2[electrocutionFrameIndex2], character2ScreenX, character2Y);
    }
    if (frameCount % 6 === 0) { // 控制電擊動畫速度
      electrocutionFrameIndex2++;
    }
    // 動畫播放完畢後，顯示最終分數
    if (electrocutionFrameIndex2 >= electrocutionAnimation2.length) {
      isCharacter2Electrocuted = false;
      electrocutionFrameIndex2 = 0;
      // 動畫結束後，進入顯示分數的狀態
      dialogState = '6_showFeedback';
      finalDialogTimer = millis();
    }
  } else if (isCharacter2Hit) {
    // 播放被攻擊動畫
    if (direction2 === -1) {
      push();
      translate(character2ScreenX, character2Y);
      scale(-1, 1);
      image(hitAnimation2[hitFrameIndex2], 0, 0);
      pop();
    } else {
      image(hitAnimation2[hitFrameIndex2], character2ScreenX, character2Y);
    }
    if (frameCount % 4 === 0) { // 控制被攻擊動畫速度
      hitFrameIndex2++;
    }
    // 動畫播放完畢後，進入停止狀態
    if (hitFrameIndex2 >= hitAnimation2.length) {
      isCharacter2Hit = false;
      hitFrameIndex2 = 0;
      character2HitTimer = millis(); // 記錄被攻擊結束的時間
      isCharacter2Triggered = false; // 禁用觸發動畫
    }
  } else if (millis() - character2HitTimer < 3000 && character2HitTimer !== -1) {
    // 被攻擊後停止3秒，顯示被攻擊動畫的第22幀（索引21）作為受傷姿態
    const injuredFrame = 22; // 第22幀對應索引21
    if (direction2 === -1) {
      push();
      translate(character2ScreenX, character2Y);
      scale(-1, 1);
      image(hitAnimation2[injuredFrame], 0, 0);
      pop();
    } else {
      image(hitAnimation2[injuredFrame], character2ScreenX, character2Y);
    }
  } else if (character2HitTimer !== -1) {
    // 3秒後重置計時器
    character2HitTimer = -1;
  } else if (isCharacter2Triggered) {
    // 播放觸發動畫
    if (direction2 === -1) {
      push();
      translate(character2ScreenX, character2Y);
      scale(-1, 1);
      image(triggerAnimation2[triggerFrameIndex2], 0, 0);
      pop();
    } else {
      image(triggerAnimation2[triggerFrameIndex2], character2ScreenX, character2Y);
    }

    if (frameCount % 6 === 0) { // 控制觸發動畫速度
      triggerFrameIndex2++;
    }
    // 動畫播放完畢後，恢復待機狀態
    if (triggerFrameIndex2 >= triggerAnimation2.length) {
      isCharacter2Triggered = false;
    }
  } else {
    // 播放待機動畫，並根據方向翻轉
    currentFrameIndex2 = floor(frameCount / 6) % standAnimation2.length;
    if (direction2 === -1) {
      push();
      translate(character2ScreenX, character2Y);
      scale(-1, 1);
      image(standAnimation2[currentFrameIndex2], 0, 0);
      pop();
    } else {
      image(standAnimation2[currentFrameIndex2], character2ScreenX, character2Y);
    }
  }

  if (dialogState === '6_showFeedback') {
    showDialogBox(dialogMessage);

    // 檢查計時器是否超過2秒
    if (millis() - finalDialogTimer > 2000) {
      dialogMessage = '';
      dialogState = 'cooldown_npc'; // 改為冷卻狀態，讓玩家遠離後可重新觸發
    }
  }

  // 設定圖片的繪製模式為中心對齊
  imageMode(CENTER);

  // --- 角色一大招動畫邏輯 (最高優先級) ---
  if (isUltimateAttacking) {
    let currentFrame = char1UltimateAnimation[ultimateFrameIndex];
    // 調整 Y 軸對齊 (標準高 88, 大招高 176, 差 88, 中心點偏移 44)
    let drawY = characterY - 44;
    let screenX = getScreenX(characterX);

    // 播放到第 9 張 (index 8) 時觸發地面武器效果
    if (ultimateFrameIndex === 8) {
      // 1. 顯示地面武器 (0.png)
      // 0.5公分約 20px
      let weaponX = characterX + (direction * 20);
      let weaponScreenX = getScreenX(weaponX);
      let weaponY = characterY - 11.5; // 調整高度對齊地面
      
      push();
      translate(weaponScreenX, weaponY);
      if (direction === -1) scale(-1, 1);
      image(char1UltimateWeapon0, 0, 0);
      pop();
    }

    // 2. 天空隨機降下武器 (像下雨一樣迅速降落)
    // 在動畫播放期間持續生成 (例如 index 2 到 16)
    if (ultimateFrameIndex >= 2 && ultimateFrameIndex <= 16) {
       // 每一幀都生成，製造密集感
       let spawnRate = 3; // 每幀生成數量
       for(let i=0; i<spawnRate; i++) {
          let dropX = characterX + random(-600, 600); // 範圍
          let dropImg = random([char1UltimateWeapon1, char1UltimateWeapon2, char1UltimateWeapon3]);
          ultimateProjectiles.push({
            x: dropX,
            y: -100 - random(0, 500), // 隨機高度，讓降落有層次感
            img: dropImg,
            speed: random(30, 60) // 高速降落
          });
       }
    }

    if (direction === -1) {
      push();
      translate(screenX, drawY);
      scale(-1, 1);
      image(currentFrame, 0, 0);
      pop();
    } else {
      image(currentFrame, screenX, drawY);
    }

    if (frameCount % 3 === 0) {
      ultimateFrameIndex++;
    }

    if (ultimateFrameIndex >= char1UltimateAnimation.length) {
      isUltimateAttacking = false;
      ultimateFrameIndex = 0;
    }

    // 處理大招投射物
    for (let i = ultimateProjectiles.length - 1; i >= 0; i--) {
      let p = ultimateProjectiles[i];
      p.y += p.speed;
      
      let pScreenX = getScreenX(p.x);
      image(p.img, pScreenX, p.y);

      // 碰撞檢測：消除敵人投射物
      for (let j = teacherProjectiles.length - 1; j >= 0; j--) {
        let tp = teacherProjectiles[j];
        if (dist(p.x, p.y, tp.x, tp.y) < 50) {
          teacherProjectiles.splice(j, 1); // 消除敵人投射物
        }
      }

      // 碰撞檢測：傷害敵人 (老師)
      if (isTeacherBossFightActive && abs(p.x - character7X) < 60 && abs(p.y - character7Y) < 80) {
         if (!ultimateHasDamagedBoss) {
           teacherHealth = max(0, teacherHealth - 15); // 扣 15 血
           ultimateHasDamagedBoss = true; // 標記已造成傷害
         }
         ultimateProjectiles.splice(i, 1); // 擊中後消失
         continue;
      }

      if (p.y > height) ultimateProjectiles.splice(i, 1); // 超出螢幕移除
    }
    return; // 大招期間不執行其他動作
  }

  // --- 攻擊動畫邏輯 (最高優先級) ---
  if (isAttacking) {
    // 角色一的螢幕座標（來源為世界座標）
    const characterScreenX = getScreenX(characterX);
    // --- 攻擊碰撞檢測 ---
    const attackRange = 120; // 角色一的攻擊範圍
    // 在攻擊動畫的特定影格檢查碰撞 (例如第5到10幀)
    // 修正：只有在近身攻擊時才進行近身碰撞檢測
    if (lastAnimationType === 'attack') {
      if (currentFrameIndex >= 5 && currentFrameIndex <= 10) {
        if (direction === 1 && character2ScreenX > characterScreenX && character2ScreenX < characterScreenX + attackRange) {
          isCharacter2Hit = true;
          hitFrameIndex2 = 0; // 重置被攻擊動畫
        } else if (direction === -1 && character2ScreenX < characterScreenX && character2ScreenX > characterScreenX - attackRange) {
          isCharacter2Hit = true;
          hitFrameIndex2 = 0; // 重置被攻擊動畫
        }

        // 新增：檢查是否擊中老師 (Boss戰) - 近身攻擊
        if (isTeacherBossFightActive && currentFrameIndex === 6 && frameCount % 3 === 0) {
           let character7ScreenX = getScreenX(character7X);
           if ((direction === 1 && character7ScreenX > characterScreenX && character7ScreenX < characterScreenX + attackRange) ||
               (direction === -1 && character7ScreenX < characterScreenX && character7ScreenX > characterScreenX - attackRange)) {
               teacherHealth = max(0, teacherHealth - 10); // 近身攻擊扣 10 HP
           }
        }
      }
    }

    // 根據角色方向繪製攻擊動畫
    if (direction === -1) {
      push();
      translate(characterScreenX, characterY);
      scale(-1, 1);
      if (lastAnimationType === 'rangedAttack') {
        image(char1RangedAttackAnimation[currentFrameIndex], 0, 0);
      } else {
        image(attackAnimation[currentFrameIndex], 0, 0);
      }
      pop();
    } else {
      if (lastAnimationType === 'rangedAttack') {
        image(char1RangedAttackAnimation[currentFrameIndex], characterScreenX, characterY);
      } else {
        image(attackAnimation[currentFrameIndex], characterScreenX, characterY);
      }
    }

    // 每 3 個繪圖幀更新一次攻擊動畫的畫格
    if (frameCount % 3 === 0) {
      currentFrameIndex++;
    }

    // 如果動畫播放完畢，結束攻擊狀態
    let animLength = (lastAnimationType === 'rangedAttack') ? char1RangedAttackAnimation.length : attackAnimation.length;
    if (currentFrameIndex >= animLength) {
      isAttacking = false;
    }
    return; // 正在攻擊時，不執行後續的移動和待機邏輯
  }

  // --- 跳躍物理計算 ---
  if (isJumping) {
    velocityY += gravity; // 施加重力
    characterY += velocityY; // 更新Y座標

    // 如果角色落地
    if (characterY >= groundY) {
      characterY = groundY; // 將Y座標固定在地面上
      velocityY = 0;
      isJumping = false; // 結束跳躍狀態
    }
  }

  // 根據按鍵更新角色X座標
  // 當角色不在跳躍時，才能左右移動
  
  // 判斷是否正在顯示對話框 (除了 none, seeking_npc, completed 之外的狀態)
  const isDialogActive = dialogState !== 'none' && dialogState !== 'seeking_npc' && dialogState !== 'completed' && dialogState !== 'cooldown_npc';
  // --- 邊界彈回物理處理 (優先於手動或自動移動) ---
  if (isBoundaryBouncing) {
    characterX += boundaryBounceVel;
    boundaryBounceVel *= 0.7; // 阻尼
    direction = boundaryBounceVel > 0 ? 1 : -1;
    // 結束條件：速度極小
    if (abs(boundaryBounceVel) < 0.3) {
      isBoundaryBouncing = false;
      boundaryBounceVel = 0;
      lastAnimationType = 'stand';
    }
  } else if (isAutoWalking) {
    if (characterX < autoWalkTargetX) {
      // 自動向右走
      characterX += speed;
      direction = 1;
    } else {
      // 到達目標，停止自動走路
      isAutoWalking = false;
    }
  } else if (!isJumping && !isAttacking && !isUltimateAttacking && !isDialogActive) {
    // 玩家手動控制
    if (keyIsDown(CONTROL) && keyIsDown(RIGHT_ARROW)) { 
      direction = 1; // 角色朝右（快速移動）
      characterX += speed * 2;
    } else if (keyIsDown(CONTROL) && keyIsDown(LEFT_ARROW)) {
      direction = -1; // 角���朝左（快速移動）
      characterX -= speed * 2;
    } else if (keyIsDown(SHIFT) && keyIsDown(RIGHT_ARROW)) {
      direction = 1; // 角色朝右（跑步）
      characterX += speed * 1.6;
    } else if (keyIsDown(SHIFT) && keyIsDown(LEFT_ARROW)) {
      direction = -1; // 角色朝左（跑步）
      characterX -= speed * 1.6;
    } else if (keyIsDown(RIGHT_ARROW)) {
      direction = 1; // 角色朝右（走路）
      characterX += speed;
    } else if (keyIsDown(LEFT_ARROW)) {
      direction = -1; // 角色朝左（走路）
      characterX -= speed;
    }
  }

  // --- 邊界檢查與對話觸發 ---
  if (gameState === 'playing' && worldWidth > 0) {
    // 新增：Boss 戰期間限制玩家移動範圍
    if (isTeacherBossFightActive) {
      if (characterX < teacherFightMinX) characterX = teacherFightMinX;
      if (characterX > teacherRetreatTargetX) characterX = teacherRetreatTargetX;
    }

    if (characterX < 0) {
      // 鎖定在邊界位置，啟動彈回效果（向右）
      characterX = 0;
      if (!isBoundaryBouncing && millis() - boundaryCooldown > 700) {
        isBoundaryBouncing = true;
        boundaryBounceVel = 6; // 初始彈回速度，可微調
        direction = 1;
        lastAnimationType = 'walkRight';
        dialogState = 'boundary_left';
        boundaryCooldown = millis();
      }
    } else {
      // 右邊界檢查 (包含測驗未完成的限制)
      let rightLimit = worldWidth;
      let isQuizLocked = false;

      if (!isStudent1QuizCompleted) {
        // 如果未完成學生1測驗，限制在學生1位置後方約 5 公分 (200像素)
        let quizLimit = character2X + 200;
        if (quizLimit < rightLimit) {
          rightLimit = quizLimit;
          isQuizLocked = true;
        }
      }

      // 如果未完成學生2測驗，限制在學生2位置後方約 5 公分 (200像素)
      if (!isStudent2QuizCompleted) {
        let quizLimit2 = character5X + 200;
        if (quizLimit2 < rightLimit) {
          rightLimit = quizLimit2;
          isQuizLocked = true;
        }
      }

      if (characterX > rightLimit) {
        characterX = rightLimit;
        if (!isBoundaryBouncing && millis() - boundaryCooldown > 700) {
          isBoundaryBouncing = true;
          boundaryBounceVel = -6; // 向左彈回
          direction = -1;
          lastAnimationType = 'walkLeft';
          dialogState = isQuizLocked ? 'boundary_quiz_lock' : 'boundary_right';
          boundaryCooldown = millis();
        }
      }
    }
  }

  // --- 攝影機跟隨角色（將角色世界座標對齊至畫面中間） ---
  // 將此邏輯移出，使其在自動走路和手動走路時都能作用
  if (worldWidth > 0) {
    let targetCamX = characterX - width / 2;

    // 特殊劇情運鏡：展示大門（畫面最右邊）
    if (dialogState === '2_8_goal') {
      targetCamX = worldWidth - width;
      bgScrollX = lerp(bgScrollX, targetCamX, 0.05);
    } else if (dialogState === 'boss_tutorial') {
      // Boss戰教學階段：鏡頭跟隨老師
      targetCamX = character7X - width / 2;
      bgScrollX = lerp(bgScrollX, targetCamX, 0.05);
    } else {
      bgScrollX = targetCamX;
    }

    // 螢幕震動效果 (Screen Shake)
    if (millis() - screenShakeTimer < screenShakeDuration) {
      bgScrollX += random(-15, 15); // 水平震動
    }
    
    bgScrollX = constrain(bgScrollX, 0, worldWidth - width);
  }

  // --- 繪製角色一動畫 ---
  if (!charactersVisible) return; // 如果角色不可見，則不繪製

  let animationDrawn = false; // 標記是否已繪製過動畫

  // 檢查方向鍵
  if (isAutoWalking) {
    lastAnimationType = 'walkRight';
  } else if (!isDialogActive && keyIsDown(CONTROL) && keyIsDown(RIGHT_ARROW)) {
    if (isJumping) { 
      // 如果在跳躍中，優先顯示跳躍動畫
      currentFrameIndex = min(floor(jumpAnimation.length * 0.75), jumpAnimation.length - 1); // 跳躍中途的幀
      if (direction === -1) {
        push();
        translate(getScreenX(characterX), characterY);
        scale(-1, 1);
        image(jumpAnimation[currentFrameIndex], 0, 0);
        pop();
      } else {
        image(jumpAnimation[currentFrameIndex], getScreenX(characterX), characterY);
      }
      animationDrawn = true;
    }
    // 向右翻滾
    if (lastAnimationType !== 'rollRight') {
      currentFrameIndex = 0;
      lastAnimationType = 'rollRight';
    }
    // currentFrameIndex = floor(frameCount / 4) % rollAnimation.length;
    // image(rollAnimation[currentFrameIndex], characterX, characterY);
    // return; // 翻滾動畫完成後結束
  } else if (!isDialogActive && keyIsDown(UP_ARROW) && !isJumping) {
    // 觸發跳躍
    isJumping = true;
    velocityY = jumpForce;
    lastAnimationType = 'jump';
  } else if (!isDialogActive && keyIsDown(CONTROL) && keyIsDown(LEFT_ARROW)) {
    // 向左翻滾
    if (lastAnimationType !== 'rollLeft') {
      currentFrameIndex = 0;
      lastAnimationType = 'rollLeft';
    }
  } else if (!isDialogActive && keyIsDown(SHIFT) && keyIsDown(RIGHT_ARROW)) {
    // 向右跑
    if (lastAnimationType !== 'runRight') {
      currentFrameIndex = 0;
      lastAnimationType = 'runRight';
    }
  } else if (!isDialogActive && keyIsDown(SHIFT) && keyIsDown(LEFT_ARROW)) {
    // 向左跑
    if (lastAnimationType !== 'runLeft') {
      currentFrameIndex = 0;
      lastAnimationType = 'runLeft';
    }
  } else if (!isDialogActive && keyIsDown(RIGHT_ARROW)) {
    // 向右走
    if (lastAnimationType !== 'walkRight') {
      currentFrameIndex = 0;
      lastAnimationType = 'walkRight';
    }
  } else if (!isDialogActive && keyIsDown(LEFT_ARROW)) {
    // 向左移動
    if (lastAnimationType !== 'walkLeft') {
      currentFrameIndex = 0;
      lastAnimationType = 'walkLeft';
    }
  } else {
    // 待機
    if (lastAnimationType !== 'stand') {
      currentFrameIndex = 0;
      lastAnimationType = 'stand';
    }
  }

  // 如果動畫尚未繪製（例如，不是在跳躍中按翻滾鍵）
  if (!animationDrawn) {
    // 根據 lastAnimationType 繪製對應的動畫
    if (isAttacking) {
      // 攻擊動畫已在前面處理
    } else if (isJumping) {
      // 根據垂直速度決定播放哪一幀，模擬上升和下降的樣子
      if (velocityY < -5) currentFrameIndex = 1; // 上升
      else if (velocityY > 5) currentFrameIndex = 2; // 下降
      else currentFrameIndex = 0; // 最高點
      drawCharacterFrame(jumpAnimation[currentFrameIndex]);
    } else if (lastAnimationType === 'rollRight') {
      currentFrameIndex = floor(frameCount / 4) % rollAnimation.length;
      image(rollAnimation[currentFrameIndex], getScreenX(characterX), characterY);
    } else if (lastAnimationType === 'rollLeft') {
    currentFrameIndex = floor(frameCount / 4) % rollAnimation.length;

    // 透過 push/pop 和 scale(-1, 1) 來水平翻轉圖片
    push(); // 儲存當前的繪圖狀態
    translate(getScreenX(characterX), characterY); // 移動到角色位置（與跑步時Y座標一致）
    scale(-1, 1); // 水平翻轉座標系
    // 因為已經 translate 過，所以在 (0, 0) 繪製圖片
    image(rollAnimation[currentFrameIndex], 0, 0); 
    pop(); // 恢復原本的繪圖狀態
    } else if (lastAnimationType === 'runRight') {
      currentFrameIndex = floor(frameCount / 4) % runAnimation.length;
      image(runAnimation[currentFrameIndex], getScreenX(characterX), characterY);
    } else if (lastAnimationType === 'runLeft') {
      currentFrameIndex = floor(frameCount / 4) % runAnimation.length;
      push();
      translate(getScreenX(characterX), characterY);
      scale(-1, 1);
      image(runAnimation[currentFrameIndex], 0, 0);
      pop();
    } else if (lastAnimationType === 'walkRight') {
      currentFrameIndex = floor(frameCount / 5) % walkAnimation.length;
      image(walkAnimation[currentFrameIndex], getScreenX(characterX), characterY);
    } else if (lastAnimationType === 'walkLeft') {
      currentFrameIndex = floor(frameCount / 5) % walkAnimation.length;
      if (direction === -1) {
        push();
        translate(getScreenX(characterX), characterY);
        scale(-1, 1);
        image(walkAnimation[currentFrameIndex], 0, 0);
        pop();
      } else {
        image(walkAnimation[currentFrameIndex], getScreenX(characterX), characterY);
      }
    } else { // 'stand'
      currentFrameIndex = floor(frameCount / 6) % standAnimation.length;
      drawCharacterFrame(standAnimation[currentFrameIndex]);
    }
  }

  // --- 繪製金幣特效 ---
  if (millis() - coinEffectTimer < 1000) {
    push();
    let alpha = map(millis() - coinEffectTimer, 0, 1000, 255, 0);
    let lift = map(millis() - coinEffectTimer, 0, 1000, 0, 50); // 向上飄升
    fill(255, 215, 0, alpha); // 金黃色
    stroke(0, alpha);
    strokeWeight(2);
    textSize(32);
    textAlign(CENTER, CENTER);
    // 顯示在角色頭頂上方
    text(coinEffectText, getScreenX(coinEffectX), coinEffectY - 100 - lift); 
    pop();
  }

  // --- 繪製老師 Boss 戰計時器 ---
  if (isTeacherBossFightActive) {
    let timeLeft = 60 - (millis() - teacherBossFightTimer) / 1000;
    
    // 當時間剩下一半 (30秒) 時觸發中攻擊
    if (timeLeft <= 30 && !hasTriggeredMediumAttack && teacherBossFightPhase === 'fighting') {
        isTeacherMediumAttacking = true;
        teacherMediumAttackFrameIndex = 0;
        hasTriggeredMediumAttack = true;
        isTeacherAttacking = false; // 如果正在進行小攻擊則強制中斷
    }

    if (timeLeft < 0) {
      timeLeft = 0;
      // 時間到，觸發老師說話並進入結局3
      isTeacherBossFightActive = false; // 停止 Boss 戰 UI
      dialogState = 'npc7_time_up_1';
    }

    // 檢查玩家血量，歸零則重置
    if (playerHealth <= 0) {
      playerHealth = 0;
      gameState = 'ending';
      endingType = 4;
      dialogState = 'end_death_1';
      gameEndTime = millis();
      bgmBoss.stop(); // 停止 Boss 音樂
    }

    // 繪製計時器 UI
    push();
    textSize(40);
    textAlign(CENTER, TOP);
    fill(255, 0, 0);
    stroke(0);
    strokeWeight(4);
    text(timeLeft.toFixed(1), width / 2, 30);
    pop();

    // --- 新增：繪製老師血條 ---
    push();
    let barWidth = 400;
    let barHeight = 25;
    let barX = width / 2 - barWidth / 2;
    let barY = 80; // 在計時器下方

    // 血條背景
    fill(100);
    stroke(0);
    strokeWeight(2);
    rect(barX, barY, barWidth, barHeight, 5);

    // 當前血量
    let currentHealthWidth = map(constrain(teacherHealth, 0, 100), 0, 100, 0, barWidth);
    fill(255, 69, 0); // 橘紅色
    noStroke();
    rect(barX, barY, currentHealthWidth, barHeight, 5);

    // 血量文字
    fill(255);
    textSize(18);
    textAlign(CENTER, CENTER);
    stroke(0);
    strokeWeight(3);
    text(`老師 HP: ${constrain(teacherHealth, 0, 100)} / 100`, width / 2, barY + barHeight / 2);

    // 新增：繪製老師 Boss 頭像
    if (character7BossImage) {
      imageMode(CENTER);
      image(character7BossImage, barX + barWidth + 50, barY + barHeight / 2, 60, 60);
    }

    // --- 新增：繪製玩家血條 (在老師血條下方) ---
    let playerBarY = barY + barHeight + 15; // 下移
    
    // 血條背景
    fill(100);
    stroke(0);
    strokeWeight(2);
    rect(barX, playerBarY, barWidth, barHeight, 5);

    // 當前血量
    let currentPlayerHealthWidth = map(constrain(playerHealth, 0, 80), 0, 80, 0, barWidth);
    fill(0, 255, 0); // 綠色
    noStroke();
    rect(barX, playerBarY, currentPlayerHealthWidth, barHeight, 5);

    // 血量文字
    fill(255);
    stroke(0);
    strokeWeight(3);
    text(`玩家 HP: ${constrain(playerHealth, 0, 80)} / 80`, width / 2, playerBarY + barHeight / 2);
    pop();
  }

  // --- 繪製 Boss 戰教學介面 ---
  if (dialogState === 'boss_tutorial') {
    push();
    // 半透明背景
    rectMode(CENTER);
    fill(0, 0, 0, 180); // 稍微深一點的背景確保文字清晰
    stroke(255);
    strokeWeight(2);
    let boxWidth = width * 0.6; // 框寬
    let boxHeight = height * 0.7; // 框高
    rect(width / 2, height / 2, boxWidth, boxHeight, 20); // 繪製背景框

    // 標題
    fill(255, 215, 0); // 金色標題
    noStroke();
    textAlign(CENTER, TOP);
    textSize(36);
    let boxTopY = height / 2 - boxHeight / 2; // 框的頂部 Y 座標
    text("Boss 戰鬥說明", width / 2, boxTopY + 40); // 繪製標題

    // --- 滾動內容區域設定 ---
    let textStartX = width / 2 - boxWidth / 2 + 40; // 文字起始 X
    let textStartY = boxTopY + 100; // 文字起始 Y
    let boxBottomY = height / 2 + boxHeight / 2; // 框的底部 Y 座標
    let textEndY = boxBottomY - 100; // 文字結束 Y (為底部按鈕留空間)
    let textAreaHeight = textEndY - textStartY; // 可滾動區域的高度
    let textAreaWidth = boxWidth - 80; // 可滾動區域的寬度

    push(); // 儲存繪圖狀態，用於 clip 和 translate
    // 使用原生 Canvas API 設定裁剪，避免 p5 在某些版本中重複進入剪裁狀態
    drawingContext.save();
    drawingContext.beginPath();
    drawingContext.rect(textStartX, textStartY, textAreaWidth, textAreaHeight);
    drawingContext.clip();
    translate(0, -tutorialScrollY); // 根據滾動值移動畫布

    // --- 繪製可滾動的內容 ---
    textAlign(LEFT, TOP);
    let currentY = textStartY; // 用於追蹤目前繪製的 Y 座標
    let leading = 45; // 恢復上一版本的大小

    // --- 目標 ---
    textSize(24);
    fill(255, 215, 0); // 金色
    text("🎯 目標：", textStartX, currentY);
    currentY += leading * 0.8;
    textSize(20);
    fill(200);
    text("   在 60 秒內擊敗老師！", textStartX, currentY);
    currentY += leading * 1.5;

    // --- 玩家技能 ---
    textSize(24);
    fill(255);
    text("⚔️ 你的技能：", textStartX, currentY);
    currentY += leading * 0.8;
    textSize(20);
    fill(200);
    text("   • 近身攻擊 (空白鍵): 對老師造成 10 點傷害。", textStartX, currentY);
    currentY += leading;
    text("   • 遠距攻擊 (F鍵): 對老師造成 5 點傷害 (需解鎖)。", textStartX, currentY);
    currentY += leading;
    text("   • 絕招 (↓鍵): 造成 15 點傷害並回復 10 HP (10秒冷卻)。", textStartX, currentY);
    currentY += leading * 1.5;

    // --- 老師攻擊 ---
    textSize(24);
    fill(255);
    text("💔 老師的攻擊：", textStartX, currentY);
    currentY += leading * 0.8;
    textSize(20);
    fill(200);
    text("   • 小攻擊: 扣除 5 HP", textStartX, currentY);
    currentY += leading;
    text("   • 中攻擊: 扣除 10 HP", textStartX, currentY);
    currentY += leading;
    text("   • 大絕招: 扣除 20 HP", textStartX, currentY);
    currentY += leading * 1.5;

    // --- 提示 ---
    textSize(24);
    fill(173, 216, 230);
    text("💡 提示：", textStartX, currentY);
    let titleWidth = textWidth("💡 提示：");
    textSize(20);
    fill(200);
    text("老師會在你靠近時瞬移，並發動更猛烈的攻擊！", textStartX + titleWidth, currentY);
    currentY += leading;

    tutorialTextTotalHeight = currentY - textStartY; // 計算文字總高度
    // 恢復 Canvas clip 狀態與 p5 繪圖狀態
    drawingContext.restore();
    pop(); // 恢復繪圖狀態
    
    // --- 繪製滾動條 ---
    if (tutorialTextTotalHeight > textAreaHeight) {
      let scrollbarX = textStartX + textAreaWidth + 10;
      let scrollbarH = textAreaHeight;
      let handleH = max(20, (textAreaHeight / tutorialTextTotalHeight) * scrollbarH);
      let handleY = textStartY + (tutorialScrollY / (tutorialTextTotalHeight - textAreaHeight)) * (scrollbarH - handleH);
      fill(100, 150); noStroke(); rectMode(CORNER);
      rect(scrollbarX, textStartY, 8, scrollbarH, 4);
      fill(200, 200);
      rect(scrollbarX, handleY, 8, handleH, 4);
    }

    // --- 警告 ---
    fill(255, 80, 80);
    textAlign(CENTER, BOTTOM);
    textSize(22);
    text("⚠️ 玩家血量歸零則挑戰失敗 ⚠️", width / 2, boxBottomY - 100);

    // 繪製開始按鈕 (僅當老師到達位置後)
    if (teacherBossFightPhase === 'fighting') {
      // 更新全域按鈕位置，使其在框內
      startBattleButtonRect.y = boxBottomY - 70; // 按鈕位置

      checkHover(startBattleButtonRect, 'startBattle');
      let isHover = mouseX > startBattleButtonRect.x && mouseX < startBattleButtonRect.x + startBattleButtonRect.w &&
                    mouseY > startBattleButtonRect.y && mouseY < startBattleButtonRect.y + startBattleButtonRect.h;
      
      let btnX = startBattleButtonRect.x + startBattleButtonRect.w / 2;
      let btnY = startBattleButtonRect.y + startBattleButtonRect.h / 2;

      push();
      translate(btnX, btnY);
      if (isHover) scale(1.1);
      
      rectMode(CENTER);
      fill(220, 20, 60); // 深紅色按鈕
      stroke(255);
      strokeWeight(2);
      rect(0, 0, startBattleButtonRect.w, startBattleButtonRect.h, 10);
      
      fill(255);
      noStroke();
      textAlign(CENTER, CENTER);
      textSize(24);
      text("戰鬥開始", 0, 0);
      pop();
    } else {
      // 顯示等待訊息
      textAlign(CENTER, BOTTOM);
      fill(255, 255, 0);
      textSize(20);
      // 閃爍效果
      if (frameCount % 60 < 30) {
        text("老師正在前往戰鬥位置...", width / 2, boxBottomY - 40);
      }
    }
    pop();
  }

  // --- 繪製投射物與特效 ---
  drawProjectilesAndEffects();

  // --- 繪製獎勵動畫 (最上層) ---
  drawRewardAnimation();
  
  // --- 繪製故障特效 (最上層) ---
  drawGlitchEffect();
  updateHoverSound();
}

// 輔助函式：繪製按鈕
function drawButton(rectObj, label, isHover, isSelected = false) {
  push();
  translate(rectObj.x + rectObj.w / 2, rectObj.y + rectObj.h / 2);
  if (isHover) scale(1.1);
  rectMode(CENTER);
  fill(isSelected ? 200 : 255); // 選中時變灰
  if (isSelected) stroke(255, 215, 0); else stroke(0); // 選中時金邊
  strokeWeight(isSelected ? 4 : 2);
  rect(0, 0, rectObj.w, rectObj.h, 10);
  fill(0); noStroke(); textSize(20); textAlign(CENTER, CENTER);
  text(label, 0, 0);
  pop();
}

// 當瀏覽器視窗大小改變時，自動調整畫布大小
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // 更新位置
  groundY = height * 2 / 3;
  // 保持 characterX 為世界座標：將畫面中心對應到世界座標
  characterX = bgScrollX + width / 2;
  characterY = groundY;
  character2Y = groundY;
  character3Y = groundY;
  character4Y = groundY;
  character5Y = groundY;
  character6Y = groundY;
  character7Y = groundY;
  hintCatY = groundY + 30;
  // 更新按鈕位置
  enterGameButtonRect = {x: width / 2 - 100, y: height / 2 - 60, w: 200, h: 50};
  quizContentButtonRect = {x: width / 2 - 100, y: height / 2 + 10, w: 200, h: 50};
  startGameButtonRect = {x: width / 2 - 100, y: height - 80, w: 200, h: 50};
  musicToggleButtonRect = {x: width / 2 + 120, y: height / 2 - 60, w: 50, h: 50};
  quizModeOriginalButtonRect = {x: width / 2 - 100, y: height / 2 - 100, w: 200, h: 50};
  quizModeEduTechButtonRect = {x: width / 2 - 100, y: height / 2 - 30, w: 200, h: 50};
  quizModeEnglishButtonRect = {x: width / 2 - 100, y: height / 2 + 40, w: 200, h: 50};
  
  pauseButtonRect = {x: width - 60, y: 20, w: 40, h: 40};
  resumeButtonRect = {x: width / 2 - 100, y: height / 2 - 70, w: 200, h: 50};
  restartPauseButtonRect = {x: width / 2 - 100, y: height / 2, w: 200, h: 50};
  instructionsButtonRect = {x: width / 2 - 100, y: height / 2 + 70, w: 200, h: 50};
  pauseMusicButtonRect = {x: width / 2 - 130, y: height / 2 + 140, w: 50, h: 50};
  volumeSliderRect = {x: width / 2 - 50, y: height / 2 + 165, w: 150, h: 20};
  backToPauseButtonRect = {x: width / 2 - 100, y: height - 100, w: 200, h: 50};
  startBattleButtonRect = {x: width / 2 - 100, y: height - 100, w: 200, h: 50};
}

// --- 新增：繪製投射物與特效 ---
function drawProjectilesAndEffects() {
  // 繪製玩家升級金光特效
  if (millis() - playerUpgradeEffectTimer < 2000 && playerUpgradeEffectTimer !== -1) {
    push();
    noStroke();
    fill(255, 215, 0, 100 + 50 * sin(frameCount * 0.2)); // 呼吸燈效果
    ellipse(getScreenX(characterX), characterY, 120, 120);
    pop();
  }

  // 繪製投射物
  // 顯示短暫偵錯字樣，確認是否有發射（僅創造者模式可見）
  if (playerName === '530' && lastProjectileSpawnTime !== -1 && millis() - lastProjectileSpawnTime < 800) {
    push();
    fill(255, 200, 0);
    noStroke();
    textSize(20);
    textAlign(LEFT, TOP);
    text('投射物發射!', 20, 20);
    pop();
  }

  // 顯示遠距動畫與狀態偵錯資訊（右下角，僅創造者模式可見）
  if (playerName === '530') {
    push();
    fill(255);
    noStroke();
    textSize(14);
    textAlign(RIGHT, BOTTOM);
    let rangedW = char1RangedAttackSpriteSheet ? char1RangedAttackSpriteSheet.width : 'N/A';
    let rangedCount = char1RangedAttackAnimation ? char1RangedAttackAnimation.length : 0;
    let meleeCount = attackAnimation ? attackAnimation.length : 0;
    text('ranged sprite width: ' + rangedW, width - 20, height - 60);
    text('ranged frames: ' + rangedCount + '  melee frames: ' + meleeCount, width - 20, height - 40);
    text('lastAnim: ' + lastAnimationType, width - 20, height - 20);
    pop();
  }
  for (let i = projectiles.length - 1; i >= 0; i--) {
    let p = projectiles[i];
    p.x += p.dir * 10; // 投射物速度
    p.frameIndex += 0.5; // 動畫速度
    
    let currentFrame = char1ProjectileAnimation[floor(p.frameIndex) % char1ProjectileAnimation.length];
    let pScreenX = getScreenX(p.x);
    
    push();
    translate(pScreenX, p.y);
    if (p.dir === -1) scale(-1, 1);
    image(currentFrame, 0, 0);
    pop();

    // 檢查距離 (8公分 = 600px)
    if (abs(p.x - p.startX) > 600) {
      projectiles.splice(i, 1);
      continue;
    }

    // 新增：投射物碰撞檢測 (針對角色二)
    // 判斷投射物是否擊中角色二
    if (!isCharacter2Hit && abs(p.x - character2X) < 60 && abs(p.y - character2Y) < 80) {
      isCharacter2Hit = true;
      hitFrameIndex2 = 0;
      projectiles.splice(i, 1); // 擊中後移除投射物
    }

    // 檢查是否擊中老師 (Boss戰)
    if (isTeacherBossFightActive && abs(p.x - character7X) < 60 && abs(p.y - character7Y) < 80) {
      teacherHealth = max(0, teacherHealth - 5); // 玩家攻擊扣除老師血量 (投擲物扣5)
      projectiles.splice(i, 1); // 擊中後移除
      // 可以在這裡加入受傷特效
      continue;
    }
  }

  // 繪製老師投擲物
  for (let i = teacherProjectiles.length - 1; i >= 0; i--) {
    let p = teacherProjectiles[i];
    p.x += p.direction * 12; // 投擲物速度
    p.frameIndex += 0.5; // 動畫速度

    let anim;
    if (p.type === 'medium') {
      anim = teacherMediumProjectileAnimation;
    } else if (p.type === 'special') {
      anim = teacherSpecialProjectileAnimation;
    } else {
      anim = teacherProjectileAnimation;
    }
    let currentFrame = anim[floor(p.frameIndex) % anim.length];
    let pScreenX = getScreenX(p.x);
    
    push();
    translate(pScreenX, p.y);
    if (p.direction === -1) scale(-1, 1);
    image(currentFrame, 0, 0);
    pop();

    // 檢查距離 (80公分 = 3200px)
    if (abs(p.x - p.startX) > 3200) {
      teacherProjectiles.splice(i, 1);
      continue;
    }

    // 檢查是否擊中玩家
    if (abs(p.x - characterX) < 40 && abs(p.y - characterY) < 60) {
      if (isTeacherBossFightActive) {
        let damage = 5;
        if (p.type === 'medium') damage = 10;
        else if (p.type === 'special') damage = 20;
        
        playerHealth = max(0, playerHealth - damage); // Boss戰時扣除血量
        coinEffectText = "-" + damage + " HP";
      } else {
        score = max(0, score - 10); // 平時扣除金幣
        coinEffectText = "-$$";
      }
      coinEffectX = characterX;
      coinEffectY = characterY;
      coinEffectTimer = millis();
      teacherProjectiles.splice(i, 1); // 擊中後移除
    }
  }

  // 繪製老師瞬移特效 (紫色殘影與煙霧)
  if (millis() - teacherTeleportTimer < 500) {
    push();
    let effectScreenX = getScreenX(teacherTeleportX);
    translate(effectScreenX, teacherTeleportY);
    noStroke();
    let t = (millis() - teacherTeleportTimer) / 500.0; // 0.0 ~ 1.0 進度
    
    // 殘影效果 (紫色身形)
    fill(138, 43, 226, 150 * (1 - t)); // BlueViolet
    ellipse(0, -50, 60, 100); // 簡單模擬身形

    // 煙霧擴散
    fill(75, 0, 130, 100 * (1 - t)); // Indigo
    for(let i=0; i<8; i++) {
        let angle = TWO_PI * i / 8;
        let d = 40 * t;
        ellipse(cos(angle)*d, sin(angle)*d - 50, 30 * (1-t), 30 * (1-t));
    }
    pop();
  }
}

// 輔助函式，用於繪製角色一的畫格（包含方向翻轉）
function drawCharacterFrame(frame) {
  const screenX = getScreenX(characterX);
  if (direction === -1) {
    push();
    translate(screenX, characterY);
    scale(-1, 1);
    image(frame, 0, 0);
    pop();
  } else {
    image(frame, screenX, characterY);
  }
}

// 處理對話推進的通用函式
function handleDialogueInput() {
  if (dialogState === 'intro_1') {
    dialogState = 'intro_2';
  } else if (dialogState === 'intro_2') {
    dialogState = 'intro_3';
  } else if (dialogState === 'intro_3') {
    // 獨白結束，進入原本的 NPC 互動流程
    dialogState = 'seeking_npc';
  } else if (dialogState === '1_askName') {
    dialogState = '2_inputName';
  } else if (dialogState === '2_1_greeting') {
    dialogState = '2_2_askLocation';
  } else if (dialogState === '2_2_askLocation') {
    dialogState = '2_3_askExit';
  } else if (dialogState === '2_3_askExit') {
    dialogState = '2_4_silence';
  } else if (dialogState === '2_4_silence') {
    dialogState = '2_5_newcomer';
  } else if (dialogState === '2_5_newcomer') {
    dialogState = '2_6_explain';
  } else if (dialogState === '2_6_explain') {
    dialogState = '2_7_sawCoin';
  } else if (dialogState === '2_7_sawCoin') {
    dialogState = '2_8_goal';
  } else if (dialogState === '2_8_goal') {
    dialogState = '2_9_understood';
    showMissionObjective = true; // 開啟任務目標顯示
  } else if (dialogState === '2_9_understood') {
    dialogState = '2_10_challenge';
  } else if (dialogState === '2_10_challenge') {
    dialogState = '3_confirmStart';
  } else if (dialogState === '3_1_ready') {
    currentQuizNpc = 'student1';
    maxQuestions = 10;
    startQuiz();
  } else if (dialogState === '3_2_not_ready') {
    dialogState = '3_3_refused';
  } else if (dialogState === '3_3_refused') {
    dialogState = 'cooldown_npc'; // 進入冷卻狀態，直到玩家遠離
  } else if (dialogState === '7_quiz_end_praise') {
    dialogState = '7_1_quiz_end_resolve';
  } else if (dialogState === '7_1_quiz_end_resolve') {
    dialogState = 'cooldown_npc'; // 改為冷卻狀態，讓玩家遠離後可重新觸發
    isAutoWalking = true;
    // 1公分約為40像素，8公分約為320像素
    autoWalkTargetX = characterX + 320;
  } else if (dialogState === 'quiz_fail_1') {
    dialogState = 'quiz_fail_2';
  } else if (dialogState === 'quiz_fail_2') {
    dialogState = 'cooldown_npc';
  } else if (dialogState === 'quiz_pass_1') {
    dialogState = 'quiz_pass_2';
  } else if (dialogState === 'quiz_pass_2') {
    dialogState = 'quiz_pass_3';
  } else if (dialogState === 'quiz_pass_3') {
    dialogState = 'quiz_pass_4';
  } else if (dialogState === 'quiz_pass_4') {
    dialogState = 'cooldown_npc';
    isAutoWalking = true;
    autoWalkTargetX = characterX + 320;
  } else if (dialogState === 'post_quiz_nothing') {
    dialogState = 'cooldown_npc';
  } else if (dialogState === 'post_quiz_explain_coins') {
    dialogState = 'cooldown_npc';
  } else if (dialogState === 'boundary_left') {
    dialogState = 'cooldown_npc';
  } else if (dialogState === 'post_quiz_retry') {
    currentQuizNpc = 'student1';
    maxQuestions = 10;
    startQuiz();
  } else if (dialogState === 'boundary_left') {
    dialogState = 'seeking_npc'; // 改為 seeking_npc 以便重新觸發互動
  } else if (dialogState === 'boundary_right') {
    dialogState = 'seeking_npc'; // 改為 seeking_npc 以便重新觸發互動
  } else if (dialogState === 'boundary_quiz_lock') {
    dialogState = 'seeking_npc';
  } else if (dialogState === 'npc3_1_greeting') {
    dialogState = 'npc3_2_who';
  } else if (dialogState === 'npc3_2_who') {
    dialogState = 'npc3_3_iam';
  } else if (dialogState === 'npc3_3_iam') {
    dialogState = 'npc3_4_titles';
  } else if (dialogState === 'npc3_4_titles') {
    dialogState = 'npc3_5_human';
  } else if (dialogState === 'npc3_5_human') {
    dialogState = 'npc3_6_dots';
  } else if (dialogState === 'npc3_6_dots') {
    dialogState = 'npc3_7_monitor';
  } else if (dialogState === 'npc3_7_monitor') {
    if (hasKey) {
      dialogState = 'npc3_post_key_question';
    } else {
      dialogState = 'npc3_8_offer';
    }
  } else if (dialogState === 'npc3_8_offer') {
    dialogState = 'npc3_9_confirm';
  } else if (dialogState === 'npc3_buy_attempt') {
    // 檢查金幣
    let price = hasScholarBadge ? 90 : 100;
    if (score >= price) {
      score -= price;
      hasKey = true;
      if (isMusicOn) {
        sfxMoney.play(); // 播放金錢音效
      }
      triggerRewardAnimation('key'); // 觸發獲得鑰匙動畫
      dialogState = 'npc3_buy_success';
    } else {
      dialogState = 'npc3_buy_fail';
    }
  } else if (dialogState === 'npc3_buy_success' || dialogState === 'npc3_buy_fail') {
    if (dialogState === 'npc3_buy_success') {
      sfxMoney.stop();
    }
    dialogState = 'cooldown_npc';
  } else if (dialogState === 'npc3_refuse_1') {
    dialogState = 'npc3_refuse_2';
  } else if (dialogState === 'npc3_refuse_2') {
    dialogState = 'cooldown_npc';
  } else if (dialogState === 'npc3_rude_1') {
    dialogState = 'npc3_rude_2';
    isCharacter3Angry = true; // 觸發班長生氣動畫
    isCharacter3Chasing = true; // 開始追逐
    character3ChaseTimer = millis(); // 記錄開始時間
    angryFrameIndex3 = 0;
  } else if (dialogState === 'npc3_rude_2') {
    dialogState = 'cooldown_npc';
  } else if (dialogState === 'npc3_truth') {
    dialogState = 'npc3_truth_1';
  } else if (dialogState === 'npc3_truth_1') {
    dialogState = 'npc3_truth_2';
  } else if (dialogState === 'npc3_truth_2') {
    dialogState = 'npc3_truth_3';
  } else if (dialogState === 'npc3_truth_3') {
    if (sfxGlitch.isPlaying()) sfxGlitch.stop();
    dialogState = 'npc3_truth_4';
  } else if (dialogState === 'npc3_truth_4') {
    gameState = 'ending';
    dialogState = 'end_truth_1';
    endingType = 2;
    gameEndTime = millis();
    bgmPlay.stop();
  } else if (dialogState === 'npc3_nothing') {
    dialogState = 'cooldown_npc';
  } else if (dialogState === 'npc5_1_smile') {
    dialogState = 'npc5_2_question';
  } else if (dialogState === 'npc5_2_question') {
    dialogState = 'npc5_3_challenge';
  } else if (dialogState === 'npc5_3_challenge') {
    dialogState = 'npc5_4_sudden';
  } else if (dialogState === 'npc5_4_sudden') {
    currentQuizNpc = 'student2';
    maxQuestions = 5;
    startQuiz();
  } else if (dialogState === 'npc5_quiz_end') {
    dialogState = 'cooldown_npc';
  } else if (dialogState === 'npc5_quiz_perfect' || dialogState === 'npc5_quiz_good' || dialogState === 'npc5_quiz_bad') {
    dialogState = 'cooldown_npc';
  } else if (dialogState === 'npc5_completed') {
    dialogState = 'cooldown_npc';
  } else if (dialogState === 'npc6_1_homework') {
    dialogState = 'npc6_2_what';
  } else if (dialogState === 'npc6_2_what') {
    dialogState = 'npc6_3_forgot';
  } else if (dialogState === 'npc6_3_forgot') {
    dialogState = 'npc6_4_supervise';
  } else if (dialogState === 'npc6_4_supervise') {
    currentQuizNpc = 'student3';
    maxQuestions = 3;
    startQuiz();
  } else if (dialogState === 'npc6_completed') {
    dialogState = 'cooldown_npc';
  } else if (dialogState === 'npc6_quiz_perfect') {
    dialogState = 'cooldown_npc';
  } else if (dialogState === 'npc6_upgrade_success') {
    dialogState = 'npc6_offer_ultimate';
  } else if (dialogState === 'npc6_ultimate_success' || dialogState === 'npc6_ultimate_fail' || dialogState === 'npc6_upgrade_fail' || dialogState === 'npc6_upgrade_done') {
    dialogState = 'cooldown_npc';
  } else if (dialogState === 'npc7_2_gate') {
    dialogState = 'npc7_2_gate_response';
  } else if (dialogState === 'npc7_2_gate_response') {
    dialogState = 'npc7_2_gate_response_2';
  } else if (dialogState === 'npc7_2_gate_response_2') {
    dialogState = 'npc7_2_gate_response_3';
  } else if (dialogState === 'npc7_2_gate_response_3') {
    dialogState = 'npc7_2_gate_response_4';
  } else if (dialogState === 'npc7_2_gate_response_4') {
    dialogState = 'npc7_boss_intro_1';
  } else if (dialogState === 'npc7_boss_intro_1') {
    dialogState = 'npc7_boss_intro_2';
  } else if (dialogState === 'npc7_boss_intro_2') {
    dialogState = 'boss_tutorial'; // 進入教學說明狀態
    tutorialScrollY = 0; // 重置滾動位置
    teacherBossFightPhase = 'retreat';
    teacherRetreatTargetX = character7X + (83 * 40); // 83cm * 40px/cm = 3480px
    teacherFightMinX = character7X; // 記錄戰鬥區域左邊界 (當前位置)
    playerHealth = 80; // 設定玩家血量
    // 注意：此時不啟動 isTeacherBossFightActive，等待玩家點擊開始按鈕
  } else if (dialogState === 'npc7_3_dog') {
    dialogState = 'npc7_3_dog_response';
  } else if (dialogState === 'npc7_3_dog_response') {
    dialogState = 'npc7_3_dog_response_2';
  } else if (dialogState === 'npc7_3_dog_response_2') {
    dialogState = 'npc7_3_dog_response_3';
  } else if (dialogState === 'npc7_3_dog_response_3') {
    if (!hasNonsenseMasterTitle) {
      hasNonsenseMasterTitle = true;
      triggerRewardAnimation('nonsense_master');
    }
    dialogState = 'cooldown_npc';
  } else if (dialogState === 'npc7_4_study') {
    dialogState = 'npc7_4_study_response';
  } else if (dialogState === 'npc7_4_study_response') {
    gameState = 'ending';
    dialogState = 'end_study_title';
    endingType = 3;
    gameEndTime = millis();
    bgmPlay.stop();
  } else if (dialogState === 'npc4_1_wait') {
    dialogState = 'npc4_2_who';
  } else if (dialogState === 'npc4_2_who') {
    dialogState = 'npc4_3_times';
  } else if (dialogState === 'npc4_3_times') {
    dialogState = 'npc4_4_what';
  } else if (dialogState === 'npc4_4_what') {
    dialogState = 'npc4_5_loop';
  } else if (dialogState === 'npc4_5_loop') {
    if (sfxGlitch.isPlaying()) sfxGlitch.stop();
    dialogState = 'npc4_running_away'; // 隱藏對話框，開始跑步
    isCharacter4RunningAway = true;
    character4RunDirection = 1; // 確保向右跑
  } else if (dialogState === 'npc4_6_cycle') {
    dialogState = 'npc4_7_what_cycle';
  } else if (dialogState === 'npc4_7_what_cycle') {
    dialogState = 'npc4_8_find_monitor';
  } else if (dialogState === 'npc4_8_find_monitor') {
    dialogState = 'cooldown_npc'; // 對話結束
  } else if (dialogState === 'npc7_defeated_1') {
    dialogState = 'npc7_defeated_2';
  } else if (dialogState === 'npc7_defeated_2') {
    dialogState = 'npc7_defeated_3';
  } else if (dialogState === 'npc7_defeated_3') {
    dialogState = 'npc7_defeated_4';
  } else if (dialogState === 'npc7_defeated_4') {
    dialogState = 'npc7_defeated_5';
  } else if (dialogState === 'npc7_defeated_5') {
    dialogState = 'npc7_defeated_6';
  } else if (dialogState === 'npc7_defeated_6') {
    dialogState = 'npc7_defeated_7';
  } else if (dialogState === 'npc7_defeated_7') {
    dialogState = 'npc7_defeated_8';
  } else if (dialogState === 'npc7_refused_join') {
    dialogState = 'npc4_running_away';
    isCharacter4RunningAway = true;
    character4RunDirection = -1;
  } else if (dialogState === 'npc7_time_up_1') {
    gameState = 'ending';
    dialogState = 'end_study_title';
    endingType = 3;
    gameEndTime = millis();
    bgmBoss.stop();
  } else if (dialogState === 'end_1_what') {
    dialogState = 'end_2_dark';
  } else if (dialogState === 'end_2_dark') {
    dialogState = 'end_3_happened';
  } else if (dialogState === 'end_3_happened') {
    dialogState = 'end_4_switch';
  } else if (dialogState === 'end_4_switch') {
    dialogState = 'end_5_wire';
  } else if (dialogState === 'end_5_wire') {
    dialogState = 'end_6_title';
  } else if (dialogState === 'end_6_title') {
    dialogState = 'end_7_thanks';
  } else if (dialogState === 'end_7_thanks') {
    // 遊戲結束，不再推進
    dialogState = 'end_8_stats'; // 進入統計畫面
    return;
  } else if (dialogState === 'end_study_title') {
    dialogState = 'end_study_thanks';
  } else if (dialogState === 'end_study_thanks') {
    dialogState = 'end_8_stats';
    return;
  } else if (dialogState === 'end_death_1') {
    dialogState = 'end_death_2';
  } else if (dialogState === 'end_death_2') {
    dialogState = 'end_death_3';
  } else if (dialogState === 'end_death_3') {
    dialogState = 'end_death_title';
  } else if (dialogState === 'end_death_title') {
    dialogState = 'end_8_stats';
    return;
  } else if (dialogState === 'end_join_cycle') {
    dialogState = 'end_8_stats';
    return;
  } else if (dialogState === 'end_truth_1') {
    if (sfxGlitch.isPlaying()) sfxGlitch.stop();
    dialogState = 'end_truth_2';
  } else if (dialogState === 'end_truth_2') {
    dialogState = 'end_truth_3';
  } else if (dialogState === 'end_truth_3') {
    dialogState = 'end_truth_4_code';
    codeScrollY = height; // 從底部開始捲動
    finalDialogTimer = millis(); // 啟動計時器
    return;
  } else if (dialogState === '4_askQuestion') {
    dialogState = '5_inputAnswer';
  }
}

// 鼠標點擊事件處理
function mousePressed() {
  // 確保音訊環境已啟動 (解決瀏覽器自動播放限制)
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }

  // 確保按鈕變數已在 setup() 中被初始化
  if (!enterGameButtonRect) return;

  if (gameState === 'start') {
    // 處理測驗模式選擇
    if (isSelectingQuizMode) {
      // 選擇 "原本"
      if (mouseX > quizModeOriginalButtonRect.x && mouseX < quizModeOriginalButtonRect.x + quizModeOriginalButtonRect.w &&
          mouseY > quizModeOriginalButtonRect.y && mouseY < quizModeOriginalButtonRect.y + quizModeOriginalButtonRect.h) {
        quizMode = 'original';
        isSelectingQuizMode = false;
        return;
      }
      // 選擇 "教育科技概論"
      if (mouseX > quizModeEduTechButtonRect.x && mouseX < quizModeEduTechButtonRect.x + quizModeEduTechButtonRect.w &&
          mouseY > quizModeEduTechButtonRect.y && mouseY < quizModeEduTechButtonRect.y + quizModeEduTechButtonRect.h) {
        quizMode = 'edutech';
        initEduTechMode(); // 初始化題目索引
        isSelectingQuizMode = false;
        return;
      }
      // 選擇 "英文"
      if (mouseX > quizModeEnglishButtonRect.x && mouseX < quizModeEnglishButtonRect.x + quizModeEnglishButtonRect.w &&
          mouseY > quizModeEnglishButtonRect.y && mouseY < quizModeEnglishButtonRect.y + quizModeEnglishButtonRect.h) {
        quizMode = 'english';
        initEnglishMode(); // 初始化題目索引
        isSelectingQuizMode = false;
        return;
      }
      // 點擊其他地方關閉選單 (可選)
      // isSelectingQuizMode = false; 
      return;
    }

    if (mouseX > enterGameButtonRect.x && mouseX < enterGameButtonRect.x + enterGameButtonRect.w &&
        mouseY > enterGameButtonRect.y && mouseY < enterGameButtonRect.y + enterGameButtonRect.h) {
      gameState = 'instructions';
      instructionTimer = millis(); // 啟動計時器
    }
    
    // 檢查是否點擊了音樂開關按鈕
    if (mouseX > musicToggleButtonRect.x && mouseX < musicToggleButtonRect.x + musicToggleButtonRect.w &&
        mouseY > musicToggleButtonRect.y && mouseY < musicToggleButtonRect.y + musicToggleButtonRect.h) {
      isMusicOn = !isMusicOn;
      if (isMusicOn) {
        if (!bgmStart.isPlaying()) bgmStart.loop();
      } else {
        bgmStart.stop();
      }
    }

    // 檢查是否點擊了測驗內容按鈕
    if (mouseX > quizContentButtonRect.x && mouseX < quizContentButtonRect.x + quizContentButtonRect.w &&
        mouseY > quizContentButtonRect.y && mouseY < quizContentButtonRect.y + quizContentButtonRect.h) {
      isSelectingQuizMode = true;
      return;
    }

    return;
  }

  if (gameState === 'instructions') {
    if (mouseX > startGameButtonRect.x && mouseX < startGameButtonRect.x + startGameButtonRect.w &&
        mouseY > startGameButtonRect.y && mouseY < startGameButtonRect.y + startGameButtonRect.h) {
      gameState = 'playing';
      charactersVisible = true; // 顯示角色
      
      // 切換音樂：停止開始音樂，播放遊戲音樂
      bgmStart.stop();
      if (isMusicOn) {
        bgmPlay.loop();
      }
      
      // 初始化統計數據
      gameStartTime = millis();
      correctAnswersCount = 0;
      wrongAnswersLog = [];
      wrongAnswersPage = 0;

      // 進入遊戲後先顯示角色一的獨白
      dialogState = 'intro_1';
      
      finalDialogTimer = millis();
    }
    return;
  }

  // 處理結局狀態的點擊
  if (gameState === 'ending') {
    // 檢查是否點擊了重新開始按鈕
    if (dialogState === 'end_8_stats' && restartButtonRect) {
      if (mouseX > restartButtonRect.x && mouseX < restartButtonRect.x + restartButtonRect.w &&
          mouseY > restartButtonRect.y && mouseY < restartButtonRect.y + restartButtonRect.h) {
        resetGameToStartScreen();
        return;
      }
    }
    // 檢查是否點擊了錯題回顧的上一頁按鈕
    if (dialogState === 'end_8_stats' && prevPageButtonRect) {
      if (mouseX > prevPageButtonRect.x && mouseX < prevPageButtonRect.x + prevPageButtonRect.w &&
          mouseY > prevPageButtonRect.y && mouseY < prevPageButtonRect.y + prevPageButtonRect.h) {
        wrongAnswersPage--;
        if (wrongAnswersPage < 0) wrongAnswersPage = 0;
        return;
      }
    }

    // 檢查是否點擊了錯題回顧的下一頁按鈕
    if (dialogState === 'end_8_stats' && nextPageButtonRect) {
      if (mouseX > nextPageButtonRect.x && mouseX < nextPageButtonRect.x + nextPageButtonRect.w &&
          mouseY > nextPageButtonRect.y && mouseY < nextPageButtonRect.y + nextPageButtonRect.h) {
        wrongAnswersPage++;
        // 如果超過頁數，回到第一頁 (循環)
        if (wrongAnswersPage * 3 >= wrongAnswersLog.length) { // 假設每頁 3 題
          wrongAnswersPage = 0;
        }
        return;
      }
    }
    handleDialogueInput();
    return;
  }

  // 處理遊戲進行中的對話框點擊 (推進劇情)
  if (gameState === 'playing') {
    // --- 處理暫停按鈕點擊 ---
    if (!isGamePaused) {
      if (mouseX > pauseButtonRect.x && mouseX < pauseButtonRect.x + pauseButtonRect.w &&
          mouseY > pauseButtonRect.y && mouseY < pauseButtonRect.y + pauseButtonRect.h) {
        isGamePaused = true;
        pausedScreenImage = get(); // 截取當前畫面
        if (bgmPlay.isPlaying()) bgmPlay.pause(); // 暫停音樂
        if (bgmBoss.isPlaying()) bgmBoss.pause(); // 暫停 Boss 音樂
        if (bgmStart.isPlaying() && gameState === 'playing') bgmStart.pause(); // 暫停勝利音樂 (若在遊戲中播放)
        return;
      }
    } else {
      // --- 處理暫停選單點擊 ---
      if (isPausedInstructionsVisible) {
        // 處理說明頁面的返回按鈕
        if (mouseX > backToPauseButtonRect.x && mouseX < backToPauseButtonRect.x + backToPauseButtonRect.w &&
            mouseY > backToPauseButtonRect.y && mouseY < backToPauseButtonRect.y + backToPauseButtonRect.h) {
          isPausedInstructionsVisible = false;
        }
        return;
      }

      // 1. 繼續遊戲
      if (mouseX > resumeButtonRect.x && mouseX < resumeButtonRect.x + resumeButtonRect.w &&
          mouseY > resumeButtonRect.y && mouseY < resumeButtonRect.y + resumeButtonRect.h) {
        isGamePaused = false;
        pausedScreenImage = null;
        if (isMusicOn) {
          if (isTeacherBossFightActive) {
            bgmBoss.loop(); // 恢復 Boss 音樂
          } else if (isTeacherDead) {
            bgmStart.loop(); // 恢復勝利音樂 (2.mp3)
          } else {
            bgmPlay.loop(); // 恢復一般遊戲音樂
          }
        }
        return;
      }
      // 2. 重新開始
      if (mouseX > restartPauseButtonRect.x && mouseX < restartPauseButtonRect.x + restartPauseButtonRect.w &&
          mouseY > restartPauseButtonRect.y && mouseY < restartPauseButtonRect.y + restartPauseButtonRect.h) {
        resetGameToStartScreen();
        return;
      }
      // 3. 遊戲操作說明
      if (mouseX > instructionsButtonRect.x && mouseX < instructionsButtonRect.x + instructionsButtonRect.w &&
          mouseY > instructionsButtonRect.y && mouseY < instructionsButtonRect.y + instructionsButtonRect.h) {
        isPausedInstructionsVisible = true;
        return;
      }
      // 4. 音樂開關
      if (mouseX > pauseMusicButtonRect.x && mouseX < pauseMusicButtonRect.x + pauseMusicButtonRect.w &&
          mouseY > pauseMusicButtonRect.y && mouseY < pauseMusicButtonRect.y + pauseMusicButtonRect.h) {
        isMusicOn = !isMusicOn;
        // 暫停時不立即播放/停止，等回到遊戲或標題時生效
        return;
      }
      // 5. 音量滑桿點擊偵測
      // 擴大一點偵測範圍方便點擊
      if (mouseX > volumeSliderRect.x - 10 && mouseX < volumeSliderRect.x + volumeSliderRect.w + 10 &&
          mouseY > volumeSliderRect.y - 20 && mouseY < volumeSliderRect.y + 20) {
        isDraggingVolumeSlider = true;
        masterVolume = constrain(map(mouseX, volumeSliderRect.x, volumeSliderRect.x + volumeSliderRect.w, 0, 1), 0, 1);
        bgmStart.setVolume(masterVolume);
        bgmPlay.setVolume(masterVolume);
        return;
      }
    }

    const boxH = height * 0.25;
    const boxW = width * 0.85;
    const boxX = (width - boxW) / 2;
    const boxY = height - boxH - 20;

    // 檢查是否點擊了鎖頭 (在大門劇情時)
    let lockWorldX = worldWidth - 60 - width / 2 - 190; 
    let lockScreenX = getScreenX(lockWorldX);
    let lockY = height / 2;
    if (!isDoorUnlocked && dist(mouseX, mouseY, lockScreenX, lockY) < 200) { // 點擊在鎖頭範圍 (半徑5公分/200px)
      if (!hasKey) {
        // 沒有鑰匙，顯示提示
        lockMessageTimer = millis();
      } else {
        // 有鑰匙，檢查距離並觸發結局
        const unlockTriggerDist = 200; // 5公分 (約200像素)
        if (abs(characterX - lockWorldX) < unlockTriggerDist) {
          dialogState = 'confirm_unlock';
          return; // 進入結局，停止後續點擊處理
        }
      }
    }
    // 檢查是否點擊了對話框區域
    if (mouseX > boxX && mouseX < boxX + boxW && mouseY > boxY && mouseY < boxY + boxH) {
      handleDialogueInput();
    }

    // 檢查 Boss 戰教學頁面的開始按鈕
    if (dialogState === 'boss_tutorial' && teacherBossFightPhase === 'fighting') {
      if (mouseX > startBattleButtonRect.x && mouseX < startBattleButtonRect.x + startBattleButtonRect.w &&
          mouseY > startBattleButtonRect.y && mouseY < startBattleButtonRect.y + startBattleButtonRect.h) {
        isTeacherBossFightActive = true;
        teacherBossFightTimer = millis();
        dialogState = 'cooldown_npc';
        isHintCatActive = false; // Boss戰開始時，提示貓消失
        
        // Boss 戰開始，切換音樂為 3.mp3
        if (isMusicOn) {
          bgmPlay.stop();
          bgmBoss.loop();
        }
        return;
      }
    } else if (mouseX > boxX && mouseX < boxX + boxW && mouseY > boxY && mouseY < boxY + boxH) {
      handleDialogueInput();
    }

    // 檢查是否點擊了選項按鈕 (在回答問題時)
    if (dialogState === '5_inputAnswer') {
      for (let btn of optionButtonRects) {
        if (mouseX > btn.x && mouseX < btn.x + btn.w &&
            mouseY > btn.y && mouseY < btn.y + btn.h) {
          checkAnswer(btn.text);
          return;
        }
      }
    }
  }

  // 檢查是否在選擇按鈕顯示時點擊
  if (showChoiceButtons) {
    if (dialogState === '3_confirmStart') {
      // 檢查是否點擊了"是"按鈕
      if (mouseX > yesButtonRect.x && mouseX < yesButtonRect.x + yesButtonRect.w &&
          mouseY > yesButtonRect.y && mouseY < yesButtonRect.y + yesButtonRect.h) {
        dialogState = '3_1_ready';
        showChoiceButtons = false;
        return;
      }
      
      // 檢查是否點擊了"否"按鈕
      if (mouseX > noButtonRect.x && mouseX < noButtonRect.x + noButtonRect.w &&
          mouseY > noButtonRect.y && mouseY < noButtonRect.y + noButtonRect.h) {
        dialogState = '3_2_not_ready';
        showChoiceButtons = false;
        return;
      }
    } else if (dialogState === 'confirm_unlock') {
      // "是" 按鈕 (解鎖)
      if (mouseX > yesButtonRect.x && mouseX < yesButtonRect.x + yesButtonRect.w &&
          mouseY > yesButtonRect.y && mouseY < yesButtonRect.y + yesButtonRect.h) {
        isDoorUnlocked = true;
        
        // 解鎖大門後，停止所有音樂
        bgmPlay.stop();

        gameState = 'ending';
        dialogState = 'end_1_what';
        endingType = 1;
        gameEndTime = millis(); // 記錄結束時間
        showChoiceButtons = false;
        return;
      }
      // "否" 按鈕 (取消解鎖)
      if (mouseX > noButtonRect.x && mouseX < noButtonRect.x + noButtonRect.w &&
          mouseY > noButtonRect.y && mouseY < noButtonRect.y + noButtonRect.h) {
        dialogState = 'cooldown_npc';
        showChoiceButtons = false;
        return;
      }
    } else if (dialogState === 'creator_ask_test') {
      // "要" 按鈕 (開始測驗)
      if (mouseX > yesButtonRect.x && mouseX < yesButtonRect.x + yesButtonRect.w &&
          mouseY > yesButtonRect.y && mouseY < yesButtonRect.y + yesButtonRect.h) {
        
        if (currentQuizNpc === 'student1') maxQuestions = 10;
        else if (currentQuizNpc === 'student2') maxQuestions = 5;
        else if (currentQuizNpc === 'student3') maxQuestions = 3;

        startQuiz();
        return;
      }
      // "不要" 按鈕 (取消)
      if (mouseX > noButtonRect.x && mouseX < noButtonRect.x + noButtonRect.w &&
          mouseY > noButtonRect.y && mouseY < noButtonRect.y + noButtonRect.h) {
        if (currentQuizNpc === 'student1') creatorTestedStudent1 = true;
        if (currentQuizNpc === 'student2') creatorTestedStudent2 = true;
        if (currentQuizNpc === 'student3') creatorTestedStudent3 = true;

        dialogState = 'cooldown_npc';
        showChoiceButtons = false;
        return;
      }
    } else if (dialogState === 'npc6_offer_upgrade') {
      // "是" 按鈕 (購買升級)
      if (mouseX > yesButtonRect.x && mouseX < yesButtonRect.x + yesButtonRect.w &&
          mouseY > yesButtonRect.y && mouseY < yesButtonRect.y + yesButtonRect.h) {
        if (score >= 10) {
          score -= 10;
          hasRangedAttack = true;
          isNpc6Upgrading = true; // 觸發小老師動畫
          npc6UpgradeFrameIndex = 0;
          playerUpgradeEffectTimer = millis(); // 觸發玩家金光特效
          if (isMusicOn) sfxMoney.play();
          dialogState = 'npc6_upgrade_success';
        } else {
          dialogState = 'npc6_upgrade_fail';
        }
        showChoiceButtons = false;
        return;
      }
      // "否" 按鈕 (取消)
      if (mouseX > noButtonRect.x && mouseX < noButtonRect.x + noButtonRect.w &&
          mouseY > noButtonRect.y && mouseY < noButtonRect.y + noButtonRect.h) {
        dialogState = 'cooldown_npc';
        showChoiceButtons = false;
        return;
      }
    } else if (dialogState === 'npc6_offer_ultimate') {
      // "是" 按鈕 (購買大招)
      if (mouseX > yesButtonRect.x && mouseX < yesButtonRect.x + yesButtonRect.w &&
          mouseY > yesButtonRect.y && mouseY < yesButtonRect.y + yesButtonRect.h) {
        if (score >= 20) {
          score -= 20;
          hasUltimateAttack = true;
          isNpc6Upgrading = true; // 觸發小老師動畫
          npc6UpgradeFrameIndex = 0;
          playerUpgradeEffectTimer = millis(); // 觸發玩家金光特效
          if (isMusicOn) sfxMoney.play();
          dialogState = 'npc6_ultimate_success';
        } else {
          dialogState = 'npc6_ultimate_fail';
        }
        showChoiceButtons = false;
        return;
      }
      // "否" 按鈕 (取消)
      if (mouseX > noButtonRect.x && mouseX < noButtonRect.x + noButtonRect.w &&
          mouseY > noButtonRect.y && mouseY < noButtonRect.y + noButtonRect.h) {
        dialogState = 'cooldown_npc';
        showChoiceButtons = false;
        return;
      }
    } else if (dialogState === 'npc7_defeated_8') {
      // "加入"
      if (mouseX > yesButtonRect.x && mouseX < yesButtonRect.x + yesButtonRect.w &&
          mouseY > yesButtonRect.y && mouseY < yesButtonRect.y + yesButtonRect.h) {
        
        pausedScreenImage = get();
        gameState = 'ending';
        endingType = 5;
        dialogState = 'end_join_cycle_anim';
        gameEndTime = millis();
        bgmBoss.stop(); // 停止 Boss 音樂

        showChoiceButtons = false;
        return;
      }
      // "拒絕"
      if (mouseX > noButtonRect.x && mouseX < noButtonRect.x + noButtonRect.w &&
          mouseY > noButtonRect.y && mouseY < noButtonRect.y + noButtonRect.h) {
        dialogState = 'npc7_refused_join';
        showChoiceButtons = false;
        return;
      }
    }
  }

  // 檢查商店按鈕點擊
  if (dialogState === 'npc3_9_confirm') {
    // 按鈕 1: 我有的是金幣
    if (mouseX > shopButton1Rect.x && mouseX < shopButton1Rect.x + shopButton1Rect.w &&
        mouseY > shopButton1Rect.y && mouseY < shopButton1Rect.y + shopButton1Rect.h) {
      dialogState = 'npc3_buy_attempt';
      return;
    }
    // 按鈕 2: 我沒這麼多金幣
    if (mouseX > shopButton2Rect.x && mouseX < shopButton2Rect.x + shopButton2Rect.w &&
        mouseY > shopButton2Rect.y && mouseY < shopButton2Rect.y + shopButton2Rect.h) {
      dialogState = 'npc3_refuse_1';
      return;
    }
    // 按鈕 3: 你搶金幣啊?
    if (mouseX > shopButton3Rect.x && mouseX < shopButton3Rect.x + shopButton3Rect.w &&
        mouseY > shopButton3Rect.y && mouseY < shopButton3Rect.y + shopButton3Rect.h) {
      dialogState = 'npc3_rude_1';
      return;
    }
  }

  // 檢查測驗後互動按鈕點擊
  if (dialogState === 'post_quiz_greeting') {
    // 按鈕 1: 沒事
    if (mouseX > postQuizButton1Rect.x && mouseX < postQuizButton1Rect.x + postQuizButton1Rect.w &&
        mouseY > postQuizButton1Rect.y && mouseY < postQuizButton1Rect.y + postQuizButton1Rect.h) {
      dialogState = 'post_quiz_nothing';
      return;
    }
    // 按鈕 2: 怎麼獲得金幣?
    if (mouseX > postQuizButton2Rect.x && mouseX < postQuizButton2Rect.x + postQuizButton2Rect.w &&
        mouseY > postQuizButton2Rect.y && mouseY < postQuizButton2Rect.y + postQuizButton2Rect.h) {
      dialogState = 'post_quiz_explain_coins';
      return;
    }
    // 按鈕 3: 我想重新挑戰
    if (mouseX > postQuizButton3Rect.x && mouseX < postQuizButton3Rect.x + postQuizButton3Rect.w &&
        mouseY > postQuizButton3Rect.y && mouseY < postQuizButton3Rect.y + postQuizButton3Rect.h) {
      dialogState = 'post_quiz_retry';
      return;
    }
  }

  // 檢查班長後續互動按鈕點擊
  if (dialogState === 'npc3_post_key_question') {
    if (mouseX > postKeyButton1Rect.x && mouseX < postKeyButton1Rect.x + postKeyButton1Rect.w &&
        mouseY > postKeyButton1Rect.y && mouseY < postKeyButton1Rect.y + postKeyButton1Rect.h) {
      dialogState = 'npc3_truth';
      return;
    }
    if (mouseX > postKeyButton2Rect.x && mouseX < postKeyButton2Rect.x + postKeyButton2Rect.w &&
        mouseY > postKeyButton2Rect.y && mouseY < postKeyButton2Rect.y + postKeyButton2Rect.h) {
      dialogState = 'npc3_nothing';
      return;
    }
  }

  // 檢查老師互動按鈕點擊
  if (dialogState === 'npc7_1_greeting') {
    // 按鈕 1: 我要去開大門
    if (mouseX > teacherOption1Rect.x && mouseX < teacherOption1Rect.x + teacherOption1Rect.w &&
        mouseY > teacherOption1Rect.y && mouseY < teacherOption1Rect.y + teacherOption1Rect.h) {
      // 原本的 npc7_2_gate 是玩家說話，現在直接從老師的回應開始
      dialogState = 'npc7_2_gate';
      return;
    }
    // 按鈕 2: 鄰居家小狗生了
    if (mouseX > teacherOption2Rect.x && mouseX < teacherOption2Rect.x + teacherOption2Rect.w &&
        mouseY > teacherOption2Rect.y && mouseY < teacherOption2Rect.y + teacherOption2Rect.h) {
      dialogState = 'npc7_3_dog';
      return;
    }
    // 按鈕 3: 趕去教室讀書
    if (mouseX > teacherOption3Rect.x && mouseX < teacherOption3Rect.x + teacherOption3Rect.w &&
        mouseY > teacherOption3Rect.y && mouseY < teacherOption3Rect.y + teacherOption3Rect.h) {
      dialogState = 'npc7_4_study';
      return;
    }
  }
}

function keyPressed() {
  // 提示貓速率快速切換：按 1 => 1.2, 2 => 1.8, 3 => 2.0
  if (key === '1') {
    hintCatAnimSpeed = 1.2;
    return;
  }
  if (key === '2') {
    hintCatAnimSpeed = 1.8;
    return;
  }
  if (key === '3') {
    hintCatAnimSpeed = 2.0;
    return;
  }

  // 新增：創造者模式按 T 傳送
  if ((key === 't' || key === 'T') && playerName === '530') {
    let targets = [character2X, character5X, character6X, character3X, character7X];
    if (!isCharacter4Gone) {
      targets.push(character4X);
    }
    // 排序 NPC 位置
    targets.sort((a, b) => a - b);
    
    // 尋找下一個 NPC (位於當前位置右側)
    let nextTarget = targets.find(t => t > characterX + 20);
    
    // 如果右側沒有 NPC，則回到最左側的 NPC
    if (nextTarget === undefined) {
      nextTarget = targets[0];
    }
    
    characterX = nextTarget;
    velocityY = 0; // 重置垂直速度
    isJumping = false; // 重置跳躍狀態
  }

  // ESC 鍵切換暫停
  if (keyCode === ESCAPE && gameState === 'playing') {
    if (isGamePaused) {
      isGamePaused = false;
      isPausedInstructionsVisible = false; // 確保關閉說明
      pausedScreenImage = null;
      if (isMusicOn) bgmPlay.loop();
    } else {
      isGamePaused = true;
      pausedScreenImage = get();
      if (bgmPlay.isPlaying()) bgmPlay.pause();
    }
    return; // 避免 ESC 觸發其他邏輯
  }
  const isDialogActive = dialogState !== 'none' && dialogState !== 'seeking_npc' && dialogState !== 'completed' && dialogState !== 'cooldown_npc';
  // 當按下空白鍵，且角色不在跳躍或攻擊中時，觸發近身攻擊
  if (key === ' ' && !isJumping && !isAttacking && !isDialogActive) {
    isAttacking = true;
    currentFrameIndex = 0; // 從第一幀開始播放
    lastAnimationType = 'attack';
  }

  // 若已升級，按 F 鍵觸發遠距攻擊（不會取代空白鍵的近身攻擊）
  if (key && key.toLowerCase() === 'f' && hasRangedAttack && !isJumping && !isAttacking && !isDialogActive) {
    isAttacking = true;
    currentFrameIndex = 0;
    lastAnimationType = 'rangedAttack';
    // 發射投射物
    projectiles.push({x: characterX, y: characterY, startX: characterX, dir: direction, frameIndex: 0});
    lastProjectileSpawnTime = millis();
  }

  // 新增：大招攻擊 (向下鍵)
  if (keyCode === DOWN_ARROW && hasUltimateAttack && !isDialogActive && !isUltimateAttacking && !isJumping && !isAttacking) {
    if (millis() - lastUltimateAttackTime >= 10000) {
      lastUltimateAttackTime = millis();
      
      // 恢復血量
      playerHealth = min(80, playerHealth + 10);
      coinEffectText = "+10 HP";
      coinEffectX = characterX;
      coinEffectY = characterY - 50;
      coinEffectTimer = millis();

      // 啟動大招動畫
      isUltimateAttacking = true;
      ultimateFrameIndex = 0;
      playerUpgradeEffectTimer = millis();
      ultimateHasDamagedBoss = false; // 重置傷害旗標
    }
  }

  // 當輸入框可見時，按下 Enter 鍵
  if (keyCode === ENTER) {
    if (dialogState === '2_inputName') {
      const name = inputField.value().trim();
      if (name !== '') {
        playerName = name;
        hasProvidedName = true; // 標記已提供名字
        inputField.value('');
        inputField.hide();
        inputFieldVisible = false;
        
        if (name === '530') {
          // 創造者模式：跳過強制對話，直接進入冷卻狀態讓玩家自由走動
          dialogState = 'cooldown_npc';
          // 創造者模式福利：獲得金幣、成就，並解除空氣牆限制
          score = 1000;
          hasScholarBadge = true;
          hasQuizMasterTitle = true;
          isStudent1QuizCompleted = true;
          isStudent3QuizCompleted = true;
          hasModelStudentTitle = true;
          isStudent2QuizCompleted = true;
          hasNonsenseMasterTitle = true;
        } else {
          dialogState = '2_1_greeting'; // 進入打招呼與劇情對話
          finalDialogTimer = millis(); // 啟動計時器
        }
      }
    } else {
      // 新增：按 Enter 也能推進對話 (排除需要選擇按鈕的狀態)
      const isChoiceState = dialogState === '3_confirmStart' || dialogState === 'npc3_9_confirm' || dialogState === 'confirm_unlock' || dialogState === 'post_quiz_greeting' || dialogState === 'npc3_post_key_question' || dialogState === 'creator_ask_test' || dialogState === 'npc6_offer_upgrade' || dialogState === 'npc6_offer_ultimate' || dialogState === 'npc7_defeated_8';
      if ((gameState === 'playing' || gameState === 'ending') && isDialogActive && !isChoiceState) {
        handleDialogueInput();
      }
    }
  }
}

// 處理滑鼠拖曳 (用於音量滑桿)
function mouseDragged() {
  if (isDraggingVolumeSlider) {
    masterVolume = constrain(map(mouseX, volumeSliderRect.x, volumeSliderRect.x + volumeSliderRect.w, 0, 1), 0, 1);
    bgmStart.setVolume(masterVolume);
    bgmPlay.setVolume(masterVolume);
    bgmBoss.setVolume(masterVolume);
        bgmBoss.setVolume(masterVolume);
    sfxMoney.setVolume(masterVolume);
    sfxGet.setVolume(masterVolume);
    sfxGlitch.setVolume(masterVolume);
    sfxButton.setVolume(masterVolume);
  }
}

// 處理滑鼠放開
function mouseReleased() {
  isDraggingVolumeSlider = false;
}

// 按下 "是" 按鈕後觸發的函式
function startQuiz() {
  showChoiceButtons = false;
  if (currentQuizNpc === 'student1') {
    // 只有在第一次測驗時重置分數，若已完成過(重玩刷金幣)則保留分數
    if (!isStudent1QuizCompleted) {
      score = 0; 
    }
    student1ReplayConsecutiveCorrect = 0; // 重置連續答對計數
  } else {
    student2CorrectCount = 0; // 學生2/小老師測驗時重置答對題數
    student3CorrectCount = 0;
  }
  questionsAnswered = 0; // 重置已回答題數
  currentQuestionWrongCount = 0; // 重置答錯次數
  // 從題庫中隨機選一題
  let targetTable;
  
  if (quizMode === 'edutech') {
    targetTable = quizEduTechTable;
    // 每次開始測驗時重新洗牌，確保題目順序隨機
    initEduTechMode();
    
    let rowIndex = eduTechQuestionIndices[eduTechQuestionIndex];
    currentQuestion = targetTable.getRow(rowIndex);
    eduTechQuestionIndex++; // 準備下一題
  } else if (quizMode === 'english') {
    targetTable = quizEnglishTable;
    // 每次開始測驗時重新洗牌，確保題目順序隨機
    initEnglishMode();
    let rowIndex = englishQuestionIndices[englishQuestionIndex];
    currentQuestion = targetTable.getRow(rowIndex);
    englishQuestionIndex++; // 準備下一題
  } else {
    // 原本模式
    if (currentQuizNpc === 'student2') targetTable = quizHardTable;
    else if (currentQuizNpc === 'student3') targetTable = quiz3Table;
    else targetTable = quizTable;
    currentQuestion = targetTable.getRow(floor(random(targetTable.getRowCount())));
  }

  generateOptions(); // 生成選項
  dialogState = '5_inputAnswer'; // 直接進入回答狀態，顯示選項
  finalDialogTimer = millis(); // 啟動計時器，用於短暫顯示問題
}

// 按下 "否" 按鈕或離開範圍時觸發的函式
function endDialog() {
  showChoiceButtons = false;
  dialogState = 'completed'; // 標記為已完成，避免立即重新觸發
  // 可以加一個 "好吧，下次再來！" 的訊息
  dialogMessage = "好吧，下次再來！";
  dialogState = '6_showFeedback';
  finalDialogTimer = millis();
}

function resetGameToStartScreen() {
  if (isReloading) return;
  isReloading = true;
  reloadTimer = millis();
  
  // 停止所有音樂
  if (bgmPlay.isPlaying()) bgmPlay.stop();
  if (bgmBoss.isPlaying()) bgmBoss.stop();
  if (bgmStart.isPlaying()) bgmStart.stop();
  
  // 播放故障音效增加氛圍
  if (isMusicOn && sfxGlitch) {
    sfxGlitch.play();
  }
}

// 新增：刷新頁面動畫
function drawReloadAnimation() {
  let elapsed = millis() - reloadTimer;
  let duration = 2000; // 動畫持續 2 秒

  push();
  background(0); // 黑底

  // 1. 隨機代碼雨背景 (綠色)
  textAlign(LEFT, TOP);
  textSize(14);
  fill(0, 255, 50, 150);
  if (frameCount % 2 === 0) {
    for (let i = 0; i < 20; i++) {
      let x = random(width);
      let y = random(height);
      // 隨機生成類似代碼的字符
      let char = String.fromCharCode(0x30A0 + random(96)); 
      text(char, x, y);
    }
  }

  // 2. 中央文字 "SYSTEM REBOOT"
  textAlign(CENTER, CENTER);
  textSize(48);
  textFont('monospace');
  let txt = "SYSTEM REBOOT";
  
  // 文字故障效果
  if (random() < 0.1) {
    fill(255, 0, 0);
    text(txt, width/2 + random(-5, 5), height/2 + random(-5, 5));
    fill(0, 255, 255);
    text(txt, width/2 + random(-5, 5), height/2 + random(-5, 5));
  } else {
    fill(255);
    text(txt, width/2, height/2);
  }

  // 3. 進度條
  let progress = constrain(elapsed / duration, 0, 1);
  let barW = 300;
  let barH = 10;
  let barX = width / 2 - barW / 2;
  let barY = height / 2 + 60;

  noFill();
  stroke(255);
  strokeWeight(2);
  rect(barX, barY, barW, barH);

  noStroke();
  fill(0, 255, 0);
  rect(barX + 2, barY + 2, (barW - 4) * progress, barH - 4);

  // 4. 隨機系統訊息
  textSize(16);
  fill(200);
  let status = "";
  if (progress < 0.3) status = "Clearing Memory Dump...";
  else if (progress < 0.6) status = "Restoring World State...";
  else if (progress < 0.9) status = "Initializing NPCs...";
  else status = "Ready.";
  text(status, width/2, barY + 30);

  pop();

  // 動畫結束後刷新頁面
  if (elapsed > duration) {
    window.location.reload();
  }
}

// 重置對話相關的所有變數
function resetDialog() {
  dialogState = 'none';
  inputField.hide();
  inputFieldVisible = false;
  showChoiceButtons = false;
  // 注意：不重置 playerName 和 hasProvidedName，以便下次可以直接繼續
  dialogMessage = '';
}

// 繪製通關統計畫面
function drawStatsScreen() {
  push();
  // 半透明背景框
  rectMode(CENTER);
  
  let textColor, noAchieveColor;
  
  if (endingType === 3) {
    fill(255, 255, 255, 204); // 80% 透明度白底
    stroke(0);
    textColor = 0;
    noAchieveColor = 100;
  } else {
    fill(0, 0, 0, 220);
    stroke(255);
    textColor = 255;
    noAchieveColor = 180;
  }
  
  strokeWeight(2);
  rect(width / 2, height / 2, width * 0.8, height * 0.8, 20);

  fill(textColor);
  noStroke();
  textAlign(CENTER, TOP);
  
  let startY = height / 2 - height * 0.35;
  textSize(36);
  text("✨ 通關統計 ✨", width / 2, startY);
  
  // 新增：結局5的無限符號圖示
  if (endingType === 5) {
    push();
    translate(width / 2, startY + 50);
    noFill();
    stroke(138, 43, 226); // BlueViolet
    strokeWeight(4);
    
    // 繪製無限符號
    beginShape();
    for (let t = 0; t < TWO_PI; t += 0.1) {
      let a = 30;
      let x = (a * cos(t)) / (1 + sin(t) * sin(t));
      let y = (a * sin(t) * cos(t)) / (1 + sin(t) * sin(t));
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
    
    startY += 50;
  }

  startY += 60;
  textSize(24);
  let duration = ((gameEndTime - gameStartTime) / 1000).toFixed(1);
  text(`總遊玩時間: ${duration} 秒`, width / 2, startY);
  
  startY += 40;
  text(`答對題數: ${correctAnswersCount}`, width / 2, startY);
  
  // --- 新增：成就列表 ---
  startY += 40;
  text("🏆 成就列表 🏆", width / 2, startY);
  
  let achievements = [];
  if (hasScholarBadge) achievements.push("學霸勳章");
  if (hasQuizMasterTitle) achievements.push("刷題王");
  if (hasModelStudentTitle) achievements.push("模範生");
  if (hasNonsenseMasterTitle) achievements.push("胡言亂語大師");
  if (parseFloat(duration) < 120) achievements.push("速通大師"); // 120秒內通關
  if (wrongAnswersLog.length === 0 && questionsAnswered > 0) achievements.push("完美主義者");

  startY += 30;
  textSize(20);
  if (achievements.length > 0) {
    fill(255, 215, 0); // 金色文字
    text(achievements.join("  |  "), width / 2, startY);
    fill(textColor); // 恢復文字顏色
  } else {
    fill(noAchieveColor); text("無特殊成就", width / 2, startY); fill(textColor);
  }
  textSize(24); // 恢復標題大小

  startY += 50;
  text("--- 錯題回顧 ---", width / 2, startY);
  let titleBottomY = startY + 15;

  // 先計算重新開始按鈕的位置，以確定白格的底部邊界
  let btnW = 200;
  let btnH = 50;
  let btnX = width / 2 - btnW / 2;
  let modalBottom = height / 2 + height * 0.8 / 2;
  let btnY = modalBottom - btnH - 20; // 定位在統計框底部
  restartButtonRect = {x: btnX, y: btnY, w: btnW, h: btnH};

  checkHover(restartButtonRect, 'restart');

  // 定義錯題回顧的白格區域
  let boxTop = titleBottomY + 10;
  let boxBottom = btnY - 10;
  let boxH = boxBottom - boxTop;
  let boxW = width * 0.6;
  let boxX = width / 2 - boxW / 2;

  // 繪製 50% 透明度的白色格子
  rectMode(CORNER);
  fill(255, 255, 255, 127); // 127 約為 50% 透明度
  noStroke();
  rect(boxX, boxTop, boxW, boxH, 10);

  textSize(18);
  if (wrongAnswersLog.length === 0) {
    fill(0, 100, 0); // 深綠色文字
    textAlign(CENTER, CENTER);
    text("太厲害了！沒有答錯任何題目！", width / 2, boxTop + boxH / 2);
    nextPageButtonRect = null;
  } else {
    // 繪製上一頁箭頭 (左箭頭) - 僅在非第一頁顯示
    if (wrongAnswersPage > 0) {
      fill(0);
      let arrowLeftX = boxX + 30;
      let arrowY = boxTop + boxH / 2;
      triangle(arrowLeftX, arrowY, arrowLeftX + 20, arrowY - 10, arrowLeftX + 20, arrowY + 10);
      prevPageButtonRect = {x: arrowLeftX, y: arrowY - 20, w: 40, h: 40};
      checkHover(prevPageButtonRect, 'prevPage');
    } else {
      prevPageButtonRect = null;
    }

    textAlign(LEFT, TOP);
    // 調整文字起始位置，若有左箭頭則向右移
    let textX = (wrongAnswersPage > 0) ? boxX + 60 : boxX + 20;
    let textY = boxTop + 15;
    // 調整文字最大寬度，避開左右箭頭
    let maxTextWidth = boxW - (textX - boxX) - 50; 
    let itemsPerPage = 3; // 每頁顯示 3 題
    
    let startIndex = wrongAnswersPage * itemsPerPage;
    let endIndex = min(startIndex + itemsPerPage, wrongAnswersLog.length);

    for (let i = startIndex; i < endIndex; i++) {
      let item = wrongAnswersLog[i];
      fill(200, 0, 0); // 深紅色顯示錯題
      let str = `Q: ${item.question}  (A: ${item.answer})`;
      
      // 使用 text 的寬度參數來自動換行
      text(str, textX, textY, maxTextWidth);
      
      // 固定每個項目的高度間距
      textY += boxH / itemsPerPage;
    }

    // 如果錯題超過一頁，顯示翻頁箭頭
    if (wrongAnswersLog.length > itemsPerPage) {
      fill(0);
      let arrowX = boxX + boxW - 30;
      let arrowY = boxTop + boxH / 2;
      triangle(arrowX, arrowY - 10, arrowX + 20, arrowY, arrowX, arrowY + 10);
      nextPageButtonRect = {x: arrowX - 10, y: arrowY - 20, w: 40, h: 40};
      checkHover(nextPageButtonRect, 'nextPage');
    } else {
      nextPageButtonRect = null;
    }
  }
  
  rectMode(CORNER);
  
  let isRestartHover = mouseX > restartButtonRect.x && mouseX < restartButtonRect.x + restartButtonRect.w &&
                       mouseY > restartButtonRect.y && mouseY < restartButtonRect.y + restartButtonRect.h;
  if (isRestartHover) {
    fill(255, 215, 0); // 金色
  } else {
    fill(255);
  }
  stroke(0); strokeWeight(2);
  rect(btnX, btnY, btnW, btnH, 10);
  fill(0); noStroke(); textAlign(CENTER, CENTER); textSize(24);
  text("重新開始", width/2, btnY + btnH/2);
  
  pop();
}

// --- 新增：生成選項 ---
function generateOptions() {
  let correctAnswer = currentQuestion.getString('答案');
  let targetTable;
  
  if (quizMode === 'edutech') {
    targetTable = quizEduTechTable;
  } else if (quizMode === 'english') {
    targetTable = quizEnglishTable;
  } else {
    if (currentQuizNpc === 'student2') targetTable = quizHardTable;
    else if (currentQuizNpc === 'student3') targetTable = quiz3Table;
    else targetTable = quizTable;
  }
  
  let allRows = targetTable.getRows();
  let potentialWrongs = [];
  
  for (let row of allRows) {
    let ans = row.getString('答案');
    if (ans !== correctAnswer && !potentialWrongs.includes(ans)) {
      potentialWrongs.push(ans);
    }
  }
  
  // 隨機選取兩個錯誤答案
  potentialWrongs = shuffle(potentialWrongs);
  let wrongOptions = potentialWrongs.slice(0, 2);
  
  // 組合正確答案與錯誤答案並打亂
  currentOptions = [correctAnswer, ...wrongOptions];
  currentOptions = shuffle(currentOptions);
}

// --- 新增：顯示選項按鈕 ---
function showQuizOptions() {
  const boxH = height * 0.25;
  const boxW = width * 0.85;
  const boxX = (width - boxW) / 2;
  const boxY = height - boxH - 20;

  const btnW = 300;
  const btnH = 50;
  const gap = 15;
  
  const rightEdge = boxX + boxW;
  const buttonX = rightEdge - btnW - 10; // 改為靠右對齊 (頭像上方)
  const startY = boxY - 20;

  optionButtonRects = [];

  textSize(20);
  textAlign(CENTER, CENTER);
  rectMode(CORNER);

  for (let i = 0; i < currentOptions.length; i++) {
    let btnY = startY - (btnH + gap) * (currentOptions.length - 1 - i) - btnH;
    let btnRect = {x: buttonX, y: btnY, w: btnW, h: btnH, text: currentOptions[i]};
    
    // 新增：答錯時的震動特效
    if (answerFeedback && answerFeedback.text === currentOptions[i] && !answerFeedback.correct) {
      btnRect.x += random(-5, 5);
      btnRect.y += random(-5, 5);
    }

    optionButtonRects.push(btnRect);
    checkHover(btnRect, 'option' + i);

    let isHover = mouseX > btnRect.x && mouseX < btnRect.x + btnRect.w &&
                  mouseY > btnRect.y && mouseY < btnRect.y + btnRect.h;
    
    push();
    
    // 新增：答對時的綠色光暈特效
    if (answerFeedback && answerFeedback.text === currentOptions[i] && answerFeedback.correct) {
      push();
      noFill();
      stroke(0, 255, 0, 100); // 外層柔和光暈
      strokeWeight(15);
      rect(btnRect.x, btnRect.y, btnRect.w, btnRect.h, 10);
      stroke(0, 255, 0, 200); // 內層較亮光暈
      strokeWeight(8);
      rect(btnRect.x, btnRect.y, btnRect.w, btnRect.h, 10);
      pop();
    }

    if (isHover) {
      fill(230); 
      stroke(255, 215, 0); 
    } else {
      fill(255);
      stroke(0);
    }
    strokeWeight(2);
    rect(btnRect.x, btnRect.y, btnRect.w, btnRect.h, 10);
    
    if (answerFeedback && answerFeedback.text === currentOptions[i]) {
      fill(answerFeedback.correct ? 'green' : 'red');
    } else {
      fill(0);
    }
    noStroke();
    text(currentOptions[i], btnRect.x + btnRect.w / 2, btnRect.y + btnRect.h / 2);
    pop();
  }
}

// --- 新增：檢查答案 ---
function checkAnswer(answer) {
  if (answerFeedback) return; // 防止重複點擊

  const correctAnswer = currentQuestion.getString('答案');
  const isCorrect = (answer === correctAnswer);

  // 設定回饋狀態
  answerFeedback = { text: answer, correct: isCorrect };
  
  // 延遲執行實際邏輯，讓玩家看到顏色變化
  setTimeout(() => {
    processAnswer(answer);
    answerFeedback = null; // 清除回饋
  }, 500); // 0.5秒延遲
}

function processAnswer(answer) {
  const correctAnswer = currentQuestion.getString('答案');
  
  // --- 學生2 與 小老師 的測驗邏輯 (答錯也會進入下一題) ---
  if (currentQuizNpc === 'student2' || currentQuizNpc === 'student3') {
    questionsAnswered++;
    if (answer === correctAnswer) {
      score += 10;
      if (currentQuizNpc === 'student2') student2CorrectCount++;
      if (currentQuizNpc === 'student3') student3CorrectCount++;
      correctAnswersCount++;
      
      // 金幣特效
      coinEffectText = "+$$";
      coinEffectX = characterX;
      coinEffectY = characterY;
      coinEffectTimer = millis();
    } else {
      score -= 5;
      wrongAnswersLog.push({
        question: currentQuestion.getString('題目'),
        answer: correctAnswer
      });

      // 新增：答錯時觸發提示貓
      if (!isHintCatActive) {
        isHintCatActive = true;
        isHintCatRunning = true;
        hintCatX = bgScrollX + width + 100;
        if (hintCatX < characterX + 100) hintCatX = characterX + 400;
      }
      currentHintText = "可惜！正確答案是: " + correctAnswer;
      hintBubbleTimer = millis();
    }

    if (questionsAnswered >= maxQuestions) {
      if (currentQuizNpc === 'student2') {
          isStudent2QuizCompleted = true; // 標記學生2測驗完成
          if (playerName === '530') creatorTestedStudent2 = true;
          if (student2CorrectCount === maxQuestions) {
            dialogState = 'npc5_quiz_perfect';
            if (!hasScholarBadge) {
              hasScholarBadge = true; // 全對獲得學霸勳章
              triggerRewardAnimation('scholar_badge'); // 觸發獲得勳章動畫
            }
          } else if (student2CorrectCount > 0) {
            dialogState = 'npc5_quiz_good';
          } else {
            dialogState = 'npc5_quiz_bad';
          }
      } else if (currentQuizNpc === 'student3') {
          isStudent3QuizCompleted = true;
          if (playerName === '530') creatorTestedStudent3 = true;
          if (student3CorrectCount === maxQuestions) {
            dialogState = 'npc6_quiz_perfect';
            if (!hasModelStudentTitle) {
              hasModelStudentTitle = true;
              triggerRewardAnimation('model_student');
            }
          } else {
            dialogState = 'npc6_completed';
          }
      }
    } else {
      if (quizMode === 'edutech') {
        let targetTable = quizEduTechTable;
        if (eduTechQuestionIndices.length === 0) initEduTechMode();
        if (eduTechQuestionIndex >= eduTechQuestionIndices.length) initEduTechMode();
        let rowIndex = eduTechQuestionIndices[eduTechQuestionIndex];
        currentQuestion = targetTable.getRow(rowIndex);
        eduTechQuestionIndex++;
      } else if (quizMode === 'english') {
        let targetTable = quizEnglishTable;
        if (englishQuestionIndices.length === 0) initEnglishMode();
        if (englishQuestionIndex >= englishQuestionIndices.length) initEnglishMode();
        let rowIndex = englishQuestionIndices[englishQuestionIndex];
        currentQuestion = targetTable.getRow(rowIndex);
        englishQuestionIndex++;
      } else {
        let targetTable = (currentQuizNpc === 'student2') ? quizHardTable : quiz3Table;
        currentQuestion = targetTable.getRow(floor(random(targetTable.getRowCount())));
      }
      currentQuestionWrongCount = 0;
      generateOptions();
      dialogState = '5_inputAnswer';
      finalDialogTimer = millis();
    }
    return; // 結束函式，不執行下方學生1的邏輯
  }

  // --- 學生1 的測驗邏輯 (需答對才進入下一題) ---
  if (answer === correctAnswer) {
    score += 10;
    correctAnswersCount++;
    questionsAnswered++;
    
    // 檢查刷題王條件 (僅限學生1)
    if (currentQuizNpc === 'student1') {
      student1ReplayConsecutiveCorrect++;
      if (isStudent1QuizCompleted && student1ReplayConsecutiveCorrect >= 5) {
        if (!hasQuizMasterTitle) {
          hasQuizMasterTitle = true;
          triggerRewardAnimation('quiz_master'); // 觸發獲得稱號動畫
        }
      }
    }

    // 觸發金幣特效
    coinEffectText = "+$$";
    coinEffectX = characterX;
    coinEffectY = characterY;
    coinEffectTimer = millis();
    
    if (isHintCatActive) {
      if (currentQuestionWrongCount > 0) {
        let consolationPrize = 5;
        score += consolationPrize;
        currentHintText = "終於答對了！給你 " + consolationPrize + " 金幣當安慰獎！";
      } else {
        currentHintText = "其實你蠻厲害的!";
      }
      hintBubbleTimer = millis();
    }
    
    if (questionsAnswered >= maxQuestions) {
      if (currentQuizNpc === 'student1') {
        isStudent1QuizCompleted = true; // 標記學生1測驗完成
        if (playerName === '530') creatorTestedStudent1 = true;
        if (score === 100) {
          isCharacter2Dancing = true;
          danceFrameIndex2 = 0;
          dancePauseTimer = -1;
          dialogState = 'completed';
        } else if (score >= 60) {
          dialogState = 'quiz_pass_1';
        } else {
          dialogState = 'quiz_fail_1';
        }
      }
    } else {
      if (quizMode === 'edutech') {
        let targetTable = quizEduTechTable;
        if (eduTechQuestionIndices.length === 0) initEduTechMode();
        if (eduTechQuestionIndex >= eduTechQuestionIndices.length) initEduTechMode();
        let rowIndex = eduTechQuestionIndices[eduTechQuestionIndex];
        currentQuestion = targetTable.getRow(rowIndex);
        eduTechQuestionIndex++;
      } else if (quizMode === 'english') {
        let targetTable = quizEnglishTable;
        if (englishQuestionIndices.length === 0) initEnglishMode();
        if (englishQuestionIndex >= englishQuestionIndices.length) initEnglishMode();
        let rowIndex = englishQuestionIndices[englishQuestionIndex];
        currentQuestion = targetTable.getRow(rowIndex);
        englishQuestionIndex++;
      } else {
        let targetTable = (currentQuizNpc === 'student2') ? quizHardTable : quizTable;
        currentQuestion = targetTable.getRow(floor(random(targetTable.getRowCount())));
      }
      currentQuestionWrongCount = 0; // 新題目重置答錯次數
      generateOptions();
      dialogState = '5_inputAnswer'; // 直接進入回答狀態，顯示選項
      finalDialogTimer = millis();
    }
  } else {
    score -= 5;
    wrongAnswersLog.push({
      question: currentQuestion.getString('題目'),
      answer: correctAnswer
    });
    currentQuestionWrongCount++; // 增加答錯次數
    
    // 答錯重置連續答對計數 (僅限學生1)
    if (currentQuizNpc === 'student1') {
      student1ReplayConsecutiveCorrect = 0;
    }
    
    if (!isHintCatActive) {
      isHintCatActive = true;
      isHintCatRunning = true;
      hintCatX = bgScrollX + width + 100;
      if (hintCatX < characterX + 100) hintCatX = characterX + 400;
    }
    
    // 如果連續答錯 3 次，直接顯示答案
    if (currentQuestionWrongCount >= 3) {
      currentHintText = "正確答案是: " + correctAnswer;
    } else {
      // 取得題目中的提示
      let hint = null;
      // 檢查是否有 '提示' 欄位
      if (quizTable.columns.includes('提示')) {
        hint = currentQuestion.getString('提示');
      }

      if (hint && hint.trim() !== '') {
        currentHintText = "提示: " + hint;
      } else {
        // 若無提示，自動根據答案生成 (顯示第一個字)
        if (correctAnswer && correctAnswer.length > 0) {
          currentHintText = "提示: " + correctAnswer.charAt(0) + "...";
        } else {
          currentHintText = "加油！再試一次！";
        }
      }
    }
    hintBubbleTimer = millis();
    
    // 答錯時，題目不變，重新打亂選項
    currentOptions = shuffle(currentOptions);
  }
}

// --- 新增：生成隨機字串函式 ---
function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// --- 新增：初始化教育科技概論模式 ---
function initEduTechMode() {
  eduTechQuestionIndices = [];
  for (let i = 0; i < quizEduTechTable.getRowCount(); i++) {
    eduTechQuestionIndices.push(i);
  }
  eduTechQuestionIndices = shuffle(eduTechQuestionIndices); // 洗牌題目索引
  eduTechQuestionIndex = 0;
}

// --- 新增：初始化英文模式 ---
function initEnglishMode() {
  englishQuestionIndices = [];
  for (let i = 0; i < quizEnglishTable.getRowCount(); i++) {
    englishQuestionIndices.push(i);
  }
  englishQuestionIndices = shuffle(englishQuestionIndices); // 洗牌題目索引
  englishQuestionIndex = 0;
}

// --- 新增：滑鼠滾輪事件 ---
function mouseWheel(event) {
  // Boss 戰教學介面滾動
  if (dialogState === 'boss_tutorial') {
    let boxHeight = height * 0.7;
    let boxTopY = height / 2 - boxHeight / 2;
    let textStartY = boxTopY + 100;
    let boxBottomY = height / 2 + boxHeight / 2;
    let textEndY = boxBottomY - 100; // 底部留出空間給警告文字
    let textAreaHeight = textEndY - textStartY;

    tutorialScrollY -= event.delta;
    tutorialScrollY = constrain(tutorialScrollY, 0, max(0, tutorialTextTotalHeight - textAreaHeight));
  }
}
