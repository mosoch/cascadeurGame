/* Debugging */

var sw01 = false;
var adr;
var initialDate = new Date();
var initialTime = initialDate.getTime();

/* Gameboard properties */

var diff;
var username;

var bigMonsterPoints = 96;
var littleMonsterPoints = 46;
var bossPoints = 500;
var gemPoints = 700;
var easyFactor = 0.75;

var empty = new Image; 
empty.src = "empty.bmp";
var grass2 = new Image; 
grass2.src = "grass2.bmp";
var flower = new Image; 
flower.src = "flower.bmp";
var flower2 = new Image; 
flower2.src = "flower2.bmp";
var tinyRock = new Image; 
tinyRock.src = "tinyRock.bmp";
var tinyRock2 = new Image; 
tinyRock2.src = "tinyRock2.bmp";


var bush = new Image;
bush.src = "bush.bmp";
var flatBush = new Image;
flatBush.src = "flatBush.bmp";

var rock = new Image;
rock.src = "rock.bmp";
var gravel = new Image;
gravel.src = "gravel.bmp";

var sign = new Image;
sign.src = "sign.bmp";
var signArray = new Array(248,11000);

var gem0 = new Image;
gem0.src = "gem0.bmp";
var gem1 = new Image;
gem1.src = "gem1.bmp";
// var gemCell = 368;
var gemCell = 7196;
var gemFlash;

var wall0 = new Image;
wall0.src = "wall0.bmp";
var wall1 = new Image;
wall1.src = "wall1.bmp";
var wall2 = new Image;
wall2.src = "wall2.bmp";
var wall3 = new Image;
wall3.src = "wall3.bmp";
var wall4 = new Image;
wall4.src = "wall4.bmp";
var wall5 = new Image;
wall5.src = "wall5.bmp";
var wall6 = new Image;
wall6.src = "wall6.bmp";
var wall7 = new Image;
wall7.src = "wall7.bmp";
var wall8 = new Image;
wall8.src = "wall8.bmp";
var wall9 = new Image;
wall9.src = "wall9.bmp";
var wall10 = new Image;
wall10.src = "wall10.bmp";

var wallArray = new Array(2645,2646,2647,2648,2649,2766,2770,2891,3008,3012,3129,3133,3250,3251,3253,3254,
			  2765,2764,2763,2762,2761,2759,2880,3007,3006,3005,3004,3003,3001,3122,3124,2638,2639,2640,
			  3243,3245,3364,3366,3487,3608,3607,3606,3605,3363,3362,3241,3240,3239,3360,3604,3725,3724,3723,3602,
			  3601,3359,3600,3358,3599,3357,3598,3356,
			  3235,3114,2993,2992,2991,2990,2989,2988,2987,2986,2985,
			  3719,3840,3961,3960,3959,3958,3957,3956,3955,3954,3953,
			  3106,3227,3348,3469,3590,3832,
			  3831,3830,3829,3828,3827,3589,3588,3587,3585,3706,
			  3466,3345,3344,3343,3342,3584,3583,3341,3582,3340,
			  3703,3702,3701,3700,3579,3219,3218,3217,3216,3337,
			  3336,3335,3334,3578,3576,3455,
			  3697,3818,3939,4060,4181,3699,3820,3941,4062,4183,
			  4180,4179,4184,4185,4300,4421,4542,4306,4427,4548,
			  4543,4544,4545,4546,4547,
			  
			  3065,3066,3067,3068,3069,3070,3071,3072,3073,3075,3076,3077,3078,3079,3080,3081,3082,3083,3084,3085,
			  3186,3194,3206,
			  3307,3309,3310,3311,3312,3313,3315,3316,3317,3318,3319,3320,3321,3323,3324,3325,3327,
			  3428,3434,3442,3446,3448,
			  3549,3550,3551,3552,3553,3554,3555,3556,3557,3559,3560,3561,3563,3564,3565,3567,3569,
			  3670,3674,3678,3680,3686,3688,3690,
			  3791,3793,3795,3797,3798,3799,3801,3803,3804,3805,3806,3807,3809,3811,
			  3912,3914,3916,3918,3922,3930,3932,
			  4033,4035,4037,4039,4041,4042,4043,4045,4046,4047,4048,4049,4050,4051,4053,
			  4154,4156,4158,4164,4166,4174,
			  4273,4274,4275,4277,4279,4280,4281,4282,4283,4285,4287,4289,4290,4291,4293,4294,4295,
			  4394,4398,4404,4406,4408,4412,4414,4416,
			  4515,4517,4518,4519,4520,4521,4522,4523,4525,4527,4529,4530,4531,4533,4535,4537,
			  4636,4638,4644,4646,4648,4652,4654,4658,
			  4757,4759,4761,4762,4763,4764,4765,4767,4769,4770,4771,4773,4775,4776,4777,4778,4779,
			  4878,4880,4882,4886,4892,4894,4900,
			  4999,5001,5003,5005,5007,5008,5009,5011,5012,5013,5015,5016,5017,5018,5019,5021,
			  5122,5124,5126,5130,5136,5140,5142,
			  5241,5242,5243,5245,5247,5248,5249,5251,5252,5253,5254,5255,5256,5257,5259,5261,5263,
			  5362,5366,5370,5380,5384,
			  5483,5485,5486,5487,5488,5489,5491,5492,5493,5494,5495,5496,5497,5498,5499,5500,5501,5502,5503,5504,5505,
			  5604,5612,
			  5725,5726,5727,5728,5729,5730,5731,5733,
			  5852,5854,5973,5975,
			  6092,6093,6094,6096,6097,6098,
			  6213,6219,6334,6340,
			  6455,6456,6457,6458,6459,6460,6461,
			  
			  9878,9880,
			  9999,10001,
			  10120,10121,10122,
			  
			  4998,4997,4996,4995,4994,4993,4992,4991,4990,4989,4988,4987,
			  5108,5240,5239,5238,5237,5236,5235,5234,5233,5232,5229,
			  5353,5350,
			  5474,5471,
			  5470,5469,5468,5467,5466,5465,5464,5463,5462,5461,5460,5459,
			  5595,5716,
			  5837,5836,5957,6078,6199,6320,6319,6318,6197,6076,5955,5834,
			  5833,5832,5953,6074,6195,6316,6315,6314,6193,6072,5951,5830,
			  5829,5828,5949,6070,6191,6312,6311,6310,6189,6068,5947,5826,
			  5825,5824,5945,6066,6187,6308,6307,6306,6185,6064,5943,5822,
			  5821,5820,5699,5458,5457,
			  5456,5455,5454,5698,
			  5575,5696,5817,5938,
			  5819,5940,6061,6182,
			  6181,6180,6179,6178,6176,6174,
			  5938,5937,5936,5935,5934,5933,5932,6053,
			  6295,6297,6299,
			  6416,6418,6420,
			  6537,6539,6541,
			  6658,6660,6662,
			  6779,6781,6783,
			  6900,6902,6904,
			  7021,7023,7025,
			  7020,7019,7018,7138,7137,7136,
			  7257,7378,7499,7620,7741,7862,
			  7983,7984,7985,7865,7867,7868,7869,7870,
			  7026,7027,7028,7029,7030,7031,
			  7152,7273,7394,7515,7636,7757,
			  7871,7872,7873,7874,7875,7876,7877,7878,
			  7755,7634,
			  8104,8225,8226,8227,8107,8108,8109,8110,8111,8112,8113,8114,8115,8116,8117,8118,
			  7999,8120,8241,8362,
			  8346,8467,8588,8709,
			  8469,8349,8350,8351,8352,8353,8354,8355,8356,8357,8358,8359,8360,8361,
			  8710,8711,8591,8592,8593,8594,8595,8596,8597,8598,8599,8600,8601,8602,8603,8604,8605,8606,
			  8485,8364,8243,8122,8001,7880,7759,7638,7517,7396,7275,7154,7033,6912,6791,6670,6549,
			  7034,7035,7036,7037,7038,7039,7040,7041,7042,7043,7044,7045,
			  6924,6803,6682,6440,
			  2654,2775,
			  6800,6801,6802,
			  6683,6684,6441,6442,
			  3374,3372,3495,3493,
			  6576,6697,
			  6685,6686,6687,6689,6690,6691,6692,6693,6694,6695,6696,
			  6808,6929,7050,7171,7292,
			  6810,6931,7052,7173,7294,
			  7285,7286,7287,7288,7289,7290,7291,7295,7296,
			  7406,7417,7527,7538,7648,7659,7769,7780,7890,7901,
			  8011,8022,8132,8143,8253,8264,8374,8385,8495,8506,
			  8616,8617,8619,8620,8621,8622,8623,8624,8625,8626,8627,
			  8748,8869,8868,8867,8866,8865,8864,8863,8862,8861,8860,8859,8858,
			  8857,8856,8855,8854,8853,8852,8851,8850,8849,8848,
			  8732,8611,8490,8369,8248,8127,7276,7277,
			  8128,8129,8130,
			  8830,8951,8953,8833,8834,8835,8836,8837,8838,8839,8840,8841,8842,8843,8844,8845,8846,8847,9072,9193,
			  9194,9195,9075,9076,9077,9078,9079,9080,9081,9082,9083,9084,9085,9086,9087,9088,9089,9090,9091,9092,
			  9093,9094,9095,9096,9097,9098,9099,9100,9101,9102,9103,9104,9105,9106,9107,9108,9109,9110,9111,9112,9113,
			  8992,8871,8750,8629,8508,8387,8266,8145,8024,7903,
			  7782,
			  7661,7540,7298,
			  7299,7300,7301,7302,6818,6939,7181,7297,
			  7541,7542,7543,7544,7545,7546,7547,7548,7549,7550,7551,7552,7553,7554,7555,7556,7558,7559,7560,7561,7562,
			  7429,7308,7187,7066,6945,6824,6703,7303,7304,7305,7306,
			  5617,5738,5859,5980,6101,6222,6343,6464,6585,6706,6827,6948,7069,7190,
			  7191,7070,
			  6100,
			  
			  
			  
			  
			  
			  2944,2823,2702,2581,2460,2339,2218,2097,1976,1855,1734,1613,1492,1371,1250,1129,1008,887,766,645,524,403,282,161,11898,11777,11656,11535,
			  11899,11900,11901,11902,11903,166,165,164,163,162,
			  11782,11661,11540,11539,11538,11537,11536,
			  
			  287,408,529,530,531,532,534,535,536,537,416,295,174,
			  413,411,
			  175,176,177,178,179,180,181,
			  2964,2843,2722,2601,2480,2359,2238,2117,1996,1875,1754,1633,1512,1391,1270,1149,1028,907,786,665,544,423,302,
			  7441,7320,7199,7078,6957,6836,6715,6594,6473,6352,6231,6110,5989,5868,5747
			  ,5626
			  ,10416,10417,10418,10297,10176,10175,10174,
			  5745,5746,
			  9114,9115,9116,9117,9118,9119,9120,9121,9122,9123,9124,9125,9126,9127,9128,9129,9130,9131,9132,9133,9134,9135,9014,8893,8772,8651,8530,8409,8288,8167,8046,7925,7804,7683);
var wallDirection = new Array(0,5,5,5,1,2,4,4,1,4,4,4,3,8,8,2,
			      5,5,5,5,3,4,4,5,5,5,5,0,4,7,9,0,5,1,
			      4,4,2,4,4,2,5,5,6,8,3,1,5,0,2,0,2,5,3,1,
			      5,5,5,5,5,5,7,7,
			      4,4,1,5,5,5,5,5,5,5,0,
			      4,4,2,5,5,5,5,5,5,5,3,
			      4,4,4,4,9,9,
			      5,5,5,5,3,5,5,3,1,4,
			      4,1,5,5,5,5,5,5,7,7,
			      2,5,5,3,9,1,5,5,0,9,
			      5,5,0,0,4,4,
			      4,4,4,4,6,4,4,4,4,6,
			      5,0,5,1,4,4,3,4,4,2,
			      5,5,5,5,5,
			      
			      7,5,5,5,5,5,5,5,8,5,5,5,5,5,5,5,5,5,5,9,
			      4,4,4,
			      4,5,5,5,5,1,3,5,5,5,5,5,1,5,5,1,4,
			      4,4,4,4,4,
			      7,5,5,5,8,5,6,5,1,0,5,5,3,5,1,4,4,
			      4,4,4,4,4,4,4,
			      4,4,4,0,5,2,4,5,5,5,5,2,4,4,
			      4,4,4,4,4,4,4,
			      4,4,4,4,5,5,9,0,5,5,5,5,5,2,4,
			      4,4,4,4,4,4,
			      0,5,2,4,3,5,5,5,1,4,4,5,5,1,0,5,9,
			      4,4,4,4,4,4,4,4,
			      4,0,5,6,5,5,5,1,4,4,3,5,1,4,4,4,
			      4,4,4,4,4,4,4,4,
			      4,4,0,5,5,5,9,4,3,5,1,4,3,5,5,5,9,
			      4,4,4,4,4,4,4,
			      9,4,4,4,3,5,1,5,5,2,7,5,5,5,1,4,
			      4,4,4,4,4,4,4,
			      10,5,2,4,3,5,1,3,5,5,5,5,5,2,4,4,4,
			      4,4,4,4,4,
			      4,5,5,6,5,5,7,5,5,5,5,8,5,5,5,5,6,5,8,5,9,
			      4,4,
			      3,5,5,5,5,5,8,9,
			      4,4,4,4,
			      0,5,2,3,5,8,
			      4,4,4,4,
			      7,5,5,5,5,5,9,
			      
			      0,1,
			      4,4,
			      3,5,2,
			      
			      5,5,5,5,5,5,5,5,5,5,5,0,
			      4,5,5,5,5,5,5,5,5,0,4,
			      4,4,
			      4,2,
			      5,5,5,5,5,5,5,5,5,5,5,5,
			      4,4,
			      2,0,4,4,4,2,8,3,4,4,4,1,
			      5,0,4,4,4,2,5,3,4,4,4,1,
			      5,0,4,4,4,2,5,3,4,4,4,1,
			      5,0,4,4,4,2,8,3,4,4,4,1,
			      5,3,1,5,5,
			      5,5,0,0,
			      4,4,4,2,
			      4,4,4,2,
			      5,5,5,0,4,4,
			      2,5,5,5,5,5,0,4,
			      4,4,4,
			      4,4,4,
			      4,4,4,
			      4,4,4,
			      4,4,4,
			      4,4,4,
			      6,9,3,
			      5,5,5,5,5,0,
			      4,4,4,4,4,4,
			      7,5,5,5,5,5,5,5,
			      5,5,5,5,5,1,
			      4,4,4,4,9,4,
			      5,5,5,5,5,6,5,9,
			      4,0,
			      4,7,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
			      4,4,4,2,
			      4,4,4,7,
			      5,5,5,5,5,5,5,5,5,5,5,5,5,5,
			      5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,9,
			      4,4,4,4,4,4,4,4,4,4,7,4,7,4,4,4,4,
			      5,8,5,5,5,5,5,5,6,8,5,2,
			      4,9,7,7,
			      4,10,
			      0,5,5,
			      6,6,8,1,
			      9,7,2,3,
			      4,9,
			      5,5,8,8,5,5,5,5,5,5,5,
			      4,4,4,4,2,
			      4,4,4,4,3,
			      7,5,5,5,5,5,5,5,8,
			      4,4,4,4,4,4,4,4,4,4,
			      4,4,9,4,4,4,4,4,4,4,
			      7,5,5,5,5,5,5,5,5,5,9,
			      4,2,5,5,5,5,5,5,5,5,5,5,6,
			      5,5,5,5,6,5,5,5,5,6,
			      4,4,4,4,4,8,5,2,
			      5,5,5,
			      4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,3,
			      5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
			      5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,
			      4,4,4,4,4,4,4,4,4,4,
			      4,
			      4,7,8,
			      5,5,5,6,4,4,4,5,
			      5,5,5,5,5,5,5,5,5,6,5,5,5,5,5,8,8,5,5,5,9,
			      4,9,4,4,4,4,4,5,5,5,5,
			      4,4,4,4,9,4,4,4,4,4,4,4,7,3,
			      2,1,
			      5,
			  
			  
			  
			  
			  
			      4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,3,4,4,0,
			      5,5,5,5,2,1,5,5,5,5,
			      4,4,1,5,5,5,5,
			      
			      4,4,3,5,5,2,3,5,5,2,4,4,0,
			      1,0,
			      5,5,5,5,5,5,1,
			      4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
			      4,4,4,4,4,4,4,4,4,4,4,4,4,9
			      ,4
			      ,3,5,2,4,1,5,0,
			      3,5,
			      5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4);

var door0 = new Image;
door0.src = "door0.bmp";
var door1 = new Image;
door1.src = "door1.bmp";
var door2 = new Image;
door2.src = "door2.bmp";
var door3 = new Image;
door3.src = "door3.bmp";

var goldDoorCell = 412;
var goldDoor = new Image;
goldDoor.src = "doorGold.bmp";

var doorArray = new Array(goldDoorCell,6099,6582,7419,7060,8737,8727,7164,3477,3711,3458,3461,4182,3252,3123,3484,3074,5732,5120,9879,7022,7866,6561,6428,6921,6562,6563,6688,8618,3494,3373,10295,7557);
var doorDirection = new Array(5,2,3,3,1,1,1,3,1,1,1,1,0,2,0,1,0,0,1,0,0,0,3,1,3,3,3,0,0,2,2,3,0);


var cols = 121;
var rows = 99;
var colsMiddle = (cols + 1) / 2;
var rowsMiddle = (rows + 1) / 2;
var cells = rows * cols;
var winCols = 11;
var winRows = 9;
var winColsMiddle = (winCols + 1) / 2;
var winRowsMiddle = (winRows + 1) / 2;
var winCells = winRows * winCols; 
var cellHeight = 60;
var cellWidth = 60;
var bAnimate = false;
var baseCycle = 1;
var baseLoop = 64;
var finalMessage;
var timerID;
var cellImage = new Array(cells);
var cellLandscape = new Array(cells);
var gameStarted;
var gameInitialized;
var winArray = new Array(winCells);
var deadMonsters;
var initialDeadMonsters = 0;


/* Arrow Icons */

var icon2 = new Image;
icon2.src = "icon2.bmp";
var icon10 = new Image;
icon10.src = "icon10.bmp";
var icon50 = new Image;
icon50.src = "icon50.bmp";
var icon100 = new Image;
icon100.src = "icon100.bmp";

/* Key Icons */

var icon1 = new Image;
icon1.src = "icon1.bmp";
var icon3 = new Image;
icon3.src = "icon3.bmp";
var keyReserve = 0;
var keysLeft;

/* Other Icons */

var icon99 = new Image;
icon99.src = "icon99.bmp"
var icon15 = new Image;
icon15.src = "icon15.bmp"
var icon20 = new Image;
icon20.src = "icon20.bmp"
var icon25 = new Image;
icon25.src = "icon25.bmp"

var icon65537 = new Image;
icon65537.src = "goldKey.bmp";

var haveGoldKey;

var iconArray = new Array(4424,5558,3125,370,3470,2314,7,2760,3471,3339,3361,4423,4425,3332,
 			  3433,3677,4415,4643,6337,10000,5714,7258,7756,7743,8105,6183,6425,8484,
 			  3441,9997,6214,6218,7750,7140,6664,3486,5954,5596,
 			  6807,7046,6925,6804,6805,8738,7155,8747,
 			  7407,7408,7409,7410,8263,7881,7899,5972,8991,8006,6811,6812,7184,6932,
 			  11170,1853,
 			  11975,1069,10296,5625,5616,5977,
 			  1991);
var iconId = new Array(65537,2,10,10,100,10,1,1,3,1,1,50,50,1,
		       10,1,10,1,50,100,10,10,1,1,10,50,3,1,
		       15,20,25,25,99,15,15,1,1,1,
		       50,15,20,20,25,1,1,99,
		       20,20,20,20,1,10,10,10,1,1,10,20,1,1,
		       50,2,
		       10,3,99,1,10,1,
		       2);
var indexIcon = new Array(cells);

var bushArray = new Array(0,1,2,4,5,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,31,32,33,34,119,
			  121,122,123,124,125,128,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,155,240,
			  276,274,273,272,271,270,269,268,267,266,265,264,263,262,261,260,259,258,257,256,255,254,253,252,251,246,245,244,243,242,361,
			  363,364,365,366,367,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,397,
			  482,484,485,486,487,488,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,518,
			  603,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,639,
			  724,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,760,
			  845,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,881,
			  966,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1002,
			  1087,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1123,
			  1208,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1244,
			  1329,1331,1332,1333,1334,1335,1335,1336,1337,1338,1339,1340,1341,1342,1343,1344,1345,1346,1347,1348,1349,1350,1351,1352,1353,1354,1355,1356,1357,1358,1359,1360,1361,1362,1363,1365,
			  1450,1452,1453,1454,1455,1456,1457,1458,1459,1460,1461,1462,1463,1464,1465,1466,1467,1468,1469,1470,1471,1472,1473,1474,1475,1476,1477,1478,1479,1480,1481,1482,1483,1484,1486,
			  1571,1573,1574,1575,1576,1577,1578,1579,1580,1581,1582,1583,1584,1585,1586,1587,1588,1589,1590,1591,1592,1593,1594,1595,1596,1597,1598,1599,1600,1601,1602,1603,1604,1605,1607,
			  1692,1694,1695,1696,1697,1698,1699,1700,1701,1702,1703,1704,1705,1706,1707,1708,1709,1710,1711,1712,1713,1714,1715,1716,1717,1718,1719,1720,1721,1722,1723,1724,1725,1726,1728,
			  1813,1815,1816,1817,1818,1819,1820,1821,1822,1823,1824,1825,1826,1827,1828,1829,1830,1831,1832,1833,1834,1835,1836,1837,1838,1839,1840,1841,1842,1843,1844,1845,1846,1847,1849,
			  1934,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1970,	
			  2055,2057,2058,2059,2060,2061,2062,2063,2064,2065,2067,2068,2069,2070,2071,2072,2073,2074,2075,2076,2077,2078,2079,2080,2082,2083,2084,2085,2086,2087,2088,2089,2091,
			  2175,2176,4218,2418,2419,2212,1558,2111,11977,11735,11736,11771,
			  2297,2299,2300,2301,2302,2303,2304,2305,2306,2307,2308,2309,2310,2311,2312,2313,2314,2315,2316,2317,2318,2319,2320,2321,2322,2323,2324,2325,2326,2327,2328,2329,2330,2331,2332,2333,
			  11616,11617,11618,11619,11620,11621,11622,11623,11624,11625,11626,11627,11628,11629,11630,11631,11632,11633,11634,11635,11636,11637,11638,11639,11640,11641,11642,11643,11644,11645,11646,11647,11648,11649,11650,
			  11856,11858,11860,11859,11861,11862,11863,11864,11865,11866,11867,11868,11869,11870,11871,11872,11873,11874,11875,11876,11877,11878,11879,11880,11881,11882,11883,11884,11885,11886,11887,11888,11889,11892,
			  3126,3127,3128,3839,3838,3837,3234,3333,3454,3453,
			  7748,7747,7746,7627,7141,7148,7149,7150,7151,7270,7391,
			  6905,6906,6907,6908,6784,6785,6586,6663,5941,5942,6063,6421,6300,6301,6671,
			  6792,6793,6794,6913,6435,6436,6437,6557,3817,3938,4059,4058,4664,
			  4665,4667,4787,3704,3705,3821,3822,3823,3824,3825,3826,3942,3943,3944,3945,3946,4063,4064,4065,
			  3952,3720,3721,3722,3842,3962,3963,4083,4082,4081,3726,2642,
			  3236,3237,3238,3242,3115,3116,3118,3119,3120,3121,2994,2995,2996,2998,2999,3000,
			  2875,7876,2877,2878,2756,2758,2637,3467,3468,3346,3220,3221,3222,3223,3224,3225,3103,3104,3105,2984,
			  3212,3213,3214,
			  5354,5355,5355,5357,5358,5359,5360,5361,5474,5475,5476,5477,5478,5479,5480,
			  8133,8134,8135,8136,8137,8138,8139,8140,8141,
			  7169,7170,7160,7161,7162,7163,7282,7283,7284,7405,7526,7647,7400,7518,7519,7520,7639,7278,8491,8612,8733,8734,8735,8613,8370,8368,8489,8609,8610,8729,8730,8731,8002,
			  7660,7539,7418,7420,7421,7422,7423,7424,7425,6698,6577,6578,6579,
			  7053,7174,7175,7176,7177,7054,7055,6815,6816,6817,6938,
			  6220,6221,6342,6463,6584,
			  
			  
			  35,36,37,11895,11894,11773,11652,11653,11532,11533,11654,11775,11896,11897,39,38,159,160,281,280,279,400,399,520,641,762,883,763,764,885,1006,1005,643,644,523,402,
			  40,41,
			  11904,11783,11784,11663,11542,11541,11420,11419,11298,11297,11296,
			  1608,1609,1610,1730,1490,
			  2571,2572,2693,2695,2816,2815,2817,2938,3059,2939,3181,3182,3303,3304,3183,3305,3426,3425,3546,3547,3669,3668,3667,3789,3790,3911,4153,
			  283,284,285,286,407,406,405,404,525,526,528,647,646,768,889,891,893,651,652,657,419,420,541,300,299,1027,1026,1147,1148,
			  1676,1555,1435,1315,1195,1196,1075,1074,1073,1071,1313,1311,1553,1795,1796,1675,1915,1913,1793,
			  1673,1431,1433,1193,951,1431,1551,1671,
			  1791,1549,1307,1065,823,581,583,585,587,589,710,831,953,832,711,
			  829,827,825,1067,1309,1429,1187,945,703,705,707,709,
			  467,465,463,461,459,701,943,1185,1427,1669,1667,1425,1183,941,699,579,821,1063,1305,1547,
			  458,578,698,820,940,1182,1181,1302,1303,1424,1421,1666,1787,1788,1789,1910,1911,1912,2033,2031,2032,2153,2035,1914,1916,1919,2040,2041,468,470,347,346,345,466,464,343,342,341,340,98,99,101,11959,11960,11964,
			  1060,696,575,574,573,330,91,92,220,225,232,233,234,113,112,11970,
			  11852,11851,11609,11612,11491,11492,11493,11494,11372,11251,6345,
			  6828,6707,6829,6950,6949,7071,7072,7193,7315,7436,7198,7076,6955,6954,6953,6952,7073,7195,6831,6832,6833,6712,6711,6710,6588,6589,6590,6591,6592,6471,6469,6468,6347,6348,6227,6226,6225,6104,6105,6106,5986,5985,5984,5983,5982,5860,5861,5862,5864,5865,5618,
			  1374,1495,1616,1737,1496,1375,1376,1377,1378,1379,1380,1381,1502,1503,1504,1505,1268,2232,2474,2475,2478,2479,2600);
var rockArray = new Array(
3,156,277,398,519,640,11893,11891,11890,153,154,275,396,517,638,759,761,880,882,1001,1003,1101,1122,1124,1243,1245,2178,2179,2180,2181,2182,2183,2184,2185,2186,2187,2188,2189,2190,2192,2193,2194,2195,2196,2197,2198,2199,2200,2201,2202,2203,2204,2205,2206,2207,2208,2209,2210,2211,2213,2092,1971,1850,1729,1487,1366,1364,1485,1606,1727,1848,1969,2090,2211,2334,2455,2454,2453,2452,2451,2450,2449,2448,2447,2446,2445,2444,2443,2442,2441,2440,2439,2438,2437,2436,2435,2434,2433,2432,2431,2430,2429,2428,2427,2426,2425,2424,2423,2422,2421,2420,2081,2066,
29,11855,11857,11734,11613,11614,11615,11495,11496,11497,11498,
11499,11500,11501,11502,11503,11504,11505,11506,11507,11508,
11509,11510,11511,11512,11513,11514,11515,11516,11517,11518,
11519,11520,11521,11522,11523,11524,11525,11526,11527,11528,
11529,11530,1086,1088,965,967,844,846,723,725,602,604,
481,483,360,362,239,241,118,120,11978,11976,2052,2053,2054,2056,2177,1933,1935,2081,2066,1812,1814,
1691,1693,1570,1572,1449,1451,1328,1330,1207,1209,2296,2295,2417,2538,2539,2540,2298,11737,11738,11739,11740,11741,11742,
11743,11744,11745,11746,11747,11748,11749,11750,11751,11752,
11753,11754,11755,11756,11757,11758,11759,11760,11761,11762,
11763,11764,11765,11766,11767,11768,11769,11770,11772,11651,
3109,3230,3351,3472,3593,3714,3835,5580,5356,
7144,7265,7386,7507,7628,7749,
7622,7502,7623,7744,7271,7272,7633,7631,7630,7629,
6305,6426,6542,6543,6544,6545,6546,6547,6914,6433,4666,4189,3951,3841,4080,2641,3117,2997,2879,2757,3347,3226,3215,3094,3093,
5717,5718,5719,5720,5721,5722,
6806,6927,6928,7397,7398,7399,8123,8124,8125,8126,8244,7528,7529,7530,7531,
7185,7064,6943,6701,6702,6934,6813,

1488,1368,1489,1369,1370,1249,1128,1007,886,765,11408,11288,11409,11410,11531,11289,11290,11411,11412,11291,11292,11413,11171,
11414,11293,11172,11051,11052,11173,11294,11415,11416,11295,11174,11417,11418,11534,11655,11776,11774,278,157,158,1367,1246,1247,1248,1127,1126,1125,1004,884,
11657,11658,11659,11660,11781,11780,11779,11778,
11169,11049,11050,10929,10930,11662,
2573,2574,2575,2576,2577,2578,2579,2580,2701,2700,2699,2698,2697,2696,2818,2819,2820,2821,2822,2943,2942,2941,2940,3061,3062,3063,3064,3185,3306,3427,3184,2456,2457,2458,2459,2338,2337,2336,2335,2214,2215,2216,2217,2096,2095,2094,2093,1972,1973,1974,1975,1854,1733,1732,1731,1851,1852,
3060,3548,2694,2191,
767,888,1009,1130,1251,1372,1493,1614,1735,1736,1615,1494,1373,1252,1131,1010,1011,890,769,770,771,892,1013,1012,1133,1132,421,422,301,785,1269,1263,1020,288,409,
947,948,949,1070,1191,1190,1189,1068,1066,944,1428,1792,1794,1552,1556,1677,1798,1797,1918,1917,2159,1436,1437,1316,1317,712,591,592,471,224,223,586,704,702,697,819,457,336,215,216,219,218,337,338,11957,11839,11598,11719,11845,11850,11971,11972,114,115,11973,11974,11853,11854,11733,238,237,
1909,1908,1907,1786,1785,1783,236,359,480,601,
2036,2037,2038,577,697,1563,1687,1932,1811,
5976,5855,5734,5613,5614,5615,5736,5735,5856,5979,5981,6102,6223,6344,6465,6466,6587,6708,6709,6830,6951,6467,6346,6103,6224,
5866,5867,5988,5987,6107,6108,6109,6230,6229,6228,6349,6350,6351,6472,6470,6593,6714,6713,6834,6835,6956,7077,7438,7439,7440,7319,7318,7437,7192,7435,
1253,1254,1255,1256,1257,1258,1259,1260,1261,1382,1383,1384,1506,1507,1508,1509,1388,1389,1510,1631,1753,1752,1751,1630,1629,1628,1627,1626,1625,1624,1623,1622,1621,1620,1619,1618,1617,1738,1739,1740,1741,1742,1743,1744,1745,1746,1747,1748,1749,1750,1751,1752,1753,1874,1873,1872,1871,1870,1869,1868,1867,1866,1865,1864,1863,1862,1861,1860,1859,1858,1857,1856,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,2233,2234,2356,2357,2236,2237,2116,2115,1994,1993,
1497,1498,1499,1500,1501,2108,2107,2106,2105,2103,2102,2101,2100,2099,2098,2219,2220,2221,2222,2223,2225,2226,2228,2229,2350,2349,2348,2347,2346,2344,2343,2342,2341,2340,2461,2462,2463,2464,2465,2466,2586,2585,2584,2582,2703,2704,2705,2824,2825,2945,2946,2947,2948,2949);

/* Cascadeur properites */

var cascadeurGem = new Image;
cascadeurGem.src = "cascadeurGem.bmp";
var cascadeurHurt = new Image;
cascadeurHurt.src = "cascadeurHurt.bmp";
var cascadeurDead = new Image;
cascadeurDead.src = "cascadeurDead.bmp";
var cascadeur0 = new Image;
cascadeur0.src = "cascadeur0.bmp";
var cascadeur1 = new Image;
cascadeur1.src = "cascadeur1.bmp";
var cascadeur2 = new Image;
cascadeur2.src = "cascadeur2.bmp";
var cascadeur3 = new Image;
cascadeur3.src = "cascadeur3.bmp";
var cascadeurBush0 = new Image;
cascadeurBush0.src = "cascadeurBush0.bmp";
var cascadeurBush1 = new Image;
cascadeurBush1.src = "cascadeurBush1.bmp";
var cascadeurBush2 = new Image;
cascadeurBush2.src = "cascadeurBush2.bmp";
var cascadeurBush3 = new Image;
cascadeurBush3.src = "cascadeurBush3.bmp";
var cascadeurLittleMonster0 = new Image;
cascadeurLittleMonster0.src = "cascadeurLittleMonster0.bmp";
var cascadeurLittleMonster1 = new Image;
cascadeurLittleMonster1.src = "cascadeurLittleMonster1.bmp";
var cascadeurLittleMonster2 = new Image;
cascadeurLittleMonster2.src = "cascadeurLittleMonster2.bmp";
var cascadeurLittleMonster3 = new Image;
cascadeurLittleMonster3.src = "cascadeurLittleMonster3.bmp";

var cascadeurInitialCell = 489;
var cascadeurCellXy = new Array(2);

var cascadeurInitialDirection = 0;
var cascadeurActionKey;
var cascadeurLastCell;
var cascadeurLastDirection;
var cascadeurWindowCell = (winCells - 1) / 2;
var cascadeurLastMoveTime;
var cascadeurMoveDelay = 128;
var cascadeurInitialHealth = 100;
var cascadeurHealth;
var cascadeurInitialInvincible = 0;
var initialHaveGoldKey = false;
var cascadeurInvincible;


/* Little monster properites */

var littleMonsterDead = new Image;
littleMonsterDead.src = "littleMonsterDead.bmp";
var littleMonsterScar = new Image;
littleMonsterScar.src = "littleMonsterScar.bmp";
var littleMonsterScarBush = new Image;
littleMonsterScarBush.src = "littleMonsterScarBush.bmp";
var littleMonsterBush = new Image;
littleMonsterBush.src = "littleMonsterBush.bmp";
var littleMonster0 = new Image;
littleMonster0.src = "littleMonster0.bmp";
var littleMonster1 = new Image;
littleMonster1.src = "littleMonster1.bmp";
var littleMonster2 = new Image;
littleMonster2.src = "littleMonster2.bmp";
var littleMonster3 = new Image;
littleMonster3.src = "littleMonster3.bmp";

var indexLittleMonster = new Array(cells);
var littleMonsterQuantity = 180;
var littleMonsterQuantityDead;

var littleMonsterInitialCell = new Array(6,7,10370,2304,2314,5670,5671,5672,5673,5674,
				         2884,2760,2769,3010,3130,2890,5675,5676,5677,5678,
				         3685,5679,5680,5688,5689,5690,5691,5692,5693,5694,
				         10110,10231,3352,3473,3594,10715,10836,7702,7703,7704,
				         3338,3460,3581,7708,7709,7710,7711,7712,7713,7714,
				         4891,9998,7717,7718,7719,7720,7721,7722,7723,7724,
				         6725,6726,6727,6728,6729,6730,6731,6732,6733,7430,
				         7182,7183,7184,6944,7176,5740,5741,5742,5743,5744,
				         7431,5739,5744,5748,5749,5750,5751,5752,5753,5754,
				         6668,6789,6910,6302,8728,8729,8730,8731,5763,5764,
				       
				         6198,6194,6190,6186,7168,8607,8608,8609,8610,5774,
				         7864,7863,7750,7754,5779,5780,5781,5782,5783,5784,
				         8254,8255,8256,8257,8258,8259,8260,8261,8262,8263,
				         8375,8376,8377,8378,8379,8380,8381,8382,8383,8384,
				         8496,8497,8498,8499,8500,8501,8502,8503,8504,8505,
				         5954,5950,5946,7818,7819,7820,7821,7822,7823,7824,
				         7825,7826,7827,7828,7829,7830,7831,7832,7833,7834,
				         7835,7836,9997,5838,5839,5840,5841,5842,5843,5844);
				               				      
var littleMonsterInitialDirection = new Array(
2,2,3,3,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,0,
1,1,1,1,1,1,1,1,1,1,
0,1,1,1,1,1,1,1,1,1,
1,1,1,1,0,0,0,0,1,1,

0,0,0,0,1,0,0,0,0,1,
1,0,1,1,1,1,1,1,1,1,
1,3,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1);

var littleMonsterCycles = 10;
var littleMonstersPerCycle = littleMonsterQuantity/littleMonsterCycles;
var startAtThisLittleMonster;
var stopAtThisLittleMonster;
var littleMonsterLastCell = new Array(littleMonsterQuantity);
var littleMonsterLastDirection = new Array(littleMonsterQuantity);
var littleMonsterStatus = new Array(littleMonsterQuantity);


/* Big monster properties */

var bigMonsterDead = new Image;
bigMonsterDead.src = "bigMonsterDead.bmp";
var bigMonsterBush = new Image;
bigMonsterBush.src = "bigMonsterBush.bmp";
var bigMonster0 = new Image;
bigMonster0.src = "bigMonster0.bmp";
var bigMonster1 = new Image;
bigMonster1.src = "bigMonster1.bmp";
var bigMonster2 = new Image;
bigMonster2.src = "bigMonster2.bmp";
var bigMonster3 = new Image;
bigMonster3.src = "bigMonster3.bmp";

var indexBigMonster = new Array(cells);
var bigMonsterQuantity = 120;
var bigMonsterQuantityDead;
var bigMonsterInitialCell = new Array(8,
				      66,67,68,187,188,189,308,309,310,430,
				      99,100,101,220,221,222,223,341,342,343,
				      739,740,741,859,860,861,862,981,982,983,
				      1202,1203,1204,1323,1324,1325,1326,1444,1445,1446,
				      3361,3482,3603,8455,8456,8457,8458,8575,8576,8577,
				      4001,4002,4003,4121,4122,4123,4124,4243,4244,4245,
				      5321,5441,5442,5443,5562,5563,5564,5683,5684,5685,
				      8751,8752,8753,8872,8873,8874,8875,8993,8994,8995,
				      8249,8250,8251,8370,8371,8372,8373,8491,8492,8493,
				      9612,9613,9614,9733,9734,9735,9854,9855,9856,9976,
				      10363,10483,10484,10485,10604,10605,10606,10725,10726,10727,
				      6923,6922,11225,11333,11334,11335,11336,11455,11456,11457);
			      
var bigMonsterInitialDirection = new Array(
2,
2,2,2,2,2,2,2,2,2,2,
1,1,1,1,1,1,1,1,1,1,
3,3,3,3,3,3,3,3,3,3,
1,1,1,1,1,1,1,1,1,1,
3,3,3,3,3,3,3,3,3,3,
3,3,3,3,3,3,3,3,3,3,
0,0,0,0,0,0,0,0,0,0,
1,1,1,1,1,1,1,1,1,1,
2,2,2,2,2,2,2,2,2,2,
2,2,2,2,2,2,2,2,2,2,
0,0,0,0,0,0,0,0,0,0,
3,3,3,3,3,3,3,3,3,3);

var bigMonsterCycles = 24;
var bigMonstersPerCycle = bigMonsterQuantity/bigMonsterCycles;
var startAtThisBigMonster;
var stopAtThisBigMonster;
var bigMonsterLastCell = new Array(bigMonsterQuantity);
var bigMonsterLastDirection = new Array(bigMonsterQuantity);
var bigMonsterShot = new Array(bigMonsterQuantity);

/* Boss monster properties */

var boss00 = new Image;
boss00.src = "boss00.bmp";
var boss01 = new Image;
boss01.src = "boss01.bmp";
var boss02 = new Image;
boss02.src = "boss02.bmp";
var boss03 = new Image;
boss03.src = "boss03.bmp";

var boss10 = new Image;
boss10.src = "boss10.bmp";
var boss11 = new Image;
boss11.src = "boss11.bmp";
var boss12 = new Image;
boss12.src = "boss12.bmp";
var boss13 = new Image;
boss13.src = "boss13.bmp";

var boss20 = new Image;
boss20.src = "boss20.bmp";
var boss21 = new Image;
boss21.src = "boss21.bmp";
var boss22 = new Image;
boss22.src = "boss22.bmp";
var boss23 = new Image;
boss23.src = "boss23.bmp";

var boss30 = new Image;
boss30.src = "boss30.bmp";
var boss31 = new Image;
boss31.src = "boss31.bmp";
var boss32 = new Image;
boss32.src = "boss32.bmp";
var boss33 = new Image;
boss33.src = "boss33.bmp";



var bossShot0 = new Image;
bossShot0.src = "bossShot0.bmp";
var bossShot1 = new Image;
bossShot1.src = "bossShot1.bmp";
var bossShot2 = new Image;
bossShot2.src = "bossShot2.bmp";
var bossShot3 = new Image;
bossShot3.src = "bossShot3.bmp";



var bossFat = new Array(4);


var bossCounter;
var bossSpeed = 15;
var cascadeurInPen = false;

var bossInitialDirection = 3;
var bossInitialCell = 2832;

var bossLastCell;
var bossLastDirection;

var bossShot;
var bossInitialHealth = 200;
var bossHealth;

var bossBullet  = new Image;
bossBullet.src  = "bossBullet.bmp";
var bossBulletBush  = new Image;
bossBulletBush.src  = "bossBulletBush.bmp";
var bossBulletFlatBush  = new Image;
bossBulletFlatBush.src  = "bossBulletFlatBush.bmp";
var bossBulletGravel  = new Image;
bossBulletGravel.src  = "bossBulletGravel.bmp";


var indexBossBullet = new Array(cells);
var bossBulletCycles = 3;
var bossBulletsPerCycle = 6/bossBulletCycles;
var startAtThisBossBullet;
var stopAtThisBossBullet;

var bossBulletInitialCell = new Array(bossFat.length);
var bossBulletLastCell = new Array(bossFat.length);
var bossBulletLastDirection = new Array(bossFat.length);
var bossBulletShot = new Array(bossFat.length);




/* Arrow properties */

var arrow0 = new Image;
arrow0.src = "arrow0.bmp";
var arrow1 = new Image;
arrow1.src = "arrow1.bmp";
var arrow2 = new Image;
arrow2.src = "arrow2.bmp";
var arrow3 = new Image;
arrow3.src = "arrow3.bmp";

var arrowGravel0 = new Image;
arrowGravel0.src = "arrowGravel0.bmp";
var arrowGravel1 = new Image;
arrowGravel1.src = "arrowGravel1.bmp";
var arrowGravel2 = new Image;
arrowGravel2.src = "arrowGravel2.bmp";
var arrowGravel3 = new Image;
arrowGravel3.src = "arrowGravel3.bmp";



var cellArrow = new Array(cells);
var arrowReserve = 0;
var arrowsLeft;
var arrowCycles = 1;
var arrowDirection;
var arrowLastCell;


/* Bullet properties */

var bullet  = new Image;
bullet.src  = "bullet.bmp";
var bulletBush  = new Image;
bulletBush.src  = "bulletBush.bmp";
var bulletFlatBush  = new Image;
bulletFlatBush.src  = "bulletFlatBush.bmp";
var bulletGravel  = new Image;
bulletGravel.src  = "bulletGravel.bmp";

var indexBullet = new Array(cells);
var bulletCycles = 3;
var bulletsPerCycle = littleMonsterQuantity/bulletCycles;
var startAtThisBullet;
var stopAtThisBullet;
var bulletInitialCell = new Array(littleMonsterQuantity);
var bulletLastCell = new Array(littleMonsterQuantity);
var bulletLastDirection = new Array(littleMonsterQuantity);
var bulletShot = new Array(littleMonsterQuantity);


/* Functions */

function addressAbsoluteToXy(absolute)
{
   var coordinates = new Array(2);
   coordinates[1] = Math.floor(absolute / cols);  
   coordinates[0] = absolute - (coordinates[1] * cols);
   return coordinates;
}

function addressXRoll(x)
{
   if (x < 0)
   {
     x = x + cols;
   }
   else if (x > (cols - 1))
   {
     x = x - cols;
   }
   
   return x;
}

function addressXyToAbsolute(x,y)
{
   return (y * cols) + x;
}

function addressYRoll(y)
{
   if (y < 0)
   {
     y = y + rows;
   }
   else if (y > (rows - 1))
   {
     y = y - rows;
   }
   
   return y;
}

function bigMonsterBlocked(absoluteAddress)
{
   if (!displayed(absoluteAddress) && littleMonsterStatus[indexLittleMonster[absoluteAddress]] == "alive")
   {
     return true;
   }
   else if (cellLandscape[cascadeurLastCell] == "bush")
   {
     return true;
   }
   else if (cellLandscape[absoluteAddress] == "wall")
   {
     return true;
   }
   else if (cellLandscape[absoluteAddress] == "door")
   {
     return true;
   }
   else if (cellLandscape[absoluteAddress] == "gem")
   {
     return true;
   }
   else if (bossFat[0] == absoluteAddress)
   {
     return true;
//     alert("0");
   }
   else if (bossFat[1] == absoluteAddress)
   {
     return true;
   }
   else if (bossFat[2] == absoluteAddress)
   {
     return true;
   }
   else if (bossFat[3] == absoluteAddress)
   {
     return true;
   }
   else if (indexBigMonster[absoluteAddress] == null)
   {
     return false;
   }

   else if (!bigMonsterShot[indexBigMonster[absoluteAddress]])
   {
     return true;
   }
   else 
   {
     return false;
   }
}


function bossBlocked(absoluteAddress)
{
   if (!displayed(absoluteAddress) && littleMonsterStatus[indexLittleMonster[absoluteAddress]] == "alive")
   {
     return true;
   }
   else if (cellLandscape[cascadeurLastCell] == "bush")
   {
     return true;
   }
   else if (cellLandscape[absoluteAddress] == "wall")
   {
     return true;
   }
   else if (cellLandscape[absoluteAddress] == "door")
   {
     return true;
   }
   else if (cellLandscape[absoluteAddress] == "gem")
   {
     return true;
   }

   else if (!displayed(absoluteAddress - 1) && littleMonsterStatus[indexLittleMonster[absoluteAddress - 1]] == "alive")
   {
     return true;
   }
   else if (cellLandscape[absoluteAddress - 1] == "wall")
   {
     return true;
   }
   else if (cellLandscape[absoluteAddress - 1] == "door")
   {
     return true;
   }
   else if (cellLandscape[absoluteAddress - 1] == "gem")
   {
     return true;
   }

   if (!displayed(absoluteAddress - 1 + cols) && littleMonsterStatus[indexLittleMonster[absoluteAddress - 1 + cols]] == "alive")
   {
     return true;
   }
   else if (cellLandscape[absoluteAddress - 1 + cols] == "wall")
   {
     return true;
   }
   else if (cellLandscape[absoluteAddress - 1 + cols] == "door")
   {
     return true;
   }
   else if (cellLandscape[absoluteAddress - 1 + cols] == "gem")
   {
     return true;
   }

   if (!displayed(absoluteAddress + cols) && littleMonsterStatus[indexLittleMonster[absoluteAddress + cols]] == "alive")
   {
     return true;
   }
   else if (cellLandscape[absoluteAddress + cols] == "wall")
   {
     return true;
   }
   else if (cellLandscape[absoluteAddress + cols] == "door")
   {
     return true;
   }
   else if (cellLandscape[absoluteAddress + cols] == "gem")
   {
     return true;
   }
   else if (indexBigMonster[absoluteAddress] == null)
   {
     return false;
   }
   else if (!bigMonsterShot[indexBigMonster[absoluteAddress]])
   {
     return true;
   }
   else if (indexBigMonster[absoluteAddress - 1] == null)
   {
     return false;
   }
   else if (!bigMonsterShot[indexBigMonster[absoluteAddress - 1]])
   {
     return true;
   }   
   else if (indexBigMonster[absoluteAddress - 1 + cols] == null)
   {
     return false;
   }
   else if (!bigMonsterShot[indexBigMonster[absoluteAddress - 1 + cols]])
   {
     return true;
   }   

   else if (indexBigMonster[absoluteAddress + cols] == null)
   {
     return false;
   }
   else if (!bigMonsterShot[indexBigMonster[absoluteAddress + cols]])
   {
     return true;
   }   
   
   else 
   {
     return false;
   }
}



function bubbleSort(arrayName,arrayLength) 
{
    for (var i=0; i<(arrayLength-1); i++)
    {
      for (var j=i+1; j<arrayLength; j++)
      {
        if (arrayName[j] < arrayName[i]) 
        {
           var dummy = arrayName[i];
           arrayName[i] = arrayName[j];
           arrayName[j] = dummy;
        }
      }
    }
} 

function changeImage(creature,environment,direction)
{
   var imageFileName = empty.src;

   if (creature == "cascadeur")
   {
     if (environment == bush.src)
     {
       imageFileName = getDirectionalImage("cascadeurBush",direction);
     }
//     else if (environment == sign.src)
//     {
//       imageFileName = getDirectionalImage("cascadeur",direction);
//     }
     else if (environment == littleMonsterScar.src)
     {
       imageFileName = getDirectionalImage("cascadeurLittleMonster",direction);
     }
     else if (environment == littleMonsterScarBush.src)
     {
       imageFileName = getDirectionalImage("cascadeurBush",direction);
     }
     else
     {
       imageFileName = getDirectionalImage("cascadeur",direction);
     }
   } 
   else if (creature == "littleMonster")
   {
     if (environment == bush.src)
     {
       imageFileName = littleMonsterBush.src;
     }
     else
     {
       imageFileName = getDirectionalImage("littleMonster",direction);
     }
   }
   else if (creature == "bigMonster")
   {
     if (environment == bush.src)
     {
       imageFileName = bigMonsterBush.src;
     }
     else if (environment == littleMonsterScarBush.src)
     {
       imageFileName = bigMonsterBush.src;
     }
     else
     {
       imageFileName = getDirectionalImage("bigMonster",direction);
     }
   }   
   
   else if (creature == "boss0")
   {
     imageFileName = getDirectionalImage("boss0",direction);
   }   
   else if (creature == "boss1")
   {
     imageFileName = getDirectionalImage("boss1",direction);
   }   
   else if (creature == "boss2")
   {
     imageFileName = getDirectionalImage("boss2",direction);
   }   
   else if (creature == "boss3")
   {
     imageFileName = getDirectionalImage("boss3",direction);
   }   
   
   
   
   
   
   else if (creature == "arrow")
   {
     if (environment == littleMonsterScar.src)
     {
       imageFileName = littleMonsterScar.src;
     }
     else if (environment == gravel.src)
     {
       imageFileName = getDirectionalImage("arrowGravel",direction);
     }
     else
     {
       imageFileName = getDirectionalImage("arrow",direction);
     }
   }   
   else if (creature == "bullet")
   {
     if (environment == bush.src)
     {
       imageFileName = bulletBush.src;
     }
     else if (environment == littleMonsterScarBush.src)
     {
       imageFileName = littleMonsterScarBush.src;
     }
     else if (environment == gravel.src)
     {
       imageFileName = bulletGravel.src;
     }
     else if (environment == flatBush.src)
     {
       imageFileName = bulletFlatBush.src;
     }
     else if (environment == littleMonsterScar.src)
     {
       imageFileName = littleMonsterScar.src;
     }
     else
     {
       imageFileName = bullet.src;
     }
   }
   else if (creature == "bossBullet")
   {
     if (environment == bush.src)
     {
       imageFileName = bossBulletBush.src;
     }
     else if (environment == gravel.src)
     {
       imageFileName = bossBulletGravel.src;
     }
     else if (environment == flatBush.src)
     {
       imageFileName = bossBulletFlatBush.src;
     }
     else if (environment == littleMonsterScarBush.src)
     {
       imageFileName = littleMonsterScarBush.src;
     }
     else if (environment == littleMonsterScar.src)
     {
       imageFileName = littleMonsterScar.src;
     }
     else
     {
       imageFileName = bossBullet.src;
     }
   }   
   
   return imageFileName;
}

function checkBrowser()
{
	// VERIFY THAT THE BROWSER IS ONE THAT SUPPORTS THE IMG OBJECT
	// BY VERIFYING THAT ONE OF THE FOLLOWING IS TRUE:
	//	CASE 1  the client is Netscape version 3 or higher,  		 
	//	CASE 2  the client is Netscape version 2.02 on an OS/2 platform, or	 
	//	CASE 3  the client is Microsoft Internet Explorer version 4 or higher.


	// CASE 1:
	bAnimate=(((navigator.appName == "Netscape") && 
	(parseInt(navigator.appVersion) >= 3 )) || 

	// CASE 2:
	(navigator.userAgent == "Mozilla/2.02E (OS/2; I)") || 

	// CASE 3:
	((navigator.appName == "Microsoft Internet Explorer") && 
	(parseInt(navigator.appVersion) >= 4 )));
}

function checkEvent(absoluteAddress)
{

  if ( cellLandscape[cascadeurLastCell] == "sign")
  {
  }

  if (cascadeurLastCell == gemCell)
  {
    cellImage[gemCell] = cascadeurGem.src;
    gemFlash = -1;
    finalMessage = "Vous avez gagné!";
    gameStarted = false;
  }

  if ( cellLandscape[cascadeurLastCell] == "door")
  {
    if (absoluteAddress == goldDoorCell)
    {
      if (haveGoldKey)
      {
        haveGoldKey = false;
        cascadeurInPen = true;
        cellLandscape[cascadeurLastCell] = null;
      }
    }
    else if (absoluteAddress != goldDoorCell)
    {
      keysLeft = keysLeft - 1;
      document.myform.keysLeft.value = keysLeft;
      cellLandscape[cascadeurLastCell] = null;
    }
  }

//  if ( cellLandscape[cascadeurLastCell] == "grass2")
//  {
//    cellLandscape[cascadeurLastCell] = grass2;
//  }

  if ( cellLandscape[cascadeurLastCell] == "icon")
  {
    var iconId2 = iconId[indexIcon[cascadeurLastCell]];

    if (iconId2 == 2)
    {
        arrowsLeft = arrowsLeft * 2;
        document.myform.arrowsLeft.value = arrowsLeft;
    }
    else if (iconId2 == 10 || iconId2 == 50 || iconId2 == 100)
    {
        arrowsLeft = arrowsLeft + iconId2;
        document.myform.arrowsLeft.value = arrowsLeft;
    }
    else if (iconId2 == 1 || iconId2 == 3)
    {
        keysLeft = keysLeft + iconId2;
        document.myform.keysLeft.value = keysLeft;
    }
    else if (iconId2 == 15)
    {
        cascadeurHealth = cascadeurHealth + 15;
        document.myform.energie.value = cascadeurHealth;
    }
    else if (iconId2 == 20)
    {
        cascadeurHealth = cascadeurHealth + 20;
        document.myform.energie.value = cascadeurHealth;
    }
    else if (iconId2 == 25)
    {
        cascadeurHealth = cascadeurHealth + 25;
        document.myform.energie.value = cascadeurHealth;
    }
    else if (iconId2 == 99)
    {
        cascadeurHealth = 100;
        document.myform.energie.value = cascadeurHealth;
    }
    else if (iconId2 == 65537)
    {
        haveGoldKey = true;
        alert("Vous avez la clé !");
    }

    cellLandscape[cascadeurLastCell] = null;
  }

  if (!bigMonsterShot[indexBigMonster[absoluteAddress]] && indexBigMonster[absoluteAddress] != null && cascadeurLastCell == absoluteAddress)
  {
    if (cascadeurInvincible == 0)
    {
      if (cascadeurHealth <= 25)
      {
      cascadeurHealth = 0;
      document.myform.energie.value = cascadeurHealth;
      cellImage[absoluteAddress] = cascadeurDead.src;
      gameStarted = false;
      }
      else
      {
      cellImage[absoluteAddress] = cascadeurHurt.src;
      cascadeurHealth = cascadeurHealth - 25;
      document.myform.energie.value = cascadeurHealth;
      }
    }  
  }


  if (!bossShot && absoluteAddress == cascadeurLastCell && cascadeurLastCell == bossFat[0])
  {
  
    if (cascadeurInvincible == 0)
    {
      if (cascadeurHealth <= 50)
      {
        cascadeurHealth = 0;
        document.myform.energie.value = cascadeurHealth;
        cellImage[absoluteAddress] = cascadeurDead.src;
        gameStarted = false;
      }
      else
      {
        cellImage[absoluteAddress] = cascadeurHurt.src;
        cascadeurHealth = cascadeurHealth - 50;
        document.myform.energie.value = cascadeurHealth;
      }
    }  
  }
  if (!bossShot && absoluteAddress == cascadeurLastCell && cascadeurLastCell == bossFat[1])
  {
  
    if (cascadeurInvincible == 0)
    {
      if (cascadeurHealth <= 50)
      {
        cascadeurHealth = 0;
        document.myform.energie.value = cascadeurHealth;
        cellImage[absoluteAddress] = cascadeurDead.src;
        gameStarted = false;
      }
      else
      {
        cellImage[absoluteAddress] = cascadeurHurt.src;
        cascadeurHealth = cascadeurHealth - 50;
        document.myform.energie.value = cascadeurHealth;
      }
    }  
  }
  if (!bossShot && absoluteAddress == cascadeurLastCell && cascadeurLastCell == bossFat[2])
  {
  
    if (cascadeurInvincible == 0)
    {
      if (cascadeurHealth <= 50)
      {
        cascadeurHealth = 0;
        document.myform.energie.value = cascadeurHealth;
        cellImage[absoluteAddress] = cascadeurDead.src;
        gameStarted = false;
      }
      else
      {
        cellImage[absoluteAddress] = cascadeurHurt.src;
        cascadeurHealth = cascadeurHealth - 50;
        document.myform.energie.value = cascadeurHealth;
      }
    }  
  }
  if (!bossShot && absoluteAddress == cascadeurLastCell && cascadeurLastCell == bossFat[3])
  {
  
    if (cascadeurInvincible == 0)
    {
      if (cascadeurHealth <= 50)
      {
        cascadeurHealth = 0;
        document.myform.energie.value = cascadeurHealth;
        cellImage[absoluteAddress] = cascadeurDead.src;
        gameStarted = false;
      }
      else
      {
        cellImage[absoluteAddress] = cascadeurHurt.src;
        cascadeurHealth = cascadeurHealth - 50;
        document.myform.energie.value = cascadeurHealth;
      }
    }  
  }
  
  
  
  
  if (indexBullet[absoluteAddress] != null && cascadeurLastCell == absoluteAddress)
  {
    if (cascadeurInvincible == 0)
    {
      if (cascadeurHealth <= 10)
      {
      cascadeurHealth = 0;
      document.myform.energie.value = cascadeurHealth;
      cellImage[absoluteAddress] = cascadeurDead.src;
      gameStarted = false;
      }
      else
      {
      cellImage[absoluteAddress] = cascadeurHurt.src;
      cascadeurHealth = cascadeurHealth - 10;
      document.myform.energie.value = cascadeurHealth;
      }
    }

    bulletLastCell[indexBullet[absoluteAddress]] = -1;
    indexBullet[absoluteAddress] = null;

  }

  if (indexBossBullet[absoluteAddress] != null && cascadeurLastCell == absoluteAddress)
  {
    if (cascadeurInvincible == 0)
    {
      if (cascadeurHealth <= 10)
      {
      cascadeurHealth = 0;
      document.myform.energie.value = cascadeurHealth;
      cellImage[absoluteAddress] = cascadeurDead.src;
      gameStarted = false;
      }
      else
      {
      cellImage[absoluteAddress] = cascadeurHurt.src;
      cascadeurHealth = cascadeurHealth - 10;
      document.myform.energie.value = cascadeurHealth;
      }
    }

    bossBulletLastCell[indexBossBullet[absoluteAddress]] = -1;
    indexBossBullet[absoluteAddress] = null;

  }



  if (!bossShot && absoluteAddress == arrowLastCell && bossFat[0] == arrowLastCell && bossHealth>20)
  {
    cellImage[bossFat[0]] = bigMonsterDead.src;
    bossHealth = bossHealth - 20;
    arrowLastCell = -1;
  }
  else if (!bossShot && absoluteAddress == arrowLastCell && bossFat[0] == arrowLastCell && bossHealth<=20)
  {
    cellImage[bossFat[0]] = bossShot0.src;
    cellImage[bossFat[1]] = bossShot1.src;
    cellImage[bossFat[2]] = bossShot2.src;
    cellImage[bossFat[3]] = bossShot3.src;

    bossShot = true;
    deadMonsters = deadMonsters + bossPoints;

    arrowLastCell = -1;
  }
  if (!bossShot && absoluteAddress == arrowLastCell && bossFat[1] == arrowLastCell && bossHealth>20)
  {
    cellImage[bossFat[1]] = bigMonsterDead.src;
    bossHealth = bossHealth - 20;
    arrowLastCell = -1;
  }
  else if (!bossShot && absoluteAddress == arrowLastCell && bossFat[1] == arrowLastCell && bossHealth<=20)
  {
    cellImage[bossFat[0]] = bossShot0.src;
    cellImage[bossFat[1]] = bossShot1.src;
    cellImage[bossFat[2]] = bossShot2.src;
    cellImage[bossFat[3]] = bossShot3.src;

    bossShot = true;
    deadMonsters = deadMonsters + bossPoints;

    arrowLastCell = -1;
  }
  if (!bossShot && absoluteAddress == arrowLastCell && bossFat[2] == arrowLastCell && bossHealth>20)
  {
    cellImage[bossFat[2]] = bigMonsterDead.src;
    bossHealth = bossHealth - 20;
    arrowLastCell = -1;
  }
  else if (!bossShot && absoluteAddress == arrowLastCell && bossFat[2] == arrowLastCell && bossHealth<=20)
  {
    cellImage[bossFat[0]] = bossShot0.src;
    cellImage[bossFat[1]] = bossShot1.src;
    cellImage[bossFat[2]] = bossShot2.src;
    cellImage[bossFat[3]] = bossShot3.src;

    bossShot = true;
    deadMonsters = deadMonsters + bossPoints;

    arrowLastCell = -1;
  }
  if (!bossShot && absoluteAddress == arrowLastCell && bossFat[3] == arrowLastCell && bossHealth>20)
  {
    cellImage[bossFat[3]] = bigMonsterDead.src;
    bossHealth = bossHealth - 20;
    arrowLastCell = -1;
  }
  else if (!bossShot && absoluteAddress == arrowLastCell && bossFat[3] == arrowLastCell && bossHealth<=20)
  {
    cellImage[bossFat[0]] = bossShot0.src;
    cellImage[bossFat[1]] = bossShot1.src;
    cellImage[bossFat[2]] = bossShot2.src;
    cellImage[bossFat[3]] = bossShot3.src;

    bossShot = true;
    deadMonsters = deadMonsters + bossPoints;

    arrowLastCell = -1;
  }



  if (!bossShot && indexBullet[absoluteAddress] != null && bossFat[0] == absoluteAddress && bossHealth>5)
  {
    cellImage[bossFat[0]] = bigMonsterDead.src;
    bossHealth = bossHealth - 5;
    bulletLastCell[indexBullet[absoluteAddress]] = -1;
    indexBullet[absoluteAddress] = null;
  }
  else if (!bossShot && indexBullet[absoluteAddress] != null && bossFat[0] == absoluteAddress && bossHealth<=5)
  {
    cellImage[bossFat[0]] = bossShot0.src;
    cellImage[bossFat[1]] = bossShot1.src;
    cellImage[bossFat[2]] = bossShot2.src;
    cellImage[bossFat[3]] = bossShot3.src;

    bossShot = true;
    deadMonsters = deadMonsters + bossPoints;

    bulletLastCell[indexBullet[absoluteAddress]] = -1;
    indexBullet[absoluteAddress] = null;
  }
  if (!bossShot && indexBullet[absoluteAddress] != null && bossFat[1] == absoluteAddress && bossHealth>5)
  {
    cellImage[bossFat[1]] = bigMonsterDead.src;
    bossHealth = bossHealth - 5;
    bulletLastCell[indexBullet[absoluteAddress]] = -1;
    indexBullet[absoluteAddress] = null;
  }
  else if (!bossShot && indexBullet[absoluteAddress] != null && bossFat[1] == absoluteAddress && bossHealth<=5)
  {
    cellImage[bossFat[0]] = bossShot0.src;
    cellImage[bossFat[1]] = bossShot1.src;
    cellImage[bossFat[2]] = bossShot2.src;
    cellImage[bossFat[3]] = bossShot3.src;

    bossShot = true;
    deadMonsters = deadMonsters + bossPoints;

    bulletLastCell[indexBullet[absoluteAddress]] = -1;
    indexBullet[absoluteAddress] = null;
  }
  if (!bossShot && indexBullet[absoluteAddress] != null && bossFat[2] == absoluteAddress && bossHealth>5)
  {
    cellImage[bossFat[2]] = bigMonsterDead.src;
    bossHealth = bossHealth - 5;
    bulletLastCell[indexBullet[absoluteAddress]] = -1;
    indexBullet[absoluteAddress] = null;
  }
  else if (!bossShot && indexBullet[absoluteAddress] != null && bossFat[2] == absoluteAddress && bossHealth<=5)
  {
    cellImage[bossFat[0]] = bossShot0.src;
    cellImage[bossFat[1]] = bossShot1.src;
    cellImage[bossFat[2]] = bossShot2.src;
    cellImage[bossFat[3]] = bossShot3.src;

    bossShot = true;
    deadMonsters = deadMonsters + bossPoints;

    bulletLastCell[indexBullet[absoluteAddress]] = -1;
    indexBullet[absoluteAddress] = null;
  }
  if (!bossShot && indexBullet[absoluteAddress] != null && bossFat[3] == absoluteAddress && bossHealth>5)
  {
    cellImage[bossFat[3]] = bigMonsterDead.src;
    bossHealth = bossHealth - 5;
    bulletLastCell[indexBullet[absoluteAddress]] = -1;
    indexBullet[absoluteAddress] = null;
  }
  else if (!bossShot && indexBullet[absoluteAddress] != null && bossFat[3] == absoluteAddress && bossHealth<=5)
  {
    cellImage[bossFat[0]] = bossShot0.src;
    cellImage[bossFat[1]] = bossShot1.src;
    cellImage[bossFat[2]] = bossShot2.src;
    cellImage[bossFat[3]] = bossShot3.src;

    bossShot = true;
    deadMonsters = deadMonsters + bossPoints;

    bulletLastCell[indexBullet[absoluteAddress]] = -1;
    indexBullet[absoluteAddress] = null;
  }

    
  if (!bigMonsterShot[indexBigMonster[absoluteAddress]] && indexBigMonster[absoluteAddress] != null && absoluteAddress == arrowLastCell)
  {
    cellImage[absoluteAddress] = bigMonsterDead.src;
    bigMonsterShot[indexBigMonster[absoluteAddress]] = true;
    bigMonsterQuantityDead = bigMonsterQuantityDead + 1;
    deadMonsters = deadMonsters + bigMonsterPoints;
    arrowLastCell = -1;
  }

  if (!bigMonsterShot[indexBigMonster[absoluteAddress]] && indexBigMonster[absoluteAddress] != null && indexBullet[absoluteAddress] != null)
  {
    cellImage[absoluteAddress] = bigMonsterDead.src;
    bigMonsterShot[indexBigMonster[absoluteAddress]] = true;
    bigMonsterQuantityDead = bigMonsterQuantityDead + 1;
    deadMonsters = deadMonsters + bigMonsterPoints;
    bulletLastCell[indexBullet[absoluteAddress]] = -1;
    indexBullet[absoluteAddress] = null;
  }

  if (!bigMonsterShot[indexBigMonster[absoluteAddress]] && indexBigMonster[absoluteAddress] != null && indexBossBullet[absoluteAddress] != null)
  {
    cellImage[absoluteAddress] = bigMonsterDead.src;
    bigMonsterShot[indexBigMonster[absoluteAddress]] = true;
    bigMonsterQuantityDead = bigMonsterQuantityDead + 1;
    deadMonsters = deadMonsters + bigMonsterPoints;
    bossBulletLastCell[indexBossBullet[absoluteAddress]] = -1;
    indexBossBullet[absoluteAddress] = null;
  }


  if (littleMonsterStatus[indexLittleMonster[absoluteAddress]] == "alive" && indexLittleMonster[absoluteAddress] != null && absoluteAddress == arrowLastCell)
  {
    cellImage[absoluteAddress] = littleMonsterDead.src;
    littleMonsterStatus[indexLittleMonster[absoluteAddress]] = "shot";
    littleMonsterQuantityDead = littleMonsterQuantityDead + 1;
    deadMonsters = deadMonsters + littleMonsterPoints;
    arrowLastCell = -1;
  }

  if (littleMonsterStatus[indexLittleMonster[absoluteAddress]] == "alive" && indexLittleMonster[absoluteAddress] != null && indexBossBullet[absoluteAddress] != null)
  {
    cellImage[absoluteAddress] = littleMonsterDead.src;
    littleMonsterStatus[indexLittleMonster[absoluteAddress]] = "shot";
    littleMonsterQuantityDead = littleMonsterQuantityDead + 1;
    deadMonsters = deadMonsters + littleMonsterPoints;
    arrowLastCell = -1;
  }


  if (littleMonsterStatus[indexLittleMonster[absoluteAddress]] == "alive" && indexLittleMonster[absoluteAddress] != null && absoluteAddress == cascadeurLastCell)
  {
    littleMonsterStatus[indexLittleMonster[absoluteAddress]] = "squashed";
    cellImage[absoluteAddress] = changeImage("cascadeur",littleMonsterScar.src,cascadeurLastDirection);
    littleMonsterQuantityDead = littleMonsterQuantityDead + 1;
    deadMonsters = deadMonsters + littleMonsterPoints;
//    bulletLastCell[indexLittleMonster[absoluteAddress]] = -1;
//    littleMonsterLastCell[indexLittleMonster[absoluteAddress]] = -1;
//    indexLittleMonster[absoluteAddress] = null;
  }

  if (littleMonsterStatus[indexLittleMonster[absoluteAddress]] == "alive" && indexLittleMonster[absoluteAddress] != null && indexBigMonster[absoluteAddress] != null)
  {
    littleMonsterStatus[indexLittleMonster[absoluteAddress]] = "squashed";
    cellImage[absoluteAddress] = changeImage("bigMonster",littleMonsterScar.src,bigMonsterLastDirection[indexBigMonster[absoluteAddress]]);
    littleMonsterQuantityDead = littleMonsterQuantityDead + 1;
    deadMonsters = deadMonsters + littleMonsterPoints;
//    bulletLastCell[indexLittleMonster[absoluteAddress]] = -1;
//    littleMonsterLastCell[indexLittleMonster[absoluteAddress]] = -1;
//    indexLittleMonster[absoluteAddress] = null;
  }


for(int = 0; int<bossFat.length; int=int+1)
{
  if (!bossShot && littleMonsterStatus[indexLittleMonster[absoluteAddress]] == "alive" && indexLittleMonster[absoluteAddress] != null && absoluteAddress == bossFat[int])
  {
    littleMonsterStatus[indexLittleMonster[absoluteAddress]] = "squashed";
//    alert(bossLastDirection[bossFat[int]]);
    cellImage[absoluteAddress] = changeImage("boss" + int,littleMonsterScar.src,bossLastDirection);

    littleMonsterQuantityDead = littleMonsterQuantityDead + 1;
    deadMonsters = deadMonsters + littleMonsterPoints;
   }
}


//  if (littleMonsterQuantityDead >= littleMonsterQuantity && bigMonsterQuantityDead >= bigMonsterQuantity)
//  {
//    gameStarted = false;
//  }
  
  if (cascadeurHealth < 0)
  {
    cascadeurHealth = 0
    document.myform.energie.value = cascadeurHealth;
  }
//  else if (cascadeurHealth <= 0)
//  {
//    cellImage[absoluteAddress] = cascadeurDead.src;
//    gameStarted = false;
//  }
  else if (cascadeurHealth > 100)
  {
    cascadeurHealth = 100
    document.myform.energie.value = cascadeurHealth;
  }
}

function codes()
{
  cascadeurCode = prompt("Entrez un code de jeu:","exemple: 'code'");
  
  if (cascadeurCode == "fail")
  {
    cascadeurInvincible = 1;
    keysLeft = keysLeft + 10;
    haveGoldKey = true;
    document.myform.keysLeft.value = keysLeft;
    arrowsLeft = arrowsLeft + 1000;
    document.myform.arrowsLeft.value = arrowsLeft;
//    alert(keysLeft);
    alert("Code activated.");
  }
  else if (cascadeurCode == "FEU" || cascadeurCode == "feu" || cascadeurCode == "Feu")
  {
    if (true || cellLandscape[cascadeurLastCell] == "bush")
    {
  
      var feuCell = new Array(8);
      {
        feuCell[0] = ((cascadeurLastCell - cols) - 1);
        feuCell[1] = (cascadeurLastCell - cols);
        feuCell[2] = ((cascadeurLastCell - cols) + 1);
        feuCell[3] = (cascadeurLastCell - 1);
        feuCell[4] = (cascadeurLastCell + 1);
        feuCell[5] = ((cascadeurLastCell + cols) - 1);
        feuCell[6] = (cascadeurLastCell + cols);
        feuCell[7] = ((cascadeurLastCell + cols) + 1);
      }
      
      for(i = 0; i < 8; i++)
      {
        alert(cellLandscape[feuCell[i]]);
      }

    }
    else
    {
      alert("Vous devez être dans un buisson pour vous protéger du feu!");
    }
  }

  else if (cascadeurCode == "VIN" || cascadeurCode == "vin" || cascadeurCode == "Vin")
  {
    alert("Ce code est sous construction.");
  }
  else if (cascadeurCode == "code" || cascadeurCode == "'code'")
  {
    alert("Stop that, human.");
  }

  else if (cascadeurCode != "" && cascadeurCode != "exemple: 'code'")
  {
    alert("Votre code n'est pas dans le répertoire.");
  }
}

function createWindowArray()
{
  var coordinatesCascadeur = addressAbsoluteToXy(cascadeurLastCell);
// alert(cascadeurLastCell);
// alert(coordinatesCascadeur[0]);
// alert(coordinatesCascadeur[1]);
  var x = coordinatesCascadeur[0] - winColsMiddle + 1;
  var y = coordinatesCascadeur[1] - winRowsMiddle + 1;
// alert(x);
// alert(y);
  var indCWA = 0;
  var x2 = x;
 
  for (indCWA1=0; indCWA1 < winRows; indCWA1=indCWA1+1)
  {
    for (indCWA0=0; indCWA0 < winCols; indCWA0=indCWA0+1)
    {
       winArray[indCWA] = addressXyToAbsolute(addressXRoll(x2),addressYRoll(y));
       x2 = x2 + 1;
       indCWA = indCWA + 1;
    }
    x2 = x;
    y = y + 1;
  }
}

function displayed(absoluteAddress)
{
  for (ind=0; ind<winCells; ind=ind+1)
  {
    if (winArray[ind] == absoluteAddress)
    {
      return true;
    }
  }

  return false;
}

document.onkeydown = function(event){
     var holder;
     //IE uses this
     if(window.event){
            holder=window.event.keyCode;
     }
     //FF uses this
     else{
            holder=event.which;
     } 
     keyz(holder);
}

function keyz(holder)
{
 if (gameStarted)
 {
  cascadeurActionKey = holder;

  if (cascadeurActionKey == 37)
  {
    if (cascadeurLastDirection == 3)
    {
      var currentDate = new Date();
      var currentTime = currentDate.getTime();
    
      if ((currentTime - cascadeurLastMoveTime) > cascadeurMoveDelay)
      {
        cascadeurLastMoveTime = currentTime;
        moveCascadeur();
      }
    }
    else
    {
      cascadeurLastDirection = 3;
      cellImage[cascadeurLastCell] = changeImage("cascadeur",getDefaultImage(cascadeurLastCell),cascadeurLastDirection);
      document.images[cascadeurWindowCell].src = cellImage[cascadeurLastCell];
    }
  }
  else if (cascadeurActionKey == 38)
  {
    if (cascadeurLastDirection == 0)
    {
      var currentDate = new Date();
      var currentTime = currentDate.getTime();
    
      if ((currentTime - cascadeurLastMoveTime) > cascadeurMoveDelay)
      {
        cascadeurLastMoveTime = currentTime;
        moveCascadeur();
      }
    }
    else
    {
      cascadeurLastDirection = 0;
      cellImage[cascadeurLastCell] = changeImage("cascadeur",getDefaultImage(cascadeurLastCell),cascadeurLastDirection);
      document.images[cascadeurWindowCell].src = cellImage[cascadeurLastCell];
    }
  }
  else if (cascadeurActionKey == 39)
  {
    if (cascadeurLastDirection == 1)
    {
      var currentDate = new Date();
      var currentTime = currentDate.getTime();
    
      if ((currentTime - cascadeurLastMoveTime) > cascadeurMoveDelay)
      {
        cascadeurLastMoveTime = currentTime;
        moveCascadeur();
      }
    }
    else
    {
      cascadeurLastDirection = 1;
      cellImage[cascadeurLastCell] = changeImage("cascadeur",getDefaultImage(cascadeurLastCell),cascadeurLastDirection);
      document.images[cascadeurWindowCell].src = cellImage[cascadeurLastCell];
    }
  }
  else if (cascadeurActionKey == 40)
  {
    if (cascadeurLastDirection == 2)
    {
      var currentDate = new Date();
      var currentTime = currentDate.getTime();
    
      if ((currentTime - cascadeurLastMoveTime) > cascadeurMoveDelay)
      {
        cascadeurLastMoveTime = currentTime;
        moveCascadeur();
      }
    }
    else
    {
      cascadeurLastDirection = 2;
      cellImage[cascadeurLastCell] = changeImage("cascadeur",getDefaultImage(cascadeurLastCell),cascadeurLastDirection);
      document.images[cascadeurWindowCell].src = cellImage[cascadeurLastCell];
    }
  }

//  if (cascadeurActionKey >= 37 && cascadeurActionKey <= 40)
//  {
//    cellImage[cascadeurLastCell] = changeImage("cascadeur",getDefaultImage(cascadeurLastCell),cascadeurLastDirection);
//    document.images[cascadeurWindowCell].src = cellImage[cascadeurLastCell];
//  }

  if (cascadeurActionKey == 66)
  {
    var currentDate = new Date();
    var currentTime = currentDate.getTime();
    
    if ((currentTime - cascadeurLastMoveTime) > cascadeurMoveDelay)
    {
      cascadeurLastMoveTime = currentTime;
      moveCascadeur();
    }
  }

  else if (cascadeurActionKey == 87)
  {
    openPlantBush();
  }
  
  else if (cascadeurActionKey == 67)
  {
    codes();
  }
  
  else if (cascadeurActionKey == 73)
  {
//    alert("Continuer le jeu");
    inventaire();
//    popWindow('inventaire.htm', 'jeuWindow', 379, 440);
  }
  
  else if (cascadeurActionKey == 80)
  {
    alert("PAUSE");
  }

  else if (cascadeurActionKey == 81)
  {
    alert("Votre score est " + (1 - cascadeurInvincible)*Math.round(deadMonsters) + " points.");
  }
  else if (cascadeurActionKey == 65)
  {
    var bossDead = 0;

    if(bossShot)
    {
      bossDead = 1;
    }
//    alert(bigMonsterQuantityDead);
//    alert(littleMonsterQuantityDead);
//    alert(bossDead);
    alert("Il vous reste " + (301 - bigMonsterQuantityDead - littleMonsterQuantityDead - bossDead) + " monstres à tuer.");
  }

  else if (cascadeurActionKey == 86)
  {
    document.myform.edit.value = document.myform.edit.value + "," + cascadeurLastCell;
  }

  
  else if (cascadeurActionKey == 32 && arrowsLeft > 0 && arrowLastCell == -1 && cellLandscape[cascadeurLastCell] != "bush")
  {
    arrowLastCell = cascadeurLastCell;
    arrowLastDirection = cascadeurLastDirection;
    arrowsLeft = arrowsLeft - 1;
    document.myform.arrowsLeft.value = arrowsLeft;
  }

  window.event.returnValue = false;


 }
 return;
}

function getBigMonsterNewDirectionAndAbsoluteAddress(cascadeurXY,monsterXY)
{
  var cascadeurClosestXY;
  var bigMonsterProposedNewDirectionAndAbsoluteAddress = new Array(2);
  
  if (shortestDistance(cascadeurXY,monsterXY) || sameQuadrant(cascadeurXY,monsterXY) || inCenter(cascadeurXY) || inCenter(monsterXY))
  {
    cascadeurClosestXY = cascadeurXY;
  }
  else
  {
    cascadeurClosestXY = getCascadeurClosestXY(cascadeurXY,monsterXY);
  }
  
  bigMonsterProposedNewDirectionAndAbsoluteAddress = getBigMonsterProposedNewDirectionAndAbsoluteAddress(cascadeurClosestXY,monsterXY);

  if (bigMonsterBlocked(bigMonsterProposedNewDirectionAndAbsoluteAddress[1]))
  {
    bigMonsterProposedNewDirectionAndAbsoluteAddress[0] = bigMonsterLastDirection[indexBigMonster[addressXyToAbsolute(monsterXY[0],monsterXY[1])]];
    bigMonsterProposedNewDirectionAndAbsoluteAddress[1] = addressXyToAbsolute(monsterXY[0],monsterXY[1]);
  }

  return bigMonsterProposedNewDirectionAndAbsoluteAddress;

}


function getBossNewDirectionAndAbsoluteAddress(cascadeurXY,monsterXY)
{
  var cascadeurClosestXY;
  var bossProposedNewDirectionAndAbsoluteAddress = new Array(2);
  
  if (shortestDistance(cascadeurXY,monsterXY) || sameQuadrant(cascadeurXY,monsterXY) || inCenter(cascadeurXY) || inCenter(monsterXY))
  {
    cascadeurClosestXY = cascadeurXY;
  }
  else
  {
    cascadeurClosestXY = getCascadeurClosestXY(cascadeurXY,monsterXY);
  }
  
  bossProposedNewDirectionAndAbsoluteAddress = getBigMonsterProposedNewDirectionAndAbsoluteAddress(cascadeurClosestXY,monsterXY);

  if (bossBlocked(bossProposedNewDirectionAndAbsoluteAddress[1]))
  {
    bossProposedNewDirectionAndAbsoluteAddress[0] = bossLastDirection;
    bossProposedNewDirectionAndAbsoluteAddress[1] = addressXyToAbsolute(monsterXY[0],monsterXY[1]);
  }

  return bossProposedNewDirectionAndAbsoluteAddress;

}


function getBigMonsterProposedNewDirectionAndAbsoluteAddress(cascadeurXY,monsterXY)
{
  var rowDist = cascadeurXY[1] - monsterXY[1];
  var columnDist = cascadeurXY[0] - monsterXY[0];
  var bigMonsterProposedNewDirectionAndAbsoluteAddress = new Array(2);
  
  var direction;
  
  if (Math.abs(rowDist) > Math.abs(columnDist))
  {
    if (cascadeurXY[1] >= monsterXY[1])
    {
      direction = 2;
    }
    else
    {
      direction = 0;
    }
  }
  else if (Math.abs(rowDist) < Math.abs(columnDist))
  {
    if (cascadeurXY[0] >= monsterXY[0])
    {
      direction = 1;
    }
    else
    {
      direction = 3;
    }
  }
  else
  {
    var choose = getRandom(1);

    if (cascadeurXY[0] > monsterXY[0] && cascadeurXY[1] > monsterXY[1])
    {
       if (choose == 1)
       {
         direction = 1;
       }
       else
       {
         direction = 2;
       }
    }
    else if (cascadeurXY[0] > monsterXY[0] && cascadeurXY[1] < monsterXY[1])
    {
       if (choose == 1)
       {
         direction = 0;
       }
       else
       {
         direction = 1;
       }
    }
    else if (cascadeurXY[0] < monsterXY[0] && cascadeurXY[1] > monsterXY[1])
    {
       if (choose == 1)
       {
         direction = 2;
       }
       else
       {
         direction = 3;
       }
    }
    else if (cascadeurXY[0] < monsterXY[0] && cascadeurXY[1] < monsterXY[1])
    {
       if (choose == 1)
       {
         direction = 0;
       }
       else
       {
         direction = 3;
       }
    }
    else
    {
       direction = getRandom(3);
    }
  }

  bigMonsterProposedNewDirectionAndAbsoluteAddress[0] = direction;
  bigMonsterProposedNewDirectionAndAbsoluteAddress[1] = getNewCell(direction,addressXyToAbsolute(monsterXY[0],monsterXY[1]));

  return bigMonsterProposedNewDirectionAndAbsoluteAddress;
}

function getCascadeurClosestXY(cascadeurXY,monsterXY)
{


  var mirrorQuadrantAddress = new Array(4);
  var mirrorDistance = new Array(4);
  var mirrorDistanceSorted = new Array(4);
  var closestMirrorQuadrant = 0;
  
  var quad = quadrant(cascadeurXY);

  if (quad == 0)
  {
    mirrorQuadrantAddress[0] = cascadeurXY;
    mirrorQuadrantAddress[1] = [cascadeurXY[0], cascadeurXY[1] + rows];
    mirrorQuadrantAddress[2] = [cascadeurXY[0] + cols, cascadeurXY[1]];
    mirrorQuadrantAddress[3] = [cascadeurXY[0] + cols, cascadeurXY[1] + rows];
  }
  else if (quad == 1)
  {
    mirrorQuadrantAddress[0] = [cascadeurXY[0], cascadeurXY[1] - rows];
    mirrorQuadrantAddress[1] = cascadeurXY;
    mirrorQuadrantAddress[2] = [cascadeurXY[0] + cols, cascadeurXY[1]];
    mirrorQuadrantAddress[3] = [cascadeurXY[0] + cols, cascadeurXY[1] - rows];
  }
  else if (quad == 2)
  {
    mirrorQuadrantAddress[0] = [cascadeurXY[0] - cols, cascadeurXY[1]];
    mirrorQuadrantAddress[1] = [cascadeurXY[0] - cols, cascadeurXY[1] + rows];
    mirrorQuadrantAddress[2] = cascadeurXY;
    mirrorQuadrantAddress[3] = [cascadeurXY[0], cascadeurXY[1] + rows];
  }
  else if (quad == 3)
  {
    mirrorQuadrantAddress[0] = [cascadeurXY[0] - cols, cascadeurXY[1] - rows];
    mirrorQuadrantAddress[1] = [cascadeurXY[0] - cols, cascadeurXY[1]];
    mirrorQuadrantAddress[2] = [cascadeurXY[0], cascadeurXY[1] - rows];
    mirrorQuadrantAddress[3] = cascadeurXY;
  }

  for (indGCCXY=0; indGCCXY < 4; indGCCXY=indGCCXY+1)
  {
    var distance = getDistance(mirrorQuadrantAddress[indGCCXY],monsterXY);
    mirrorDistance[indGCCXY] = distance;
    mirrorDistanceSorted[indGCCXY] = distance;
  }
  
  bubbleSort(mirrorDistanceSorted,4);
  
//  mirrorDistanceSorted.sort();

  var shortestDistance = mirrorDistanceSorted[0];

  for (indGCCXY=0; indGCCXY < 4; indGCCXY=indGCCXY+1)
  {
    if (shortestDistance == mirrorDistance[indGCCXY])
    {
      closestMirrorQuadrant = indGCCXY;
    }
  }

  return mirrorQuadrantAddress[closestMirrorQuadrant];
}

function getDefaultImage(absoluteAddress)
{

  if (littleMonsterStatus[indexLittleMonster[absoluteAddress]] != null && littleMonsterStatus[indexLittleMonster[absoluteAddress]] == "squashed")
  {
    if (cellLandscape[absoluteAddress] == "bush")
    {
      return littleMonsterScarBush.src;
    }
    else
    {
      return littleMonsterScar.src;
    }
  }
  else if (cellLandscape[absoluteAddress] != null)
  {
    if (cellLandscape[absoluteAddress] == "bush")
    {
      return bush.src;
    }
    else if (cellLandscape[absoluteAddress] == "gravel")
    {
      return gravel.src;
    }
    else if (cellLandscape[absoluteAddress] == "flatBush")
    {
      return flatBush.src;
    }
    else if (cellLandscape[absoluteAddress] == "sign")
    {
      return sign.src;
    }
    else if (cellLandscape[absoluteAddress] == "icon")
    {
      return getDirectionalImage("icon",iconId[indexIcon[absoluteAddress]]);    
    }
    else if (cellLandscape[absoluteAddress] == "grass2")
    {
      return grass2.src;
    }
    else if (cellLandscape[absoluteAddress] == "flower")
    {
      return flower.src;
    }
    else if (cellLandscape[absoluteAddress] == "flower2")
    {
      return flower2.src;
    }
    else if (cellLandscape[absoluteAddress] == "tinyRock")
    {
      return tinyRock.src;
    }
    else if (cellLandscape[absoluteAddress] == "tinyRock2")
    {
      return tinyRock2.src;
    }
    else
    {
      return empty.src;
    }
  }
  else
  {
    return empty.src;
  }
}

function getDirectionalImage(id,dir)
{
   if (id == "cascadeur")
   {
     if (dir == "0")
     {
       return cascadeur0.src;
     }
     else if (dir == "1")
     {
       return cascadeur1.src;
     }
     else if (dir == "2")
     {
       return cascadeur2.src;
     }
     else if (dir == "3")
     {
       return cascadeur3.src;
     }
   }
   else if (id == "cascadeurBush")
   {
     if (dir == "0")
     {
       return cascadeurBush0.src;
     }
     else if (dir == "1")
     {
       return cascadeurBush1.src;
     }
     else if (dir == "2")
     {
       return cascadeurBush2.src;
     }
     else if (dir == "3")
     {
       return cascadeurBush3.src;
     }
   }
   else if (id == "cascadeurLittleMonster")
   {
     if (dir == "0")
     {
       return cascadeurLittleMonster0.src;
     }
     else if (dir == "1")
     {
       return cascadeurLittleMonster1.src;
     }
     else if (dir == "2")
     {
       return cascadeurLittleMonster2.src;
     }
     else if (dir == "3")
     {
       return cascadeurLittleMonster3.src;
     }
   }
   else if (id == "littleMonster")
   {
     if (dir == "0")
     {
       return littleMonster0.src;
     }
     else if (dir == "1")
     {
       return littleMonster1.src;
     }
     else if (dir == "2")
     {
       return littleMonster2.src;
     }
     else if (dir == "3")
     {
       return littleMonster3.src;
     }
   }
   else if (id == "bigMonster")
   {
     if (dir == "0")
     {
       return bigMonster0.src;
     }
     else if (dir == "1")
     {
       return bigMonster1.src;
     }
     else if (dir == "2")
     {
       return bigMonster2.src;
     }
     else if (dir == "3")
     {
       return bigMonster3.src;
     }
   }


   else if (id == "boss0")
   {
     if (dir == "0")
     {
       return boss00.src;
     }
     else if (dir == "1")
     {
       return boss10.src;
     }
     else if (dir == "2")
     {
       return boss20.src;
     }
     else if (dir == "3")
     {
       return boss30.src;
     }
   }
   
   else if (id == "boss1")
   {
     if (dir == "0")
     {
       return boss01.src;
     }
     else if (dir == "1")
     {
       return boss11.src;
     }
     else if (dir == "2")
     {
       return boss21.src;
     }
     else if (dir == "3")
     {
       return boss31.src;
     }
   }   
   else if (id == "boss2")
   {
     if (dir == "0")
     {
       return boss03.src;
     }
     else if (dir == "1")
     {
       return boss12.src;
     }
     else if (dir == "2")
     {
       return boss22.src;
     }
     else if (dir == "3")
     {
       return boss32.src;
     }
   }
   else if (id == "boss3")
   {
     if (dir == "0")
     {
       return boss02.src;
     }
     else if (dir == "1")
     {
       return boss13.src;
     }
     else if (dir == "2")
     {
       return boss23.src;
     }
     else if (dir == "3")
     {
       return boss33.src;
     }
   }



   
   else if (id == "arrow")
   {
     if (dir == "0")
     {
       return arrow0.src;
     }
     else if (dir == "1")
     {
       return arrow1.src;
     }
     else if (dir == "2")
     {
       return arrow2.src;
     }
     else if (dir == "3")
     {
       return arrow3.src;
     }
   }
   else if (id == "arrowGravel")
   {
     if (dir == "0")
     {
       return arrowGravel0.src;
     }
     else if (dir == "1")
     {
       return arrowGravel1.src;
     }
     else if (dir == "2")
     {
       return arrowGravel2.src;
     }
     else if (dir == "3")
     {
       return arrowGravel3.src;
     }
   }

   else if (id == "icon")
   {
     if (dir == "1")
     {
       return icon1.src;
     }
     else if (dir == "2")
     {
       return icon2.src;
     }
     else if (dir == "3")
     {
       return icon3.src;
     }
     else if (dir == "10")
     {
       return icon10.src;
     }
     else if (dir == "15")
     {
       return icon15.src;
     }
     else if (dir == "20")
     {
       return icon20.src;
     }
     else if (dir == "25")
     {
       return icon25.src;
     }
     else if (dir == "50")
     {
       return icon50.src;
     }
     else if (dir == "99")
     {
       return icon99.src;
     }
     else if (dir == "100")
     {
       return icon100.src;
     }
     else if (dir == "65537")
     {
       return icon65537.src;
     }
   }
   else if (id == "door")
   {
     if (dir == "0")
     {
       return door0.src;
     }
     else if (dir == "1")
     {
       return door1.src;
     }
     else if (dir == "2")
     {
       return door2.src;
     }
     else if (dir == "3")
     {
       return door3.src;
     }
     else if (dir == "5")
     {
       return goldDoor.src;
     }
   }
   else if (id == "wall")
   {
     if (dir == "0")
     {
       return wall0.src;
     }
     else if (dir == "1")
     {
       return wall1.src;
     }
     else if (dir == "2")
     {
       return wall2.src;
     }
     else if (dir == "3")
     {
       return wall3.src;
     }
     else if (dir == "4")
     {
       return wall4.src;
     }
     else if (dir == "5")
     {
       return wall5.src;
     }
     else if (dir == "6")
     {
       return wall6.src;
     }
     else if (dir == "7")
     {
       return wall7.src;
     }
     else if (dir == "8")
     {
       return wall8.src;
     }
     else if (dir == "9")
     {
       return wall9.src;
     }
     else if (dir == "10")
     {
       return wall10.src;
     }
   }
}

function getDistance(aXY,bXY)
{
  return (Math.pow(Math.abs(aXY[0] - bXY[0]),2) + Math.pow(Math.abs(aXY[1] - bXY[1]),2));
}  

function getLittleMonsterNewDirectionAndAbsoluteAddress(direction,monsterXY)
{
  var littleMonsterProposedNewDirectionAndAbsoluteAddress = new Array(2);
  
  var newDirection = getRandom(3);
  
  var newMonsterAbsoluteAddress = getNewCell(direction,addressXyToAbsolute(monsterXY[0],monsterXY[1]));

  if (littleMonsterBlocked(newMonsterAbsoluteAddress))
  {
    littleMonsterProposedNewDirectionAndAbsoluteAddress[0] = newDirection;
    littleMonsterProposedNewDirectionAndAbsoluteAddress[1] = addressXyToAbsolute(monsterXY[0],monsterXY[1]);
  }
  else
  {
    littleMonsterProposedNewDirectionAndAbsoluteAddress[0] = newDirection;
    littleMonsterProposedNewDirectionAndAbsoluteAddress[1] = newMonsterAbsoluteAddress;
  }

  return littleMonsterProposedNewDirectionAndAbsoluteAddress;

}

function getNewCell(direction,lastCell)
{
  var coordinates = addressAbsoluteToXy(lastCell);

  if (direction==0)
  { 
    coordinates[1] = coordinates[1] - 1;
  }
  else if (direction==1)
  { 
    coordinates[0] = coordinates[0] + 1;
  }
  else if (direction==2)
  { 
    coordinates[1] = coordinates[1] + 1;
  }
  else if (direction==3)
  { 
    coordinates[0] = coordinates[0] - 1;
  }
  
  return addressXyToAbsolute(addressXRoll(coordinates[0]),addressYRoll(coordinates[1]));
  
}

function getRandom(int)
{
  var ranNum=Math.round(Math.random()*int); 
  return ranNum;
}


function highScores()
{
  var ajaxRequest;  // The variable that makes Ajax possible!
	
  try
  {
    // Opera 8.0+, Firefox, Safari
    ajaxRequest = new XMLHttpRequest();
  }
  catch (e)
  {
    // Internet Explorer Browsers
    try
    {
      ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch (e) 
    {
      try
      {
        ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
      }
      catch (e)
      {
        // Something went wrong
        alert("Your browser broke!");
        return false;
      }
    }
  }

  // Create a function that will receive data sent from the server

  ajaxRequest.onreadystatechange = function()
  {
    if(ajaxRequest.readyState == 4)
    {
      var ajaxDisplay = document.getElementById('ajaxDiv');
      ajaxDisplay.innerHTML = ajaxRequest.responseText;
    }
  }
	
//	var age = document.getElementById('age').value;
//	var wpm = document.getElementById('wpm').value;
//	var sex = document.getElementById('sex').value;


	var queryString = "?User=" + username + "&Score=" + (1 - cascadeurInvincible)*Math.round(deadMonsters);
	ajaxRequest.open("GET", "highScores.php" + queryString, true);
	ajaxRequest.send(null); 



}


function inCenter(XY)
{
  if (XY[0] == colsMiddle && XY[1] == rowsMiddle)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function initialize(usern,userd)
{
//  alert(usern);
//  alert(userd);

   username = usern;

// Difficulty modifiers 

  if (userd == "hard")
  {
//    alert("changing");
//    alert(bigMonsterCycles);
    bigMonsterCycles = 20;
    bigMonstersPerCycle = bigMonsterQuantity/bigMonsterCycles;
//    alert(bigMonsterCycles);
    littleMonsterCycles = 12;
    littleMonstersPerCycle = littleMonsterQuantity/littleMonsterCycles;
    bulletCycles = 2;
    bulletsPerCycle = littleMonsterQuantity/bulletCycles;
    bossSpeed = 12;
    bossBulletCycles = 2;
    bossBulletsPerCycle = 4;
    bossHealth = 500;
  
    diff = "hard";
//    alert(diff);
    
  }
  else
  {
    diff = "easy";
    arrowReserve = 15;
    bigMonsterPoints = bigMonsterPoints*easyFactor;
    littleMonsterPoints = littleMonsterPoints*easyFactor;
    bossPoints = bossPoints*easyFactor;
    gemPoints = gemPoints*easyFactor;

  }
  

  stopTimer();
  timerID=null;
  gameStarted = false;
  gameInitialized = true;
  gemFlash = 0;
  finalMessage = "GAME OVER";
  bossCounter = 0;
  startAtThisLittleMonster = 0;
  stopAtThisLittleMonster = littleMonstersPerCycle;
  startAtThisBigMonster = 0;
  stopAtThisBigMonster = bigMonstersPerCycle;
  startAtThisBullet = 0;
  stopAtThisBullet = bulletsPerCycle;
  startAtThisBossullet = 0;
  stopAtThisBossBullet = bossBulletsPerCycle;
  var currentTime = new Date();
  cascadeurLastMoveTime = currentTime.getTime();
  document.myform.keysLeft.value = keyReserve;
  document.myform.arrowsLeft.value = arrowReserve;
  cascadeurCellXy = addressAbsoluteToXy(cascadeurInitialCell);
  document.myform.coordonnees.value = cascadeurCellXy[0] + "," + cascadeurCellXy[1];
  document.myform.absolute.value = addressXyToAbsolute(cascadeurCellXy[0],cascadeurCellXy[1]);
  document.myform.energie.value = cascadeurInitialHealth;
  cascadeurHealth = cascadeurInitialHealth;
  cascadeurInvincible = cascadeurInitialInvincible;
  haveGoldKey = initialHaveGoldKey;
  
  deadMonsters = initialDeadMonsters;

  document.myform.edit.value = "";
  
  for (ind=0; ind<cells; ind=ind+1)
  {
    cellImage[ind] = empty.src;
    cellLandscape[ind] = null;
    indexLittleMonster[ind] = null;
    indexBigMonster[ind] = null;
    indexIcon[ind] = null;
    cellArrow[ind] = null;
    indexBullet[ind] = null;
    indexBossBullet[ind] = null;
  }


  cellImage[gemCell] = gem0.src;
  cellLandscape[gemCell] = "gem";
 
  for (ind=0; ind<bushArray.length; ind=ind+1)
  {
    cellImage[bushArray[ind]] = bush.src;
    cellLandscape[bushArray[ind]] = "bush";
  }

  for (ind=0; ind<rockArray.length; ind=ind+1)
  {
    cellImage[rockArray[ind]] = rock.src;
    cellLandscape[rockArray[ind]] = "rock";
  }

  for (ind=0; ind<signArray.length; ind=ind+1)
  {
//    alert(signArray.length);
    cellImage[signArray[ind]] = sign.src;
    cellLandscape[signArray[ind]] = "sign";
  }

  for (ind=0; ind<wallArray.length; ind=ind+1)
  {
    cellImage[wallArray[ind]] = getDirectionalImage("wall",wallDirection[ind]);
    cellLandscape[wallArray[ind]] = "wall";
  }

  keysLeft = keyReserve;

  for (ind=0; ind<iconArray.length; ind=ind+1)
  {
    cellImage[iconArray[ind]] = getDirectionalImage("icon",iconId[ind]);
    cellLandscape[iconArray[ind]] = "icon";
    indexIcon[iconArray[ind]] = ind;
  }

  for (ind=0; ind<doorArray.length; ind=ind+1)
  {
    cellImage[doorArray[ind]] = getDirectionalImage("door",doorDirection[ind]);
    cellLandscape[doorArray[ind]] = "door";
  }

  for (ind=0; ind<cells; ind=ind+1)
  {
    if (cellLandscape[ind] == null)
    {
      var beautify = getRandom(500);

      if (beautify<3)
      {
        cellImage[ind] = grass2.src;
        cellLandscape[ind] = "grass2";
      }
      else if (beautify<5)
      {
        cellImage[ind] = flower.src;
        cellLandscape[ind] = "flower";
      }
      else if (beautify<10)
      {
        cellImage[ind] = flower2.src;
        cellLandscape[ind] = "flower2";
      }
      else if (beautify<15)
      {
        cellImage[ind] = tinyRock.src;
        cellLandscape[ind] = "tinyRock";
      }
      else if (beautify<16)
      {
        cellImage[ind] = tinyRock2.src;
        cellLandscape[ind] = "tinyRock2";
      }
    }
  }

  cascadeurActionKey = null;
  cascadeurLastCell = cascadeurInitialCell;
  cascadeurLastDirection = cascadeurInitialDirection;
  cellImage[cascadeurLastCell] = changeImage("cascadeur",getDefaultImage(cascadeurLastCell),cascadeurLastDirection);



  littleMonsterQuantityDead = 0;

  for (ind=0; ind < littleMonsterQuantity; ind=ind+1)
  {
    littleMonsterLastCell[ind] = littleMonsterInitialCell[ind];
    littleMonsterLastDirection[ind] = littleMonsterInitialDirection[ind];
    littleMonsterStatus[ind] = "alive";
    cellImage[littleMonsterLastCell[ind]] = changeImage("littleMonster",getDefaultImage(littleMonsterLastCell[ind]),littleMonsterLastDirection[ind]);
    indexLittleMonster[littleMonsterLastCell[ind]] = "alive";
  }

  bigMonsterQuantityDead = 0;
  
  for (ind=0; ind < bigMonsterQuantity; ind=ind+1)
  {
    bigMonsterLastCell[ind] = bigMonsterInitialCell[ind];
    bigMonsterLastDirection[ind] = bigMonsterInitialDirection[ind];
    bigMonsterShot[ind] = false;
    cellImage[bigMonsterLastCell[ind]] = changeImage("bigMonster",getDefaultImage(bigMonsterLastCell[ind]),bigMonsterLastDirection[ind]);
    indexBigMonster[bigMonsterLastCell[ind]] = ind;
  }

  bossShot = false;
  bossHealth = bossInitialHealth;

  bossLastCell = bossInitialCell;
  bossLastDirection = bossInitialDirection;
  
  bossFat[0] = bossLastCell;
  bossFat[1] = bossLastCell - 1;
  bossFat[2] = bossLastCell - 1 + cols;
  bossFat[3] = bossLastCell + cols;
  
  for (ind=0; ind < bossFat.length; ind=ind+1)
  {
    cellImage[bossFat[ind]] = changeImage("boss" + ind,getDefaultImage(bossFat[ind]),bossLastDirection);
  }
  

  for (ind=0; ind < bossFat.length; ind=ind+1)
  {
    bossBulletLastDirection[ind] = bossInitialDirection;
    bossBulletLastCell[ind] = -1;
  }



  arrowsLeft = arrowReserve;
  arrowDirection = cascadeurInitialDirection;
  arrowLastCell = -1;
  
  for (ind=0; ind < littleMonsterQuantity; ind=ind+1)
  {
    bulletLastDirection[ind] = littleMonsterInitialDirection[ind];
    bulletLastCell[ind] = -1;
  }


  for (ind=0; ind<winCells; ind=ind+1)
  {
    document.images[ind].src = empty.src;
  }
  
  paintWindow();
}

function inventaire()
{
  onClick="popWindow('inventaire.htm', 'jeuWindow', 600, 532)"
}

function littleMonsterBlocked(absoluteAddress)
{
   if (!displayed(absoluteAddress) && !bigMonsterShot[indexBigMonster[absoluteAddress]])
   {
     return true;
   }
//   else if (!displayed(absoluteAddress) && !bossShot)
//   {
//     return true;
//   }
   else if (cellLandscape[absoluteAddress] == "rock")
   {
     return true;
   }
//   else if (cellLandscape[absoluteAddress] == "sign")
//   {
//     return false;
//   }
   else if (cellLandscape[absoluteAddress] == "wall")
   {
     return true;
   }
   else if (cellLandscape[absoluteAddress] == "door")
   {
     return true;
   }
   else if (cellLandscape[absoluteAddress] == "gem")
   {
     return true;
   }
   else if (indexLittleMonster[absoluteAddress] == null)
   {
     return false;
   }
   else if (littleMonsterStatus[indexLittleMonster[absoluteAddress]] == "alive")
   {
     return true;
   }
   else if (littleMonsterStatus[indexLittleMonster[absoluteAddress]] == "squashed")
   {
     return true;
   }
   else 
   {
     return false;
   }
}

function loadActions(usern,userd)
{
//  alert("STEP3");
  checkBrowser();
  initialize(usern,userd);
  gameInitialized = true;
}

function moveCascadeur()
{

 var cascadeurNewCell = getNewCell(cascadeurLastDirection,cascadeurLastCell);
 
 if (cellLandscape[cascadeurNewCell] == null || (cellLandscape[cascadeurNewCell] == "door" && cascadeurNewCell != goldDoorCell  && keysLeft > 0) || (cellLandscape[cascadeurNewCell] == "door" && cascadeurNewCell == goldDoorCell && haveGoldKey) || (cellLandscape[cascadeurNewCell] != "door" && cellLandscape[cascadeurNewCell] != "wall" && cellLandscape[cascadeurNewCell] != "rock"))
 {
//  alert(haveGoldKey);
  cellImage[cascadeurNewCell] = changeImage("cascadeur",getDefaultImage(cascadeurNewCell),cascadeurLastDirection);
 
  cellImage[cascadeurLastCell] = getDefaultImage(cascadeurLastCell);

  cascadeurLastCell = cascadeurNewCell;

  checkEvent(cascadeurLastCell);
  
  cascadeurCellXy = addressAbsoluteToXy(cascadeurLastCell);
  document.myform.coordonnees.value = cascadeurCellXy[0] + "," + cascadeurCellXy[1];
  document.myform.absolute.value = addressXyToAbsolute(cascadeurCellXy[0],cascadeurCellXy[1]);
  document.myform.energie.value = cascadeurHealth;

  paintWindow();

 }
 
}


function moveObjectsx()
{

var beginMoveObjects = new Date();
var beginTime = beginMoveObjects.getTime();
document.myform.debug1.value = beginTime - initialTime;
initialTime = beginTime;

var endMoveObjects = new Date();
var endTime = endMoveObjects.getTime();
document.myform.debug2.value = endTime - initialTime;

}

function moveObjects()
{
/*
var beginMoveObjects = new Date();
var beginTime = beginMoveObjects.getTime();
document.myform.debug1.value = beginTime - initialTime;
initialTime = beginTime;
*/

  if (gemFlash == 0)
  {
    cellImage[gemCell] = gem1.src;
    gemFlash = 1;
  }
  else
  {
    cellImage[gemCell] = gem0.src;
    gemFlash = 0;
  }
  
  if (arrowsLeft > 0 && arrowLastCell != -1)
  {
    var arrowNewCell = getNewCell(arrowLastDirection,arrowLastCell);

    if (displayed(arrowNewCell) && (cellLandscape[arrowNewCell] == null || (cellLandscape[arrowNewCell] != "gem" && cellLandscape[arrowNewCell] != "door" && cellLandscape[arrowNewCell] != "wall" && cellLandscape[arrowNewCell] != "bush" && cellLandscape[arrowNewCell] != "rock")))
    {

     cellArrow[arrowNewCell] = arrowNewCell;
     cellImage[arrowNewCell] = changeImage("arrow",getDefaultImage(arrowNewCell),arrowLastDirection);
 
     if (arrowLastCell != cascadeurLastCell)
     {
       cellImage[arrowLastCell] = getDefaultImage(arrowLastCell);
     }

     cellArrow[arrowLastCell] = null;
     arrowLastCell = arrowNewCell;

     checkEvent(arrowLastCell);

    }
    else
    {
      if (arrowLastCell != cascadeurLastCell)
      {
        cellImage[arrowLastCell] = getDefaultImage(arrowLastCell);
      }
    
      cellArrow[arrowLastCell] = null;
      arrowLastCell = -1;
    }

  }


//  if (cycleCounter / littleMonsterCycles == Math.floor(cycleCounter / littleMonsterCycles))
//  {

// var myDate3 = new Date();
// var xxx = myDate3.getTime();

      var littleMonsterNewDirectionAndAbsoluteAddress = new Array(2);
      
      for (indMO=startAtThisLittleMonster; indMO<stopAtThisLittleMonster; indMO=indMO+1)
      {

       if (littleMonsterLastCell[indMO] != -1 && littleMonsterStatus[indMO] != null)
       {
        if (littleMonsterStatus[indMO] == "shot")
	{
          indexLittleMonster[littleMonsterLastCell[indMO]] = null;
          cellImage[littleMonsterLastCell[indMO]] = getDefaultImage(littleMonsterLastCell[indMO]);
          littleMonsterLastCell[indMO] = -1;
	}
	else if (littleMonsterStatus[indMO] == "alive")
	{

          littleMonsterNewDirectionAndAbsoluteAddress = getLittleMonsterNewDirectionAndAbsoluteAddress(littleMonsterLastDirection[indMO],addressAbsoluteToXy(littleMonsterLastCell[indMO]));
          indexLittleMonster[littleMonsterLastCell[indMO]] = null;
          cellImage[littleMonsterLastCell[indMO]] = getDefaultImage(littleMonsterLastCell[indMO]);

          littleMonsterLastCell[indMO] = littleMonsterNewDirectionAndAbsoluteAddress[1];
          indexLittleMonster[littleMonsterLastCell[indMO]] = indMO;
          cellImage[littleMonsterLastCell[indMO]] = changeImage("littleMonster",getDefaultImage(littleMonsterLastCell[indMO]),littleMonsterLastDirection[indMO])

          if (displayed(littleMonsterLastCell[indMO]) && bulletLastCell[indMO] == -1)
          {
            bulletLastCell[indMO] = littleMonsterLastCell[indMO];
            bulletLastDirection[indMO] = littleMonsterLastDirection[indMO];
          }

          littleMonsterLastDirection[indMO] = littleMonsterNewDirectionAndAbsoluteAddress[0];

          checkEvent(littleMonsterLastCell[indMO]);

         }

       }

      }

      startAtThisLittleMonster = stopAtThisLittleMonster;
      stopAtThisLittleMonster = stopAtThisLittleMonster + littleMonstersPerCycle;

      if (stopAtThisLittleMonster > littleMonsterQuantity)
      {
        startAtThisLittleMonster = 0;
        stopAtThisLittleMonster = littleMonstersPerCycle;
      }

// var myDate4 = new Date();
// var xxx = myDate4.getTime() - xxx;
// document.myform.debug1.value = xxx;

//  }

//  if (cycleCounter / bulletCycles == Math.floor(cycleCounter / bulletCycles))
//  {

// var myDate5 = new Date();
// var xxx = myDate5.getTime();

    for (indMO=startAtThisBullet; indMO<stopAtThisBullet; indMO=indMO+1)
    {

       if (bulletLastCell[indMO] != -1)
       {
         var bulletNewCell = getNewCell(bulletLastDirection[indMO],bulletLastCell[indMO]);

         if (displayed(bulletNewCell) && (cellLandscape[bulletNewCell] == null || (cellLandscape[bulletNewCell] != "gem" && cellLandscape[bulletNewCell] != "door" && cellLandscape[bulletNewCell] != "wall" && cellLandscape[bulletNewCell] != "rock")))
         {

          indexBullet[bulletNewCell] = indMO;
          cellImage[bulletNewCell] = changeImage("bullet",getDefaultImage(bulletNewCell),bulletLastDirection[indMO]);

          if (bulletLastCell[indMO] != littleMonsterLastCell[indMO])
          {
            cellImage[bulletLastCell[indMO]] = getDefaultImage(bulletLastCell[indMO]);
          }

          indexBullet[bulletLastCell[indMO]] = null;

          bulletLastCell[indMO] = bulletNewCell;

          checkEvent(bulletLastCell[indMO]);

         }
         else
         {
           if (bulletLastCell[indMO] != littleMonsterLastCell[indMO])
           {
             cellImage[bulletLastCell[indMO]] = getDefaultImage(bulletLastCell[indMO]);
           }
           
           indexBullet[bulletLastCell[indMO]] = null;

           bulletLastCell[indMO] = -1;
         }
       }
    }

    startAtThisBullet = stopAtThisBullet;
    stopAtThisBullet = stopAtThisBullet + bulletsPerCycle;

    if (stopAtThisBullet > littleMonsterQuantity)
    {
        startAtThisBullet = 0;
        stopAtThisBullet = bulletsPerCycle;
    }

// var myDate6 = new Date();
// var xxx = myDate6.getTime() - xxx;
// alert("bullet:" + xxx);

//  }

//  if (cycleCounter / bigMonsterCycles == Math.floor(cycleCounter / bigMonsterCycles))
//  {

// var myDate0 = new Date();
// var xxx = myDate0.getTime();

      var bigMonsterNewDirectionAndAbsoluteAddress = new Array(2);

      for (indMO=startAtThisBigMonster; indMO<stopAtThisBigMonster; indMO=indMO+1)
      {
       if (bigMonsterLastCell[indMO] != -1)
       {
        if (bigMonsterShot[indMO])
	{
          indexBigMonster[bigMonsterLastCell[indMO]] = null;
          cellImage[bigMonsterLastCell[indMO]] = getDefaultImage(bigMonsterLastCell[indMO]);
          bigMonsterLastCell[indMO] = -1;
	}
	else
	{

          bigMonsterNewDirectionAndAbsoluteAddress = getBigMonsterNewDirectionAndAbsoluteAddress(addressAbsoluteToXy(cascadeurLastCell),addressAbsoluteToXy(bigMonsterLastCell[indMO]));
          indexBigMonster[bigMonsterLastCell[indMO]] = null;
          cellImage[bigMonsterLastCell[indMO]] = getDefaultImage(bigMonsterLastCell[indMO]);
          bigMonsterLastDirection[indMO] = bigMonsterNewDirectionAndAbsoluteAddress[0];
          bigMonsterLastCell[indMO] = bigMonsterNewDirectionAndAbsoluteAddress[1];
          indexBigMonster[bigMonsterLastCell[indMO]] = indMO;
          cellImage[bigMonsterLastCell[indMO]] = changeImage("bigMonster",getDefaultImage(bigMonsterLastCell[indMO]),bigMonsterLastDirection[indMO])

          if (cellLandscape[bigMonsterLastCell[indMO]] == "rock")
          {
            cellLandscape[bigMonsterLastCell[indMO]] = "gravel";
          }
       
          checkEvent(bigMonsterLastCell[indMO]);
         }
       }
      }

      startAtThisBigMonster = stopAtThisBigMonster;
      stopAtThisBigMonster = stopAtThisBigMonster + bigMonstersPerCycle;

      if (stopAtThisBigMonster > bigMonsterQuantity)
      {
        startAtThisBigMonster = 0;
        stopAtThisBigMonster = bigMonstersPerCycle;
      }

      
      
      var bossNewDirectionAndAbsoluteAddress = new Array(2);


      if (bossCounter == 0 && cascadeurInPen)
      {
        if (bossLastCell != -1)
        {
         if (bossShot)
	 {
//           alert("boss dead");
           bossLastCell = null;

           for (ind=0; ind < bossFat.length; ind=ind+1)
	   {
             cellImage[bossFat[ind]] = getDefaultImage(bossFat[ind]);
           }

           bossLastCell = -1;

	 }
	 else
	 {
 
           bossNewDirectionAndAbsoluteAddress = getBossNewDirectionAndAbsoluteAddress(addressAbsoluteToXy(cascadeurLastCell),addressAbsoluteToXy(bossLastCell));

//	   alert(bossNewDirectionAndAbsoluteAddress[0] + " " + bossNewDirectionAndAbsoluteAddress[1]);

           for (ind=0; ind < bossFat.length; ind=ind+1)
	   {
             cellImage[bossFat[ind]] = getDefaultImage(bossFat[ind]);
           }

           bossLastDirection = bossNewDirectionAndAbsoluteAddress[0];
           bossLastCell = bossNewDirectionAndAbsoluteAddress[1];


// Here's where you'd have to check if the boss is at the edge of the torus, long and annoying, keep the boss penned up inside the map.

           bossFat[0] = bossLastCell;
           bossFat[1] = bossLastCell - 1;
           bossFat[2] = bossLastCell - 1 + cols;
           bossFat[3] = bossLastCell + cols;

           for (ind=0; ind < bossFat.length; ind=ind+1)
	   {
	     cellImage[bossFat[ind]] = changeImage("boss" + ind,getDefaultImage(bossFat[ind]),bossLastDirection);

             if (cellLandscape[bossFat[ind]] == "rock")
             {
               cellLandscape[bossFat[ind]] = "gravel";
             }
             if (cellLandscape[bossFat[ind]] == "bush")
             {
               cellLandscape[bossFat[ind]] = "flatBush";
             }
                   
             checkEvent(bossFat[ind]);
       
           }

           if (displayed(bossFat[0]) && bossBulletLastCell[0] == -1)
           {
             bossBulletLastCell[0] = bossFat[0];
             bossBulletLastDirection[0] = bossLastDirection;
           }
           if (displayed(bossFat[1]) && bossBulletLastCell[1] == -1)
           {
             bossBulletLastCell[1] = bossFat[1];
             bossBulletLastDirection[1] = bossLastDirection;
           }
           if (displayed(bossFat[2]) && bossBulletLastCell[2] == -1)
           {
             bossBulletLastCell[2] = bossFat[2];
             bossBulletLastDirection[2] = bossLastDirection;
           }
           if (displayed(bossFat[3]) && bossBulletLastCell[3] == -1)
           {
             bossBulletLastCell[3] = bossFat[3];
             bossBulletLastDirection[3] = bossLastDirection;
           }

           
         }
        
        }
        
      }
      
      
      if (bossCounter == bossSpeed)
      {
        bossCounter = -1;
      }
      bossCounter = bossCounter + 1;
//      alert(bossCounter);


    for (indMO=startAtThisBossBullet; indMO<stopAtThisBossBullet; indMO=indMO+1)
    {

       if (bossBulletLastCell[indMO] != -1)
       {
         var bossBulletNewCell = getNewCell(bossBulletLastDirection[indMO],bossBulletLastCell[indMO]);

         if (displayed(bossBulletNewCell)  && (cellLandscape[bossBulletNewCell] == null || (cellLandscape[bossBulletNewCell] != "gem" && cellLandscape[bossBulletNewCell] != "door" && cellLandscape[bossBulletNewCell] != "wall" && cellLandscape[bossBulletNewCell] != "rock")))
         {

          indexBossBullet[bossBulletNewCell] = indMO;

          if (bossBulletNewCell == bossFat[0])
          {
	    cellImage[bossBulletNewCell] = changeImage("boss0",getDefaultImage(bossBulletNewCell),bossBulletLastDirection[indMO]);
          }
          else if (bossBulletNewCell == bossFat[1])
          {
	    cellImage[bossBulletNewCell] = changeImage("boss1",getDefaultImage(bossBulletNewCell),bossBulletLastDirection[indMO]);
          }
          else if (bossBulletNewCell == bossFat[2])
          {
	    cellImage[bossBulletNewCell] = changeImage("boss2",getDefaultImage(bossBulletNewCell),bossBulletLastDirection[indMO]);
          }
          else if (bossBulletNewCell == bossFat[3])
          {
	    cellImage[bossBulletNewCell] = changeImage("boss3",getDefaultImage(bossBulletNewCell),bossBulletLastDirection[indMO]);
          }
          else
          {
            cellImage[bossBulletNewCell] = changeImage("bossBullet",getDefaultImage(bossBulletNewCell),bossBulletLastDirection[indMO]);
	  }
 
          if (bossBulletLastCell[indMO] != bossFat[0] && bossBulletLastCell[indMO] != bossFat[1] && bossBulletLastCell[indMO] != bossFat[2] && bossBulletLastCell[indMO] != bossFat[3])
          {
            cellImage[bossBulletLastCell[indMO]] = getDefaultImage(bossBulletLastCell[indMO]);
          }

          indexBossBullet[bossBulletLastCell[indMO]] = null;

          bossBulletLastCell[indMO] = bossBulletNewCell;

          checkEvent(bossBulletLastCell[indMO]);

         }
         else
         {
           if (bossBulletLastCell[indMO] != bossFat[0] && bossBulletLastCell[indMO] != bossFat[1] && bossBulletLastCell[indMO] != bossFat[2] && bossBulletLastCell[indMO] != bossFat[3])
           {
             cellImage[bossBulletLastCell[indMO]] = getDefaultImage(bossBulletLastCell[indMO]);
           }
           
           indexBossBullet[bossBulletLastCell[indMO]] = null;

           bossBulletLastCell[indMO] = -1;
         }
       }
    }

    startAtThisBossBullet = stopAtThisBossBullet;
    stopAtThisBossBullet = stopAtThisBossBullet + bossBulletsPerCycle;

    if (stopAtThisBossBullet > 8)
    {
        startAtThisBossBullet = 0;
        stopAtThisBossBullet = bossBulletsPerCycle;
    }



// var myDate2 = new Date();
// var xxx = myDate2.getTime() - xxx;
// document.myform.debug2.value = xxx;

//  }

/*
var myDate99 = new Date();
var yyy = myDate99.getTime() - yyy;
// var sw02 = false;
if (yyy > 200)
{
  document.myform.debug1.value = yyy;
//   sw02 = true;
}
*/

  paintWindow();

/*
var myDate100;
var zzz;
if (sw02)
{
  myDate100 = new Date();
  zzz = myDate100.getTime();
  zzz = zzz - myDate99.getTime();
  document.myform.debug2.value = zzz;
  sw02 = false;
}
*/


  var beginMoveObjects = new Date();
  var beginTime = beginMoveObjects.getTime();

  while (beginTime - initialTime < baseLoop - 12)
  {
    beginMoveObjects = new Date();
    beginTime = beginMoveObjects.getTime();
  }

//  document.myform.debug1.value = beginTime - initialTime;
  initialTime = beginTime;


/*
var beginMoveObjects = new Date();
var beginTime = beginMoveObjects.getTime();
document.myform.debug1.value = beginTime - initialTime;
initialTime = beginTime;
*/

/*
var endMoveObjects = new Date();
var endTime = endMoveObjects.getTime();
document.myform.debug2.value = endTime - initialTime;
*/

}

function openPlantBush()
{
  onClick="popWindow('Bush Film/index.html', 'jeuWindow', 250, 350)"
}

function paintWindow()
{

  createWindowArray();

  for (ind=0; ind<winCells; ind=ind+1)
  {
    if (document.images[ind].src != cellImage[winArray[ind]])
    {
      document.images[ind].src = cellImage[winArray[ind]];
    }
  }

}

function popWindow(url, name, width, height)
{
  settings="target=new toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=" + width + ", height=" + height;
  jeuWindow=window.open(url,name,settings);
}

function quadrant(XY)
{
   if (XY[0] <= colsMiddle && XY[1] <= rowsMiddle)
   {
     return 0;
   }
   else if (XY[0] <= colsMiddle && XY[1] >= rowsMiddle)
   {
     return 1;
   }
   else if (XY[0] >= colsMiddle && XY[1] <= rowsMiddle)
   {
     return 2;
   }
   else if (XY[0] >= colsMiddle && XY[1] >= rowsMiddle)
   {
     return 3;
   }
   else
   {
     return 99;
   }
}

function sameQuadrant(cascadeurXY,monsterXY)
{
  if (quadrant(cascadeurXY) == quadrant(monsterXY))
  {
    return true;
  }
  else
  {
    return false;
  }
}

function shortestDistance(cascadeurXY,monsterXY)
{
  if (getDistance(cascadeurXY,monsterXY) <= Math.pow(rowsMiddle,2) + Math.pow(colsMiddle,2))
  {
    return true;
  }
  else
  {
    return false;
  }
}

function startGame(usern,userd)
{
//  alert(usern);
//  alert(userd);
//  alert("break");
  if (! gameInitialized)
  {
    initialize(usern,userd);
  }
  
  gameInitialized = false;
  gameStarted = true;
  startTimer();
}

function startTimer()
{
    if (bAnimate)
    {
      stopTimer();	
      updateTimer();
    }
}

function stopTimer()
{
  if (bAnimate)
  {
    clearTimeout(timerID);	
  }
}

function updateTimer()
{
    moveObjects();
    
    if (gameStarted)
    {
      timerID=setTimeout("updateTimer()", baseCycle);
    }
    else
    {
      stopTimer();
      alert(finalMessage);
      alert("Votre score final est " + (1 - cascadeurInvincible)*deadMonsters + ".");

      highScores();
//      alert("HIGH SCORE: \r\n David -- 21001 pts \r\n Marc -- 16750 pts \r\n Votre Score -- " + deadMonsters + " pts");
    }
}

function writeGameBoard()
{

//  alert("STEP2");
  document.write('<table border="0" cellpadding="0" cellspacing="0" align="center">');

  for(indWPR = 0; indWPR < winRows; indWPR++)
  {

    document.write('<tr>');

    for(indWPC = 0; indWPC < winCols; indWPC++)
    {
      document.write('<td><img src="empty.bmp" height="' + cellHeight + '" width="' + cellWidth + '"></td>');
    }


    document.write('</tr>');

  }

  document.write('</table>');
}
