function	validateForm() {

// 	const form = document.forms["form"];
// 	const button = form.elements["form-btn"];

// 	const inputArr = Array.from(form);
// 	const validInputArr = [];

// 	inputArr.forEach((el) => {
// 		if (el.hasAttribute("data-reg")) {
// 			el.setAttribute("is-valid", "0");
// 			validInputArr.push(el);
// 		}
// 	})

// 	form.addEventListener("input", inputHandler);
// 	form.addEventListener("submit", formCheck);

// 	function inputHandler({target}) {
// 		if (target.hasAttribute("data-reg")) {
// 			inputCheck(target);
// 		}
// 	}

// 	function inputCheck(el) {
// 		const inputValue = el.value;
// 		const inputReg = el.getAttribute("data-reg");
// 		const reg = new RegExp(inputReg);
// 		if (reg.test(inputValue)) {
// 			el.style.border = ("2px solid rgb(0, 196, 0");
// 			el.setAttribute("is-valid", "1");
// 		} else {
// 			el.style.border = "2px solid rgb(255, 0, 0)";
// 			el.setAttribute("is-valid", "0");
// 		}
// 	}

// 	function formCheck(e) {
// 		e.preventDefault();
// 		const isAllValid = [];
// 		validInputArr.forEach((el) => {
// 			isAllValid.push(el.getAttribute("is-valid"));
// 		});
		
// 		const isValid = isAllValid.reduce((acc, current) => {
// 			return acc & current;
// 		});

// 		if (!Boolean(Number(isValid))) {
// 			alert("Заполните поля правильно!");
// 			return;
// 		}
// 		formSubmit();
// 	}
// 	async function formSubmit() {
// 		const data = serializeForm(form);
// 		const response = await sendData(data);
// 		if (response.ok) {
// 			let result = await response.json();
// 			alert(result.message);
// 			formReset();
// 		} else {
// 			alert("Код ошибки: " + response.status);
// 		}
// 	}
// 	function serializeForm(formNode) {
// 		return new FormData(form);
// 	}

// 	async function sendData(data) {
// 		return await fetch("send_mail.php", { 
// 			method: "POST",
// 			body: data,
// 		});
// 	}

// 	function formReset() {
// 		form.reset();
// 		validInputArr.forEach((el) => {
// 			el.setAttribute("is-valid", 0);
// 			el.style.border = "none";
// 		})
// 	}
const form = document.forms["form"];
const formArr = Array.from(form);
const validFormArr = [];
const button = form.elements["form-btn"];

formArr.forEach((el) => {
  if (el.hasAttribute("data-reg")) {
    el.setAttribute("is-valid", "0");
    validFormArr.push(el);
  }
});

form.addEventListener("input", inputHandler);
form.addEventListener("submit", formCheck);

function inputHandler({ target }) {
  if (target.hasAttribute("data-reg")) {
    inputCheck(target);
  }
}

function inputCheck(el) {
  const inputValue = el.value;
  const inputReg = el.getAttribute("data-reg");
  const reg = new RegExp(inputReg);
  if (reg.test(inputValue)) {
    el.setAttribute("is-valid", "1");
    el.style.border = "2px solid rgb(0, 196, 0)";
  } else {
    el.setAttribute("is-valid", "0");
    el.style.border = "2px solid rgb(255, 0, 0)";
  }
}

function formCheck(e) {
  e.preventDefault();
  const allValid = [];
  validFormArr.forEach((el) => {
    allValid.push(el.getAttribute("is-valid"));
  });
  const isAllValid = allValid.reduce((acc, current) => {
    return acc & current;
  });
  if (!Boolean(Number(isAllValid))) {
    alert("Заполните поля правильно!");
    return;
  }
  formSubmit();
}

async function formSubmit() {
  const data = serializeForm(form);
  const response = await sendData(data);
  if (!response.ok) {
	alert("Упс, не получилось оставить заявку. Перезвоните нам по номеру +7 989 793-51-05");
  } else {
	alert("Данные отправлены, скоро мы с вами свяжемся!");
	formReset();
  }
}

function serializeForm(formNode) {
  return new FormData(form);
}

async function sendData(data) {
  return await fetch("send_mail.php", {
    method: "POST",
    body: data,
  });
}

function formReset() {
  form.reset();
  validFormArr.forEach((el) => {
    el.setAttribute("is-valid", 0);
    el.style.border = "none";
  });
}

}






export default validateForm;