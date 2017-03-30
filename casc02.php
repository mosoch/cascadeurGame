<?php

echo '     <html>';
echo '       <head>';
echo '         <title>La Montagne des Monstres</title>';
echo '         <script src="casc02bossshoot.js"></script>';
echo '       </head>';


$userName = $_GET['userName'];
$userDiff = $_GET['userDiff'];


echo '  <body bgcolor="FF9900" onLoad="loadActions(\'' . $userName . '\',\'' . $userDiff . '\')"> ';



//echo "Hi I'm $userName playing on $userDiff";

echo '     <p align="center">';
echo '      <form name="myform">';


echo '       <table border="0" width="100%">';
echo '        <tr>';
echo '         <td><a href="#" onClick="startGame(\'' . $userName . '\',\'' . $userDiff . '\'); return false;">Commencez le jeu!</a></td>';
echo '	     <td>&nbsp;&nbsp;</td>';
echo '	     <td><center>flèches restantes : <input type="text" name="arrowsLeft" size="5" maxlength="7" onFocus="document.myform.arrowsLeft.blur()"></center></td>';
echo '	     <td>&nbsp;&nbsp;</td>';
echo '	     <td><center>clés disponibles : <input type="text" name="keysLeft" size="5" maxlength="7" onFocus="document.myform.keysLeft.blur()"></center></td>';
echo '	     <td>&nbsp;&nbsp;</td>';
echo '	     <td><center>Coordonnées : <input type="text" name="coordonnees" size="4" maxlength="7" onFocus="document.myform.coordonnees.blur()"></center></td>';
echo '	     <td>&nbsp;&nbsp;</td>';
echo '	     <td><center>Énergie : <input type="text" name="energie" size="4" maxlength="7" onFocus="document.myform.energie.blur()">%</center></td>';
echo '	     <td>&nbsp;&nbsp;</td>';
echo '	     <td><center><input type="hidden" name="absolute" size="5" maxlength="7" onFocus="document.myform.absolute.blur()"></center></td>';
//	     <!--td><center>debug1: <input type="text" name="debug1" size="10" maxlength="20" onFocus="document.myform.coordonnees.blur()"></center></td>
//	     <td><center>debug2: <input type="text" name="debug2" size="10" maxlength="20" onFocus="document.myform.coordonnees.blur()"></center></td-->
echo '	    </tr>';
echo '        <tr>';
echo '	     <td><input type="hidden" name="edit" size="20" onFocus="document.myform.edit.blur()"></center></td>';
echo '        </tr>';
echo '	   </table>';

echo '	  </form>';
echo '    </p>';

echo '       <table border="0" width="100%">';
echo '        <tr>';

echo '        <td height="center" align="center">';
echo '         <div id="ajaxDiv"></div> ';
echo '        </td>';

echo '        <td>';

echo '    <script>';
echo '      writeGameBoard();';
echo '    </script>';

echo '        </td>';

echo '        </tr>';
echo '	   </table>';


//   <!--EMBED src="cascTheme.mid" autostart=true loop=true hidden=true volume=100>
//   <NOEMBED><BGSOUND src="cascTheme.mid"></NOEMBED-->



echo '  </body>';


echo '  </html>';

?>