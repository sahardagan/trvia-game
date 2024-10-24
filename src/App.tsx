// @ts-nocheck

import React from 'react';
import Flashcard from './components/FlashCard.js';




const App = () => {
  const flashcards = [
    {
      question: 'מהי חקירה נגדית, ומהם הכללים המנחים בנוגע לניהולה בסדר הדין הפלילי?',
      answer: (
        <div>
          <p>חקירה נגדית היא שלב מהותי במשפט הפלילי שבו עורך הדין של הצד שכנגד חוקר את העד שהובא על ידי הצד השני במטרה לערער את אמינותו או להציג סתירות בעדותו.</p>
          <p>חקירה נגדית נועדה לחשוף חולשות בעדות, להוציא פרטים שלא נמסרו בחקירה הראשית, ולהראות שהעד עשוי להיות מוטה או לא מהימן.</p>
          <p>הכללים המנחים לחקירה נגדית בסדר הדין הפלילי כוללים:</p>
          <ol>
            <li>זכות לחקור כל עד שהובא מטעם הצד שכנגד.</li>
            <li>הצגת שאלות המיועדות לערער את אמינות העד.</li>
            <li>שאלות מכוונות לסתור את העדות שניתנה בחקירה הראשית.</li>
            <li>איסור על השמעת עדות חדשה במהלך החקירה הנגדית, אלא באישור בית המשפט.</li>
            <li>החקירה חייבת להיות ממוקדת ולהימנע משאלות רחבות מדי או לא רלוונטיות.</li>
          </ol>
        </div>
      )},
    {
      question: 'מהם התנאים למעצר עד תום ההליכים בסדר הדין הפלילי?',
      answer: (
        <>
          מעצר עד תום ההליכים הוא כלי דרמטי בו משתמשת המדינה לשם מניעת סיכון לציבור או לשיבוש הליכי המשפט.<br />
          המעצר מתבצע כאשר יש חשש משמעותי שהנאשם ישבש הליכים, יפגע בעדים, או מהווה סכנה לציבור.<br /><br />
    
          החוק קובע מספר תנאים שמאפשרים לבקש מעצר עד תום ההליכים:
          <ol>
            <li>קיומה של ראיות לכאורה להוכחת אשמת הנאשם.</li>
            <li>קיומה של עילת מעצר, כמו חשש לשיבוש הליכים או מסוכנות.</li>
            <li>בחינה אם ניתן להסתפק באלטרנטיבות למעצר, כמו מעצר בית או תנאים מגבילים.</li>
          </ol>
        </>
      )
    },
    {
      question: 'מהי עסקת טיעון ומה היתרונות והחסרונות שלה?',
      answer: (
        <>
          עסקת טיעון היא הסכמה בין התביעה לבין הנאשם, שבה הנאשם מודה באשמה בתמורה להקלה בעונש או לביטול אישומים מסוימים.<br /><br />
          
          <strong>היתרונות בעסקת טיעון:</strong>
          <ol>
            <li>חיסכון בזמן ובמשאבים לשני הצדדים ולמערכת המשפט.</li>
            <li>הבטחת תוצאה ידועה מראש לנאשם, שמונעת את הסיכון של תוצאות לא צפויות במשפט.</li>
            <li>הימנעות ממצב שבו קורבן העבירה נאלץ להעיד בבית המשפט.</li>
          </ol>
          
          <strong>החסרונות:</strong>
          <ol>
            <li>הציבור עלול להרגיש שמערכת המשפט אינה מממשת את מלוא הצדק.</li>
            <li>נאשמים עשויים להודות בעבירות שהם לא ביצעו רק כדי להימנע ממשפט ארוך ומסוכן.</li>
            <li>התביעה עלולה להתפשר יותר מדי ולהשיג עונש קל מדי לעבירות חמורות.</li>
          </ol>
        </>
      )
    },
    {
      question: 'מהו העיקרון של "זכות השימוע" וכיצד הוא מתבצע במסגרת ההליך הפלילי?',
      answer: (
        <>
          זכות השימוע היא זכותו של נאשם להישמע לפני קבלת החלטות מהותיות לגביו על ידי בית המשפט או התביעה. עיקרון זה נועד להבטיח שהנאשם לא יפגע בזכויותיו או יושפע באופן לא הוגן.<br /><br />
          
          במהלך השימוע, הנאשם יכול להציג את עמדותיו, הראיות שברשותו והעדויות הנוגעות למקרה. השימוע מתבצע לפני קבלת החלטות כגון מעצר עד תום ההליכים או פסקי דין.<br /><br />
          
          **השלבים בשימוע כוללים:**
          <ol>
            <li>הזמנה מוקדמת של הנאשם, שתינתן על ידי בית המשפט.</li>
            <li>נציגי התביעה מציגים את הראיות ואת העמדות.</li>
            <li>הנאשם מציג את עמדתו ואת ראיותיו.</li>
            <li>בית המשפט מקבל החלטות על בסיס המידע שהוצג.</li>
          </ol>
        </>
      )
    },
    {
      question: 'מהי משמעות "מבחן השפיות" בהליך הפלילי וכיצד הוא משפיע על האשמה?',
      answer: (
        <>
          "מבחן השפיות" הוא כלי משפטי המאפשר לבית המשפט לקבוע אם הנאשם היה כשיר לעמוד לדין בזמן ביצוע העבירה, כלומר, האם הוא היה במצב נפשי שהשפיע על כושרו להבין את מהות מעשיו.<br /><br />
          
          אם הנאשם נמצא לא כשיר לעמוד לדין, הוא לא יוכל להיות מועמד להליך פלילי רגיל. במקום זאת, ניתן להורות על טיפול פסיכיאטרי או שיקום.<br /><br />
          
          **היבטים חשובים במבחן השפיות:**
          <ol>
            <li>האם הנאשם היה מסוגל להבין את מהות המעשה שהוא ביצע.</li>
            <li>האם הנאשם הבין את ההשלכות של המעשה שלו.</li>
            <li>האם הנאשם היה תחת השפעת מצב נפשי שפוגע בכשירותו לעמוד לדין.</li>
          </ol>
        </>
      )
    },
    {
      question: 'מהי המשמעות של "סודיות ההליך הפלילי" ואילו חריגים קיימים לה?',
      answer: (
        <>
          סודיות ההליך הפלילי מתייחסת לשמירה על פרטיות הנאשמים, העדים והקורבנות במהלך ההליכים המשפטיים. עיקרון זה נועד להבטיח את זכויות הפרט ולהגן על הוגנות ההליך.<br /><br />
          
          עם זאת, קיימים חריגים לסודיות זו, בהם: 
          <ol>
            <li>פרסום המידע על ידי הצדדים בהסכמתם.</li>
            <li>מצבים שבהם קיימת עניין ציבורי חריג בפרסום המידע.</li>
            <li>כאשר פרטי ההליך כבר פורסמו על ידי מקורות חיצוניים.</li>
          </ol>
          
          **חשיבות סודיות ההליך:**
          <ul>
            <li>מגנה על עדים ומידע רגיש.</li>
            <li>מונעת השפעה על תוצאות המשפט.</li>
            <li>שומרת על יושרת המערכת המשפטית.</li>
          </ul>
        </>
      )
    },
    {
      question: 'כיצד משפיע חוק חובת הגילוי על ההליך הפלילי?',
      answer: (
        <>
          חוק חובת הגילוי מחייב את התביעה לגלות לנאשם את כל הראיות שיש להן בנוגע למקרה. חובת גילוי זו נועדה להבטיח הגינות ושקיפות בהליך המשפטי.<br /><br />
          
          **עקרונות עיקריים בחוק חובת הגילוי:**
          <ol>
            <li>התביעה חייבת לגלות את כל הראיות שיש לה נגד הנאשם.</li>
            <li>יש לגלות גם ראיות שעשויות להיות לטובת הנאשם.</li>
            <li>הנאשם יכול להגיש בקשות לגילוי ראיות נוספות שלא הוצגו.</li>
          </ol>
          
          **השפעות על ההליך הפלילי:**
          <ul>
            <li>מאפשר לנאשם להתכונן להגנתו בצורה מסודרת.</li>
            <li>מפחית את הסיכון להפתעות לא נעימות במהלך המשפט.</li>
            <li>מחזק את אמון הציבור במערכת המשפטית.</li>
          </ul>
        </>
      )
    },
    {
      question: 'מהי "תורת ההגנה מן הצדק" וכיצד היא מיועדת להגן על הנאשם?',
      answer: (
        <>
          תורת ההגנה מן הצדק עוסקת במקרים שבהם ייתכן שידחה בית המשפט את ההליכים המשפטיים נגד הנאשם בשל עיוות דין או פגיעות חמורות בזכויות הנאשם במהלך ההליך.<br /><br />
          
          עיקרון זה מבוסס על התפיסה שההליך הפלילי חייב להתנהל בהוגנות ובצורה שתשמור על כבוד האדם, גם כאשר הנאשם עשה עבירה.<br /><br />
          
          **סיבות לשימוש בתורת ההגנה מן הצדק:**
          <ol>
            <li>פגיעות חמורות בזכויות הנאשם, כגון חקירה לא חוקית או חומרים שהושגו בדרך לא חוקית.</li>
            <li>אי-סבירות או חוסר היגיון בתהליך השיפוטי.</li>
            <li>תנאים שמפרים את האיזון הנכון בין טובת הציבור לזכויות הפרט.</li>
          </ol>
          
          **השלכות:**
          <ul>
            <li>ביטול האישומים או הפסקת ההליכים המשפטיים.</li>
            <li>מניעת עיוות דין והגנה על מערכת המשפט.</li>
          </ul>
        </>
      )
    },
    {
      question: 'מהו עקרון "ההסכמה המודעת" ואילו השלכות יש לו בהליך הפלילי?',
      answer: (
        <>
          עקרון ההסכמה המודעת מתייחס לזכותו של נאשם להודות באשמה או להסכים לעסקת טיעון רק כאשר הוא מבין את ההשלכות של מעשיו.<br /><br />
          
          **המרכיבים החשובים בהסכמה המודעת כוללים:**
          <ol>
            <li>הבנה מלאה של האישומים והעונש האפשרי.</li>
            <li>הבנה של משמעות ההודאה באשמה ויכולתה להשפיע על ההליך המשפטי.</li>
            <li>ההסכמה חייבת להיות חופשית ולא מושגת תחת לחץ או השפעה לא הוגנת.</li>
          </ol>
          
          **השלכות על ההליך הפלילי:**
          <ul>
            <li>אם ההסכמה המודעת לא הושגה, ייתכן שההודאה לא תתקבל כהוכחה בבית המשפט.</li>
            <li>הפרת העיקרון יכולה להוביל לביטול עסקת טיעון או לפסול את ההודאה.</li>
            <li>שמירה על זכויות הנאשם ומניעת פגיעות במערכת המשפט.</li>
          </ul>
        </>
      )
    },
    {
      question: 'מהי משמעות "עילת המעצר" וכיצד היא מתקיימת בהליך הפלילי?',
      answer: (
        <>
          עילת המעצר מתייחסת לסיבות החוקיות שמאפשרות את המעצר של אדם במהלך ההליך הפלילי, כאשר המעצר נחשב להליך חריג שמטרתו להגן על הציבור ולשמור על הליכי המשפט.<br /><br />
          
          **עילות המעצר העיקריות כוללות:**
          <ol>
            <li>חשש לשיבוש הליכים – כאשר קיים חשש שהנאשם ישפיע על עדים או ישבש את הליך החקירה.</li>
            <li>מסוכנות – כאשר הנאשם מהווה סכנה לציבור או לאנשים מסוימים.</li>
            <li>סיכון להיעלמות – כאשר יש חשש שהנאשם ינסה להימלט מהליך המשפט.</li>
          </ol>
          
          **ביטוי בעילת המעצר:**
          <ul>
            <li>מעצר עד תום ההליכים – כאשר מדובר במקרה שבו יש חשד חמור.</li>
            <li>מעצר של חשודים – גם כאשר אין מספיק ראיות להגיש כתב אישום.</li>
          </ul>
        </>
      )
    },
    {
      question: 'כיצד משפיע "אופן חקירת העדים" על מהימנותם וכיצד הוא נבדק בהליך הפלילי?',
      answer: (
        <>
          אופן חקירת העדים משפיע בצורה מהותית על מהימנותם, שכן עדים עשויים להשפיע על הראיות שמוצגות בבית המשפט. חקירה נכונה תורמת לחשיפת האמת, בעוד שחקר לא נכון עלול לפגוע במהימנות העד.<br /><br />
          
          **עקרונות חשובים בחקירת העדים:**
          <ol>
            <li>שאלות ממוקדות וברורות – עדים צריכים לדעת בדיוק מה נשאל מהם.</li>
            <li>הימנעות מלחץ – חקירה לא הוגנת יכולה להוביל לתשובות לא מהימנות.</li>
            <li>הבנת ההקשר – חקירת העדים צריכה להתחשב בפרטים שהוצגו במהלך החקירה הראשית.</li>
          </ol>
          
          **בדיקת מהימנות העדים:**
          <ul>
            <li>שימוש בעדויות ממקורות נוספים לחיזוק מהימנות העד.</li>
            <li>חקירה נגדית שיכולה לחשוף סתירות בעדות.</li>
            <li>בחינת ההיסטוריה של העד – האם העד היה מעורב בהליכים משפטיים קודמים.</li>
          </ul>
        </>
      )
    },
    {
      question: 'מהו תהליך "הסרת חסיוני עד" ומהן ההשלכות המשפטיות שלו?',
      answer: (
        <>
          תהליך הסרת חסיוני עד מתייחס למצב שבו ניתן לבקש מבית המשפט להסיר חסיון מעד מסוים, מה שמאפשר את חקירתו והבאתו לעדות במשפט. חסיון זה קיים במקרים שבהם קיימת סכנה לחשיפת מידע רגיש או פגיעות חמורות בזכויות הפרט.<br /><br />
          
          **השלבים בתהליך כוללים:**
          <ol>
            <li>הגשת בקשה לבית המשפט – הצד המבקש להסיר את החסיון חייב להציג את הסיבות לכך.</li>
            <li>דיון בבקשה – בית המשפט שוקל את הבקשה ואת ההשלכות האפשריות של הסרת החסיון.</li>
            <li>מתן החלטה – אם בית המשפט מחליט להסיר את החסיון, העד יכול להיות מזומן להעיד.</li>
          </ol>
          
          **השלכות הסרת חסיוני עד:**
          <ul>
            <li>חשיפת עדויות שיכולות להשפיע על ההליך המשפטי.</li>
            <li>סיכון לעדים שעלולים להרגיש מאוימים בעקבות עדותם.</li>
            <li>חובת זהירות על התביעה וההגנה להבטיח את שלומם של העדים.</li>
          </ul>
        </>
      )
    },
    {
      question: 'מהו "עיקרון הסודיות" ואילו השפעות יש לו על תהליך החקירה והמשפט?',
      answer: (
        <>
          עיקרון הסודיות מתייחס לחובה לשמור על פרטיות המידע והעדים בהליך הפלילי, במטרה להגן על זכויות הנאשמים והעדים עצמם. סודיות זו חשובה במיוחד כאשר מדובר בעדים שמסכנים את עצמם או את בני משפחתם אם יחשפו.<br /><br />
          
          **השפעות עיקרון הסודיות:**
          <ol>
            <li>שמירה על פרטיות העדים והנאשמים – מונעת פגיעות אפשריות בזכויותיהם.</li>
            <li>יכולת לספק עדויות אמינות יותר – כאשר העדים מרגישים בטוחים לספק מידע מבלי לחשוש מהשלכות.</li>
            <li>קביעת כללים ברורים לגבי מידע שניתן לחשוף – מונעת תקלות ופגיעות אפשריות במערכת המשפט.</li>
          </ol>
          
          **סיכונים במקרה של פגיעות בסודיות:**
          <ul>
            <li>ירידה באמון הציבור במערכת המשפט.</li>
            <li>נזק לציבור אם מידע רגיש דלף.</li>
            <li>חובות על התביעה וההגנה להבטיח את שמירה על סודיות המידע.</li>
          </ul>
        </>
      )
    },
    {
      question: 'כיצד משפיע המושג "סיכון למעצר" על מהלך ההליך הפלילי?',
      answer: (
        <>
          סיכון למעצר מתייחס לחשש שמא הנאשם יבצע עבירה נוספת או ישבש את הליך המשפט אם לא יעצר. מושג זה מתייחס למגוון סיבות שמובילות לכך שמערכת המשפט רואה צורך במעצר.<br /><br />
          
          **גורמים המשפיעים על סיכון למעצר:**
          <ol>
            <li>עבר פלילי – אם לנאשם יש היסטוריה של ביצוע עבירות, הסיכון עולה.</li>
            <li>חוסר יציבות נפשית או כלכלית – מצב זה עלול להוביל להתנהגות מסוכנת.</li>
            <li>תוכניות להימלטות – אם יש חשש שהנאשם יעזוב את המדינה או יסתתר.</li>
          </ol>
          
          **השלכות של סיכון למעצר:**
          <ul>
            <li>הגשת בקשה למעצר עד תום ההליכים – בדרך כלל במקרים חמורים.</li>
            <li>פגיעה בזכויות הנאשם – שהות במעצר יכולה להשפיע על התהליך המשפטי ועל איכות ההגנה.</li>
            <li>השפעות חברתיות – עשוי להוביל לאי-אמון במערכת המשפט.</li>
          </ul>
        </>
      )
    },
    {
      question: 'מהי "תופעת הסתרת מידע" וכיצד היא משפיעה על מהלך ההליך הפלילי?',
      answer: (
        <>
          תופעת הסתרת מידע מתייחסת למקרים שבהם מידע רלוונטי למקרה מוסתר או לא מוצג על ידי צד כלשהו בהליך הפלילי. תופעה זו עשויה להשפיע בצורה משמעותית על תוצאות המשפט.<br /><br />
          
          **סיבות להסתרת מידע:**
          <ol>
            <li>חשש מהשלכות על הצדדים – אם המידע מזיק או יכול לגרום לעונש חמור.</li>
            <li>אי הבנה של חובת הגילוי – צדדים עשויים לא להבין את חובתם להציג מידע מסוים.</li>
            <li>שיקולים טקטיים – צדדים עשויים לבחור שלא לחשוף מידע כדי לשמר יתרון.</li>
          </ol>
          
          **ההשפעות על ההליך הפלילי:**
          <ul>
            <li>פגיעות במהימנות העדים – מידע מוסתר עלול לערער את האמון במערכת.</li>
            <li>סיכון לעיוות דין – כאשר מידע חשוב מוסתר, התוצאה המשפטית עשויה להיות לא נכונה.</li>
            <li>חובות תביעה והגנה – כל צד חייב להבטיח שהמידע המוצג הוא אמין ומלא.</li>
          </ul>
        </>
      )
    },
    {
      question: 'כיצד משפיע עקרון ההגנה העצמית על תהליך קביעת אשמת הנאשם בסדר הדין הפלילי?',
      answer: (
        <>
          עקרון ההגנה העצמית מתייחס לזכותו של אדם להפעיל כוח לצורך הגנה על עצמו או על אחרים מפני סכנה מיידית. כאשר נאשם טוען להגנה עצמית, עליו להוכיח מספר מרכיבים כדי שההגנה תתקבל.<br /><br />
          
          **מרכיבי ההגנה העצמית כוללים:**
          <ol>
            <li>סכנה מיידית – הנאשם חייב להראות כי הוא היה נתון לסכנה מיידית או ממשית.</li>
            <li>הפעולה הייתה הכרחית – הנאשם צריך להוכיח כי לא הייתה לו אפשרות אחרת להימנע מהסכנה.</li>
            <li>הכוח היה מידתי – הכוח שהופעל לא יכול להיות מופרז ביחס לסכנה שהייתה.</li>
          </ol>
          
          **השפעת עקרון ההגנה העצמית על תהליך קביעת האשמה:**
          <ul>
            <li>תובעת נדרשת להוכיח שהנאשם לא פעל מתוך הגנה עצמית – אם לא מצליחה להוכיח זאת, עלולה להיכשל בתביעה.</li>
            <li>כשההגנה מתקבלת, היא עשויה להוביל לזיכוי מוחלט – הנאשם יכול להימנע מכל עונש.</li>
            <li>עשויה לגרום לבחינה מעמיקה של ההקשר – בתי המשפט בוחנים את הסיטואציה בעין רחבה, כולל מצבים קודמים, הכוונות וכו'.</li>
          </ul>
        </>
      )
    },
    {
      question: 'מהי חשיבותו של עיקרון "צדק מהותי" בהליך הפלילי, ואילו בעיות עלולות להתעורר כתוצאה מהפרתו?',
      answer: (
        <>
          עיקרון הצדק המהותי מתייחס לדרישה של מערכת המשפט לספק צדק לא רק מבחינה פורמלית, אלא גם מהותית. משמעות העיקרון היא שכל הצדדים בהליך המשפטי צריכים להיות מבוטאים כראוי ולהיות חלק מהליך הוגן.<br /><br />
          
          **חשיבות העיקרון כוללת:**
          <ol>
            <li>שקיפות בתהליך המשפטי – מאפשרת לכל הצדדים לדעת מה מתרחש בהליך.</li>
            <li>הגנה על זכויות הנאשם – מתייחס למצב בו הנאשם מקבל הזדמנות להציג את הגנתו בצורה מלאה.</li>
            <li>שמירה על אמון הציבור במערכת המשפט – הציבור נדרש להרגיש שהמערכת פועלת בהגינות ובשוויון.</li>
          </ol>
          
          **בעיות שעלולות להתעורר כתוצאה מהפרת העיקרון:**
          <ul>
            <li>חוסר אמון במערכת המשפט – הציבור עלול לאבד אמון במערכת אם לא ירגיש שההליך הוגן.</li>
            <li>פגיעות בזכויות הנאשמים – יכול להוביל להרשעות לא נכונות או עונשים חמורים מדי.</li>
            <li>ערעורים על פסקי דין – עשויים להתעורר עוררים על פסקי דין בשל פגיעות בעקרון הצדק.</li>
          </ul>
        </>
      )
    },
    {
      question: 'כיצד נבחנים "תנאים למעצר" בסדר הדין הפלילי, ואילו שיקולים משפיעים על ההחלטה בדבר מעצר?',
      answer: (
        <>
          תנאים למעצר מתייחסים לסטנדרטים המשפטיים שעל פי הם בית המשפט מחליט אם לעצור אדם או לא. כאשר מתקבלת בקשה למעצר, השופט צריך לשקול מספר שיקולים כדי לקבוע אם יש מקום למעצר.<br /><br />
          
          **התנאים כוללים:**
          <ol>
            <li>ראיות לכאורה – האם יש מספיק ראיות כדי להראות שנעברה עבירה.</li>
            <li>עילת מעצר – האם יש עילה לכך שהנאשם צריך להיות במעצר, כמו חשש לשיבוש הליך משפטי או מסוכנות לציבור.</li>
            <li>אפשרויות חלופיות – האם ניתן לשחרר את הנאשם בתנאים מגבילים כמו מעצר בית.</li>
          </ol>
          
          **שיקולים שמשפיעים על ההחלטה:**
          <ul>
            <li>עבר פלילי של הנאשם – אם יש לו היסטוריה של עבירות, זה יכול להשפיע על ההחלטה.</li>
            <li>מצבו הנפשי והחברתי – בית המשפט בודק את הכשירות של הנאשם לעמוד לדין ואת ההשפעות של המעצר עליו.</li>
            <li>החמרה של העבירה – אם העבירה חמורה במיוחד, השופט עשוי להעדיף מעצר.</li>
          </ul>
        </>
      )
    },
    {
      question: 'מהי חשיבותו של "עיקרון חזקת החפות" בסדר הדין הפלילי, ואילו אתגרים נגרמים בעקבות יישומו?',
      answer: (
        <>
          עיקרון חזקת החפות מתייחס לזכותו של הנאשם להיחשב חף מפשע עד שיוכח אחרת על ידי התביעה. עיקרון זה הוא יסוד חשוב במערכת המשפטית והוא קובע שהנאשם לא צריך להוכיח את חפותו.<br /><br />
          
          **חשיבות העיקרון:**
          <ol>
            <li>שמירה על זכויות האדם – עקרון זה מגן על הנאשם מפני הרשעה לא מוצדקת.</li>
            <li>הגנה מפני השלטון – מונע מהשלטון לפעול בלא גבולות כנגד האזרח.</li>
            <li>חיזוק אמון הציבור במערכת המשפט – כאשר הנאשם נחשב חף מפשע, הציבור מרגיש שהמערכת פועלת בהגינות.</li>
          </ol>
          
          **אתגרים בעקבות יישום העיקרון:**
          <ul>
            <li>קושי בתביעה – לעיתים, על התביעה להוכיח אשמה על אף חזקת החפות, מה שמקשה על הליך השיפוט.</li>
            <li>זמן והוצאות – תהליכים ארוכים עשויים להוביל להוצאות גבוהות יותר ולאי נוחות עבור הנאשמים.</li>
            <li>קונפליקטים עם קורבנות העבירה – לעיתים הקורבנות מרגישים כי לא מקבלים את הצדק המגיע להם.</li>
          </ul>
        </>
      )
    },
    
  ];
  

  return (
    <div className="flashcard-list">
      {flashcards.map((card, index) => (
        <Flashcard key={index} question={card.question} answer={card.answer} />
      ))}
    </div>
  );
};

export default App;
