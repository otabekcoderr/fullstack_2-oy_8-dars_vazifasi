//1-masala. Foydalanuvchi profilini to‘g‘rilash

// let user = {
//   firstName: "   aSaDbEk  ",
//   lastName: " aBDULHAMIDOV ",
//   email: "  ASADBEK@GMAIL.com ",
//   username: "de2refr",
// };

// function name_fixer(str) {
//   let trm = str.trim();
//   return trm[0].toUpperCase() + trm.slice(1).toLowerCase();
// }

// function info_fixer(user) {
//   let email_checker = false;
//   let username_checker = false;
//   let cleanEmail = user.email.trim().toLowerCase();

//   if (cleanEmail.includes("@") && cleanEmail.endsWith(".com")) {
//     email_checker = true;
//   } else {
//     email_checker = false;
//     console.log("emailda '@' va '.com' bo'lishi shart");
//   }

//   if (user.username.trim().length >= 5) {
//     username_checker = true;
//   } else {
//     username_checker = false;
//     console.log("Usrname kamida 5ta belgidan iborat bo'lishi kerak!");
//   }
//   if (email_checker === true && username_checker === true) {
//     console.log(`Ism: ${name_fixer(user.firstName)}`);
//     console.log(`Familiya: ${name_fixer(user.lastName)}`);
//     console.log(`Email: ${cleanEmail}`);
//     console.log(`Username: ${user.username.trim().toLowerCase()}`);
//     console.log(`Holat: muvaffaqiyatli ro‘yxatdan o‘tdi`);
//   } else {
//     console.log("Holat: xatolik bor!");
//   }
// }

// info_fixer(user);

//======================================================================

//2-masala. Ro‘yxatdan o‘tish formasini tekshirish

// let user = {
//   name: "  oTaBEk",
//   email: "   MALIKA@EXAMPLE.COM    ",
//   phone: " +998 90 123 45 67 ",
//   password: "donefrnr",
// };
// // ism va familya tekshrivchisi agent_001
// const name_fixer = function (str) {
//   if (typeof str === "string") {
//     console.log(
//       `Ism: ${str.trim()[0].toUpperCase() + str.trim().slice(1).toLowerCase()}`,
//     );
//     return true;
//   } else {
//     console.log("Ism: faqat matn kiriting");
//     return false;
//   }
// };

// // email tekshiruvchi agent_002
// const email_fixer = function (email) {
//   if (typeof email === "string") {
//     let cleanEmail = email.trim().toLowerCase();
//     if (cleanEmail.includes("@") && cleanEmail.endsWith(".com")) {
//       console.log(`Email: ${cleanEmail}`);
//       return true;
//     } else {
//       console.log("Email: Emailda '@' bo'lishi va '.com' bilan tugashi kerak");
//       return false;
//     }
//   } else {
//     console.log("Email: faqat matn kiriting");
//     return false;
//   }
// };

// // tel tekshiruvchi agent_003
// const tel_fixer = function (tel) {
//   if (typeof tel === "string") {
//     if (tel.trim().startsWith("+998")) {
//       console.log(`Telefon: ${tel.trim()}`);

//       return true;
//     } else {
//       console.log("Telefon: Raqam '+998' bilan boshlanishi kerak");
//       return false;
//     }
//   } else {
//     console.log("Telefon: faqat matn kiriting");
//     return false;
//   }
// };

// //password tekshiruvchi agent_004
// const password_fixer = function (password) {
//   if (typeof password === "string") {
//     if (password.trim().length >= 8) {
//       console.log(`Parol uzunligi: ${password.trim().length}`);
//       return true;
//     } else {
//       console.log(
//         "Parol uzunligi: password kamida 8 belgidan iborat bo'lishi kerak!",
//       );
//       return false;
//     }
//   } else {
//     console.log("Parol uzunligi: faqat matn va raqam iborat password kiriting");
//     return false;
//   }
// };

// const info_user = function (user) {
//   let name = name_fixer(user.name);
//   let email = email_fixer(user.email);
//   let phone = tel_fixer(user.phone);
//   let parol = password_fixer(user.password);

//   if (name && email && phone && parol) {
//     console.log("Holat: ma’lumotlar qabul qilindi");
//   } else {
//     console.log("Holat: ma'lumotlar qabul qilinmadi");
//   }
// };
// info_user(user);

//3-masala. Mahsulot tavsifini tekshirish

let product = {
  name: 3,
  category: 4,
  description: " headphones with noise cancellation ",
  code: " WH-2026 ",
};

//name fixer agent_001
const name_fixer = (str) => {
  if (typeof str === "string") {
    console.log(
      `Mahsulot: ${str.trim()[0].toUpperCase() + str.trim().slice(1).toLowerCase()}`,
    );
    return true;
  } else {
    console.log("Mahsulot: faqat matn kiriting");
    return false;
  }
};

//kategoriya fixer agent_002
const kategor_fixer = (str) => {
  if (typeof str === "string") {
    let cleanKat = str.trim().toUpperCase();
    console.log(`Kategoriya: ${cleanKat}`);
    return true;
  } else {
    console.log("Kategoriya: faqat matn kiriting");
    return false;
  }
};

// description fixer agent_003

const description_fixer = (str) => {
  if (
    typeof str === "string" &&
    str.toLowerCase().includes("bluetooth") &&
    str.trim().length >= 20
  ) {
    console.log(`Description: ${str.trim()}`);
    return true;
  } else if (typeof str !== "string") {
    console.log("Description: Matnli tavsif kiriting");
    return false;
  } else if (
    typeof str === "string" &&
    !str.toLowerCase().includes("bluetooth")
  ) {
    console.log("Description: mahsulot nomini unutmang");
    return false;
  } else if (str.trim().length >= 20) {
    console.log("Description: Matn kamida 20 belgidan iborat bo'lsin");
  }
};

//kod fixer agent_004

const kod_fixer = (kod) => {
  if (typeof kod === "string" && kod.trim().startsWith("WH-")) {
    console.log(`Kod: ${kod.trim()}`);
    return true;
  } else {
    console.log(`Kod: Kod 'WH-' boshlansin`);
    return false;
  }
};

//asosiy funksiya

const outpoot = (product) => {
  let name = name_fixer(product.name);
  let kategoriya = kategor_fixer(product.category);
  let description = description_fixer(product.description);
  let kod = kod_fixer(product.code);

  if (name && kategoriya && description && kod) {
    console.log("Holat: ma’lumotlar qabul qilindi");
  } else {
    console.log("Holat: ma'lumotlar qabuk qilinmadi");
  }
};

outpoot(product);
