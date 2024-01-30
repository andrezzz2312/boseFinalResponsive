// Variables
let videoloop,
	video1,
	video2,
	video3,
	subVideo1,
	subVideo2,
	subVideo3,
	buttonContainerMade,
	buttonGrid,
	threesixty,
	delay,
	subVideoTurn,
	subVideoBackLoop,
	buttonDimensions,
	firstPage,
	rotationPage,
	textContent,
	label,
	labelCont,
	paragraph,
	titleH2,
	title1,
	createdSubTitle,
	span,
	line,
	circle,
	backButton,
	backButtonRotation,
	filler,
	backButtonContainer,
	backButtonContainerRotation,
	buttonGridContainer,
	buttonFontvar,
	bigButtonFontvar,
	globalFontvar,
	containVideoWidth,
	containVideoHeight,
	pCont,
	pCont2,
	list,
	globalParent,
	pageIndex,
	pContent,
	pContent2,
	boxInfo,
	mainButtonsColor,
	subButtonsColor,
	groupButton,
	individualButton,
	subMiniVideo

let boxVideo = []
let buttonShort = []
let dataId = []
let dataVariant = []
let video1check = false
let video2check = false
let video3check = false

let x = window.matchMedia('(max-height: 550px)')
const loop = document.querySelector('#loopVideo')
const loopContainer = document.querySelector('#loop')
const video1Container = document.querySelector('#video1')
const video2Container = document.querySelector('#video2')
const video3Container = document.querySelector('#video3')
const subVideo1Container = document.querySelector('#subVideo1')
const subVideo2Container = document.querySelector('#subVideo2')
const subVideo3Container = document.querySelector('#subVideo3')
const subVideoTurnContainer = document.querySelector('#subVideoTurn')
const subVideoBackLoopContainer = document.querySelector('#subVideoBackLoop')
const rotation = document.querySelector('#rotation')
const rotationContainer = document.querySelector('#rotationContainer')
const videoHolder = document.querySelector('#videoHolder')
const mainButtons = document.querySelector('#mainButtons')
const showCont = document.querySelector('#showCont')

// const buttonContainer = document.querySelectorAll('.buttonContainer')
const mainContainer = document.querySelector('.container')
const loader = document.querySelector('.loader')
const viewR_button = document.querySelector('#viewR_button')
const initial = document.querySelector('.initial')
const warningText = document.querySelector('.warningText')
const warning = document.querySelector('.warning')
const expand = document.querySelector('#expand')
const contract = document.querySelector('#contract')
const close = document.querySelector('#close')
const alertdiv = document.querySelector('.alertdiv')
const modalalert = document.querySelector('.modalalert')
const quality = document.querySelector('#quality_button')
const mainMenuB = document.querySelectorAll('.mainB')
const titulo = document.querySelectorAll('.titulo')
const buttonContent = {
	vb1: {
		// title: `asd`,
		// subTitle: `Select a product to learn more about Trident’s suite of solutions for location and marking.
		// `,
		inputButtonGrid: [
			`beamF`,
			`4kU`,
			`propietaryT`,
			`connectivity`,
			`softwareS`,
			`compatibility`,
		],
		boxInfo: {
			beamF: {
				title: 'TriView® Marker Post',
				content: [
					`The industry’s best marker for creating awareness of buried facilities and reminding excavators to call before they dig`,
					`Triangular profile combined with internal Flex PLUS™ rod makes the TriView®­ the most durable marker post available`,
					`360-degree visibility`,
					`Made with RhinoPoly® — our proprietary blend of thermoplastics`,
					`Patented TriGrip™ Anchor for locking post into ground`,
					`Performs in temperatures ranging from -40° F to +150° F`,
					`UV stable, designed for 10+ years of outdoor use with our 10-year warranty`,
					`Available as a test station with removable cap that offers easy access to tracer wire`,
				],
			},
			'4kU': {
				title: `Detectable\nWarning Tape`,
				content: [
					`Endures temperatures from -60°F to 250°F`,
					`Permanently imprinted with black ink to last the lifetime of the product`,
					`Incredibly strong and promises long-term durability`,
					`Wide variety of APEA colors, allowing you to select the ideal hue for your needs`,
					`Aluminum core is detected through means of inductive locating`,
				],
			},
			propietaryT: {
				title: `Pro-Trace® CCS\nTracer Wire`,
				content: [
					`Used for tracer wire applications to conductively locate buried utility lines for gas, water, sewer, telecommunication, and electrical markets. Designed to embody the flexibility, memory, and feel of copper`,
					`Has a 50% higher break-load, minimizing damage during installation and while in service`,
					`For installation in open-trench, plow-in, or inside conduit using one wire`,
					`Equal to copper in signal performance, lower in cost, and great price stability`,
					`RoHS Compliant and works with connectors you already use`,
					`Various tracer wire options available to meet different applications including open cut, horizontal directional drilling, and pipe bursting`,
				],
			},
			connectivity: {
				title: `HideOut™\nTest Station`,
				content: [
					`Provides easy access to tracer wire in spots where upright posts are not practical`,
					`Flush-mounted test station ideal for areas where mowers are prevalent`,
					`Telescoping terminal board provides easy access to terminals for locators`,
					`Comes standard with two terminals and features industry-standard 11-hole pattern`,
					`Locking lid with metal plate makes HideOut™ easy to locate`,
					`Hot-stamped graphics`,
					`Patented TriGrip Anchor™ for securing HideOut™ into the ground`,
				],
			},
			softwareS: {
				title: `ISO-Switch™`,
				content: [
					`Can significantly speed up locating by allowing the locator tech to connect to all the facilities at one time with the flick of a switch`,
					`Shunts or jumps each one of the laterals with the ground without the need for any external hardware`,
					`Simplifies the locating setup, saving time and labor without the hassles of manipulating terminal hardware`,
					`Can be integrated into a variety of access points: Tri-View Test Station, RhinoDome Test Station, HideOut, Tracer Pit Handholes, and more`,
				],
			},
			compatibility: {
				title: `PRO-TRACE®\nGrounding Rod`,
				content: [
					`Grounds the dead end of tracer wire to complete the circuit for accurate location`,
					`1.5-pound, drive-in, magnesium ground rod designed for tracer wire systems`,
					`Twist-on connector included to splice lead wire to tracer wire`,
					`20 feet of built-in lead wire allows for placement flexibility`,
					`HDPW cap improves drivability into the earth and is simple to install`,
				],
			},
		},
	},
	vbs: {
		// title: `asd`,
		// subTitle: `Select a product to learn more about Trident’s suite of solutions for location and marking.
		// `,
		inputButtonGrid: [
			`beamF`,
			`4kU`,
			`propietaryT`,
			`connectivity`,
			`softwareS`,
			`compatibility`,
		],
		boxInfo: {
			beamF: {
				title: 'TriView® Marker Post',
				content: [
					`The industry’s best marker for creating awareness of buried facilities and reminding excavators to call before they dig`,
					`Triangular profile combined with internal Flex PLUS™ rod makes the TriView®­ the most durable marker post available`,
					`360-degree visibility`,
					`Made with RhinoPoly® — our proprietary blend of thermoplastics`,
					`Patented TriGrip™ Anchor for locking post into ground`,
					`Performs in temperatures ranging from -40° F to +150° F`,
					`UV stable, designed for 10+ years of outdoor use with our 10-year warranty`,
					`Available as a test station with removable cap that offers easy access to tracer wire`,
				],
			},
			'4kU': {
				title: `Detectable\nWarning Tape`,
				content: [
					`Endures temperatures from -60°F to 250°F`,
					`Permanently imprinted with black ink to last the lifetime of the product`,
					`Incredibly strong and promises long-term durability`,
					`Wide variety of APEA colors, allowing you to select the ideal hue for your needs`,
					`Aluminum core is detected through means of inductive locating`,
				],
			},
			propietaryT: {
				title: `Pro-Trace® CCS\nTracer Wire`,
				content: [
					`Used for tracer wire applications to conductively locate buried utility lines for gas, water, sewer, telecommunication, and electrical markets. Designed to embody the flexibility, memory, and feel of copper`,
					`Has a 50% higher break-load, minimizing damage during installation and while in service`,
					`For installation in open-trench, plow-in, or inside conduit using one wire`,
					`Equal to copper in signal performance, lower in cost, and great price stability`,
					`RoHS Compliant and works with connectors you already use`,
					`Various tracer wire options available to meet different applications including open cut, horizontal directional drilling, and pipe bursting`,
				],
			},
			connectivity: {
				title: `HideOut™\nTest Station`,
				content: [
					`Provides easy access to tracer wire in spots where upright posts are not practical`,
					`Flush-mounted test station ideal for areas where mowers are prevalent`,
					`Telescoping terminal board provides easy access to terminals for locators`,
					`Comes standard with two terminals and features industry-standard 11-hole pattern`,
					`Locking lid with metal plate makes HideOut™ easy to locate`,
					`Hot-stamped graphics`,
					`Patented TriGrip Anchor™ for securing HideOut™ into the ground`,
				],
			},
			softwareS: {
				title: `ISO-Switch™`,
				content: [
					`Can significantly speed up locating by allowing the locator tech to connect to all the facilities at one time with the flick of a switch`,
					`Shunts or jumps each one of the laterals with the ground without the need for any external hardware`,
					`Simplifies the locating setup, saving time and labor without the hassles of manipulating terminal hardware`,
					`Can be integrated into a variety of access points: Tri-View Test Station, RhinoDome Test Station, HideOut, Tracer Pit Handholes, and more`,
				],
			},
			compatibility: {
				title: `PRO-TRACE®\nGrounding Rod`,
				content: [
					`Grounds the dead end of tracer wire to complete the circuit for accurate location`,
					`1.5-pound, drive-in, magnesium ground rod designed for tracer wire systems`,
					`Twist-on connector included to splice lead wire to tracer wire`,
					`20 feet of built-in lead wire allows for placement flexibility`,
					`HDPW cap improves drivability into the earth and is simple to install`,
				],
			},
		},
	},
}
mainButtonsColor = {
	water: '#297def',
	telecom: '#efa229',
	electric: '#bd3737',
	gas: '#efe329',
}
subButtonsColor = {
	water: '#000000',
	telecom: '#000000',
	electric: '#000000',
	gas: '#000000',
}

let isMobile = false
window.mobileCheck = function () {
	let mobile = (function (a) {
		if (
			/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
				a
			) ||
			/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
				a.substr(0, 4)
			)
		)
			isMobile = true
	})(navigator.userAgent || window.opera)
	// console.log(isMobile)
}
mobileCheck()
let isIOS
if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
	isIOS = true
} else {
	isIOS = false
}

// var buttonsText = []
const machineButtonLayout = {
	vb1: [
		{
			title: `BEAM-FORMING MICROPHONE ARRAY`,
		},
		{
			title: `4K ULTRA-HD CAMERA`,
		},
		{
			title: `PROPRIETARY TRANSDUCER`,
		},
		{
			title: `CONNECTIVITY`,
		},
		{
			title: `SOFTWARE SUITE`,
		},
		{
			title: `COMPATIBILITY`,
		},
	],
	vbs: [
		{
			title: `BEAM-FORMING MICROPHONE ARRAY`,
		},
		{
			title: `4K ULTRA-HD CAMERA`,
		},
		{
			title: `PROPRIETARY TRANSDUCER`,
		},
		{
			title: `CONNECTIVITY`,
		},
		{
			title: `SOFTWARE SUITE`,
		},
		{
			title: `COMPATIBILITY`,
		},
	],
	gas: [
		{
			textLeft: '15%',
			textTop: '35%',
			title: `TriView®\nMarker Post`,
		},
		{
			textLeft: '25.5%',
			textBottom: '43%',
			title: `Detectable\nWarning Tape`,
		},
		{
			textLeft: '39%',
			textBottom: '34%',
			title: `PRO-TRACE®\nTracer Wire`,
		},
		{
			textLeft: '51%',
			textBottom: '39%',
			title: `HideOut™\nTest Station`,
		},
		{
			textRight: '35%',
			textBottom: '31%',
			title: `ISO-Switch™`,
		},
		{
			textRight: '52%',
			textBottom: '8.5%',
			title: `PRO-TRACE®\nGrounding Rod`,
		},
		{
			textRight: '23%',
			textBottom: '15%',
			title: `Durable\nWire Connector`,
		},
		{
			textRight: '13%',
			textTop: '12%',
			title: `TracerLet\nTest Station`,
		},
		{
			textRight: '17%',
			textTop: '22%',
			title: `SoilMarkers™`,
		},
		{
			textRight: '22%',
			textTop: '28%',
			title: `Utility\nMarking Flags`,
		},
		{
			textRight: '26%',
			textTop: '45%',
			title: `Curb Markers`,
		},
	],
	telecom: [
		{
			textLeft: '17%',
			textTop: '7%',
			title: `Aerial Cable Marker`,
		},
		{
			textLeft: '3%',
			textTop: '22%',
			title: `Snaparound®\nCable Marker`,
		},

		{
			textLeft: '21%',
			textTop: '53%',
			title: `Aluminum\nUtility Pole Tag`,
		},
		{
			textRight: '71.5%',
			textBottom: '23%',
			title: `PRO-TRACE\u00AE\nGrounding Rod`,
		},
		{
			textLeft: '34%',
			textTop: '61%',
			title: `TriView®\nMarker Post`,
		},
		{
			textLeft: '46%',
			textBottom: '37%',
			title: `PRO-TRACE®\nTracer Wire`,
		},
		{
			textRight: '35%',
			textTop: '51%',
			title: `Curb Markers`,
		},
		{
			textLeft: '70%',
			textBottom: '32%',
			title: `Detectable\nWarning Tape`,
		},
		{
			textRight: '4%',
			textTop: '40%',
			title: `Utility\nMarking Flags`,
		},
	],
	water: [
		{
			textLeft: '28.5%',
			textTop: '23%',
			title: `SoilMarkers™`,
		},

		{
			textLeft: '45.5%',
			textTop: '28%',
			title: `Utility\nMarking Flags`,
		},
		{
			textLeft: '65%',
			textTop: '43.5%',
			title: `Curb Markers`,
		},
		{
			textLeft: '85.5%',
			textTop: '54%',
			title: `Detectable\nWarning Tape`,
		},
		{
			textLeft: '13%',
			textTop: '52.5%',
			title: `Fire Hydrant Rings`,
		},
		{
			textLeft: '36.5%',
			textTop: '60%',
			title: `TracerLet\nTest Station`,
		},
		{
			textLeft: '51%',
			textTop: '73.5%',
			title: `PRO-TRACE®\nTracer Wire`,
		},
		{
			textLeft: '77%',
			textTop: '65%',
			title: `Durable\nWire Connector`,
		},
	],
	electric: [
		{
			textLeft: '5.5%',
			textTop: '23.5%',
			title: `Long Range\nMetal Mount\nRFID Tags`,
		},

		{
			textLeft: '35.5%',
			textTop: '64%',
			title: `Detectable\nWarning Tape`,
		},
		{
			textLeft: '52%',
			textTop: '56%',
			title: `Curb Markers`,
		},
		{
			textLeft: '57.5%',
			textTop: '38%',
			title: `Utility\nMarking Flags`,
		},
		{
			textLeft: '78%',
			textTop: '52%',
			title: `ANSI / NEMA / OSHA\nSafety Labels`,
		},
		{
			textLeft: '87%',
			textTop: '38.5%',
			title: `SoilMarkers™`,
		},
	],
}

const rotationContent = {
	turnlock10:
		'https://rotation.marketscale.com/Companies/BoonEdam/Turnlock100/Turnlock100.spin?fullscreen=false',
	turnlock15:
		'https://rotation.marketscale.com/Companies/BoonEdam/Turnlock150/Turnlock150.spin?fullscreen=false',
	tourlock18:
		'https://rotation.marketscale.com/Companies/BoonEdam/Tourlock180/Tourlock180.spin?fullscreen=false',
	tourlock182:
		'https://rotation.marketscale.com/Companies/BoonEdam/Tourlock180/Tourlock180.spin?fullscreen=false',
	lifelineSw:
		'https://rotation.marketscale.com/Companies/BoonEdam/LifeLineSwing/LifeLineSwing.spin?fullscreen=false',
	circlelockSo:
		'https://rotation.marketscale.com/Companies/BoonEdam/CirclelockSolo/CirclelockSolo.spin?fullscreen=false',
	circlelockSo2:
		'https://rotation.marketscale.com/Companies/BoonEdam/CirclelockSolo/CirclelockSolo.spin?fullscreen=false',
	trilock60:
		'https://rotation.marketscale.com/Companies/BoonEdam/TriLock60/TriLock60.spin?fullscreen=false',
}
// Display fullscreen button
// if (!isMobile) {
// 	fullscreen_button.style.display = 'none'
// } else if (isIOS) {
// 	fullscreen_button.style.display = 'none'
// }

function createButtons(e, i, buttonContainer) {
	const createdButton = document.createElement('button')

	createdButton.classList.add('button')
	createdButton.classList.add('subButton')
	createdButton.style.fontSize = bigButtonFontvar
	createdButton.textContent = e.title

	buttonContainer.appendChild(createdButton)
}

function calculateResponsiveStrokeWidth() {
	// You can adjust this logic based on your specific requirements
	const viewportWidth = window.innerWidth
	const baseStrokeWidth = 2 // Default stroke width for larger screens
	const maxWidth = 2400 // Maximum width where stroke width remains constant

	// Calculate responsive stroke width based on viewport width
	const responsiveStrokeWidth = Math.min(
		baseStrokeWidth,
		(baseStrokeWidth * viewportWidth) / maxWidth
	)

	return responsiveStrokeWidth
}
function InterpolateVideo(videoToPause, videoToVanish, videoToPlay) {
	if (videoToPause) {
		videoToPause.pause()
	}
	console.log('interpolate')
	videoToVanish.classList.add('short-vanish')

	videoToPlay.style.opacity = 1
	setTimeout(() => {
		videoToPlay.play()
	}, 500)
}

// loop.currentTime = 60

let isShowMB = 0
function HideShowMainButtons() {
	// Replace with the actual ID
	console.log(isShowMB % 2 === 1)
	if (isShowMB === 0) {
		mainButtons.classList.add('vanishFromTop', 'disabled')
		mainButtons.classList.remove('show')
	} else if (isShowMB % 2 === 1) {
		mainButtons.classList.add('showFromBottom')
		mainButtons.classList.remove('vanishFromBottom', 'disabled')
	} else {
		mainButtons.classList.remove('showFromBottom')
		mainButtons.classList.add('vanishFromBottom', 'disabled')
	}

	isShowMB++
}

// Vanish/show when a main button is pressed
function HideShowCont() {
	showCont.classList.remove('hidden')
	showCont.classList.toggle('short-vanish')
	showCont.classList.toggle('show')
}

// Set animations for the buttons
function animations() {
	console.trace()
	if (pCont) {
		const elementContainers = document.querySelectorAll('.elementContainer')

		// titleH2.style.animation = 'show 0.5s ease-out forwards'

		createdSubTitle.style.animation = 'show 0.5s ease-out forwards'
		// createdSubTitle.style.animationDelay = '0.4s'
		let counter = 0.3

		if (delay) {
			// console.log(delay)
			let inputArray = []
			let bool = false
			subVideo2.addEventListener('timeupdate', function () {
				// console.log(subVideo2.currentTime)
				//currentTime use second, if you want min *60

				delay.forEach((element, i) => {
					if (Math.floor(subVideo2.currentTime) === element) {
						if (inputArray.length === 0) {
							elementContainers[i].style.animation =
								'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

							inputArray.push(Math.floor(subVideo2.currentTime))
							// console.log(inputArray)
						} else {
							if (
								element ===
								inputArray.find((num) => {
									return num === element
								})
							) {
							} else {
								if (pageIndex === 'piggybackingP') {
									if (Math.floor(subVideo2.currentTime) === 36) {
										const elementContainersId =
											document.querySelectorAll('#pCont1')
										// console.log(elementContainersId)
										elementContainersId.forEach((element) => {
											element.style.animation =
												'vanishpCont 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards '
											setTimeout(() => {
												element.style.display = 'none'
												const elementContainersId2 =
													document.querySelectorAll('#pCont2')
												elementContainersId2.forEach((element) => {
													element.style.display = 'flex'
												})
											}, 800)
										})
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo2.currentTime))
									} else {
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo2.currentTime))
									}
								} else if (pageIndex === 'tailgatingP1') {
									if (Math.floor(subVideo2.currentTime) === 35) {
										const elementContainersId =
											document.querySelectorAll('#pCont1')
										// console.log(elementContainersId)
										elementContainersId.forEach((element) => {
											element.style.animation =
												'vanishpCont 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards '
											setTimeout(() => {
												element.style.display = 'none'
												const elementContainersId2 =
													document.querySelectorAll('#pCont2')
												elementContainersId2.forEach((element) => {
													element.style.display = 'flex'
												})
											}, 800)
										})
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo2.currentTime))
									} else {
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo2.currentTime))
									}
								} else if (pageIndex === 'tailgatingP2') {
									if (Math.floor(subVideo2.currentTime) === 30) {
										const elementContainersId =
											document.querySelectorAll('#pCont1')
										// console.log(elementContainersId)
										elementContainersId.forEach((element) => {
											element.style.animation =
												'vanishpCont 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards '
											setTimeout(() => {
												element.style.display = 'none'
												const elementContainersId2 =
													document.querySelectorAll('#pCont2')
												elementContainersId2.forEach((element) => {
													element.style.display = 'flex'
												})
											}, 800)
										})
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo2.currentTime))
									} else {
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo2.currentTime))
									}
								} else {
									elementContainers[i].style.animation =
										'fadein 0.5s ease-in-out forwards'
									inputArray.push(Math.floor(subVideo2.currentTime))
								}

								// console.log(inputArray)
							}
						}
					}
					// console.log(pageIndex)
				})

				if (inputArray.length === delay.length && !bool) {
					let removeCount = inputArray.length
					let elementContainersArray = Array.from(elementContainers)
					// console.log(elementContainersArray)
					elementContainersArray.splice(0, removeCount)

					elementContainersArray.forEach((element, i) => {
						element.style.animation =
							'fadein 0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards'
						// element.style.animationDelay = `${counter}s`
						// counter += 0.2
					})
					bool = true
				}
			})
		} else {
			// console.log('else delay')
			// console.log(pageIndex)
			if (pageIndex === 'mainMenuFront') {
				titleH2.style.animation = 'show 0.5s ease-out forwards'
			} else {
				titleH2.style.animation =
					'fadein 0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards'
				titleH2.style.animationDelay = `${counter}s`
				counter += 0.1
			}

			elementContainers.forEach((element, i) => {
				element.style.animation =
					'fadein 0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards'

				element.style.animationDelay = `${counter}s`
				counter += 0.1
			})
		}

		// buttonGridContainer.style.animation = 'show 0.5s ease-out forwards'
		// buttonGridContainer.style.animationDelay = `${counter}s`
		backButtonContainer.style.animation = 'show 0.5s ease-out forwards'
		filler.style.animation = 'show 0.5s ease-out forwards'
		// filler.style.animationDelay = `${counter}s`
		// backButtonContainer.style.animationDelay = `${counter}s`
	}
	backButtonContainer.style.animation = 'show 0.5s ease-out forwards'
	filler.style.animation = 'show 0.5s ease-out forwards'
	if (boxVideo) {
		boxVideo.forEach((e, i) => {
			boxVideo[i].style.animation =
				'growVideo 0.5s cubic-bezier(0.86, 0.01, 0.77, 0.18) forwards '
			boxVideo[i].style.animationDelay = '1.8s'
		})
	}
}

// Create the video tags storaged in videoContainer div
function createVideos(source1, source2, source3) {
	if (source1) {
		video1 = document.createElement('video')
		video1.src = source1
		video1.muted = true
		video1.setAttribute('playsinline', 'playsinline')
		video1.controls = false
		video1.autoplay = true
		video1.classList.add('video')
		video1.style.opacity = 0
		video1.pause()

		video1Container.appendChild(video1)
	}

	if (source2) {
		video2 = document.createElement('video')
		video2.src = source2
		video2.loop = true
		video2.muted = true
		video2.setAttribute('playsinline', 'playsinline')

		video2.controls = false
		video2.autoplay = true
		video2.classList.add('video')
		video2.style.opacity = 0
		video2.pause()

		video2Container.appendChild(video2)
	}
	if (source3) {
		video3 = document.createElement('video')
		video3.src = source3
		video3.muted = true
		video3.autoplay = true
		video3.setAttribute('playsinline', 'playsinline')
		video3.controls = false
		video3.classList.add('video')
		video3.style.opacity = 0
		video3.pause()

		video3Container.appendChild(video3)
	}
}

function createSubVideos(source1, source2, source3) {
	if (source1) {
		subVideo1 = document.createElement('video')
		subVideo1.src = source1
		subVideo1.muted = true
		subVideo1.setAttribute('playsinline', 'playsinline')
		subVideo1.controls = false
		subVideo1.autoplay = true
		subVideo1.classList.add('video')
		subVideo1.style.opacity = 0
		subVideo1.pause()

		subVideo1Container.appendChild(subVideo1)
	}

	if (source2) {
		subVideo2 = document.createElement('video')
		subVideo2.src = source2
		// if (
		// 	currentButton === 'turnlock10' ||
		// 	currentButton === 'turnlock15' ||
		// 	currentButton === 'tourlock18' ||
		// 	currentButton === 'tourlock182' ||
		// 	currentButton === 'circlelockSo' ||
		// 	currentButton === 'circlelockSo2' ||
		// 	currentButton === 'lifelineSw' ||
		// 	currentButton === 'trilock60'
		// ) {
		// 	if (pageIndex === 'protraceG') {
		// 		subVideo2.loop = true
		// 	}
		// }
		if (
			pageIndex === 'protraceG' ||
			pageIndex === 'hideoutT' ||
			pageIndex === 'snaparoundC'
		) {
			subVideo2.loop = true
		}
		subVideo2.loop = true
		subVideo2.muted = true
		subVideo2.setAttribute('playsinline', 'playsinline')
		subVideo2.controls = false
		subVideo2.autoplay = true
		subVideo2.classList.add('subVideo')
		subVideo2.style.opacity = 0
		subVideo2.pause()
		// loopContainer.appendChild(subVideo2)
		subVideo2Container.appendChild(subVideo2)
	}
	if (source3) {
		subVideo3 = document.createElement('video')
		subVideo3.src = source3
		subVideo3.muted = true
		subVideo3.autoplay = true
		subVideo3.setAttribute('playsinline', 'playsinline')
		subVideo3.controls = false
		subVideo3.classList.add('subVideo')
		subVideo3.style.opacity = 0
		subVideo3.pause()
		// loopContainer.appendChild(subVideo3)
		subVideo3Container.appendChild(subVideo3)
	}
}
let idleTime = 0
const idleThreshold = 120000
let checkBack = false
function resetIdleTime() {
	idleTime = 0
}

function handleIdle2() {
	// Your function to be called when the mouse is idle

	backButtonFunction()
	resetIdleTime()
	document.removeEventListener('mousemove', checkIdle)
	document.removeEventListener('mousemove', resetIdleTime)
	intervalId && clearInterval(intervalId)
}
function handleIdle6() {
	// Your function to be called when the mouse is idle
	checkBack = true
	backButtonFunctionFront()
	resetIdleTime()
	document.removeEventListener('mousemove', checkIdle)
	document.removeEventListener('mousemove', resetIdleTime)
	intervalId && clearInterval(intervalId)
}
// function handleIdle2() {
// 	// Your function to be called when the mouse is idle
// 	backButtonFunction()
// 	resetIdleTime()
// }

function checkIdle() {
	idleTime += 100
	// console.log(idleTime)
	if (idleTime >= idleThreshold) {
		if (pageIndex === 'mainMenuFront') {
			handleIdle2()
		} else {
			handleIdle6()
		}

		console.log(globalParent)
		console.log(pageIndex)
	}
}

// Create the content storaged in showCont div / Left and Top position of the container div, label title and content of the paragraph
function createContent(obj, parent) {
	console.trace()
	delay = ''

	labelTitle = obj.title
	pContent = obj.content
	pContent2 = obj.content2
	subTitle = obj.subTitle
	inputButtonGrid = obj.inputButtonGrid
	globalParent = parent
	delayInput = obj.delay
	console.log(globalParent)

	const centerContainerMade = document.createElement('div')
	centerContainerMade.classList.add('centerContainer')
	centerContainerMade.setAttribute('id', 'centerContainer_text')
	const textContainerMade = document.createElement('div')
	textContainerMade.classList.add('textContainer')
	textContainerMade.style.width = containVideoWidth + 'px'
	textContainerMade.style.height = containVideoHeight + 'px'

	firstPage = document.createElement('div')
	firstPage.classList.add('firstPage')

	console.log(pageIndex)

	buttonGridContainer = document.createElement('div')
	buttonGridContainer.classList.add('buttonGridContainer')

	showCont.appendChild(buttonGridContainer)
	showCont.appendChild(centerContainerMade)

	centerContainerMade.appendChild(textContainerMade)
	textContainerMade.appendChild(firstPage)

	groupButton = document.createElement('button')
	individualButton = document.createElement('button')
	subMiniVideo = document.createElement('video')
	function setButton(e) {
		groupButton.classList.remove('subMiniButtonAct')
		individualButton.classList.remove('subMiniButtonAct')

		e.target.classList.add('subMiniButtonAct')
		const subMiniVideoWidth = subMiniVideo.offsetWidth

		subMiniVideo.style.width = subMiniVideoWidth + 'px'

		if (e.target === groupButton) {
			subMiniVideo.src = 'assets/vbs/4kU/4kUSub1.mp4'
		} else if (e.target === individualButton) {
			subMiniVideo.src = 'assets/vbs/4kU/4kUSub2.mp4'
		}
		console.log(e)
	}
	if (pageIndex === '4kU' && parent === 'vbs') {
		console.log(parent)
		const subContainer = document.createElement('div')
		const subHolder = document.createElement('div')
		const subButtonContainer = document.createElement('div')
		subButtonContainer.classList.add('subButtonContainer')
		subContainer.classList.add('subContainer')
		subHolder.classList.add('subHolder')

		groupButton.textContent = 'GROUP MODE'
		individualButton.textContent = 'INDIVIDUAL MODE'
		groupButton.classList.add('subMiniButton')
		groupButton.classList.add('subMiniButtonAct')
		groupButton.style.fontSize = bigButtonFontvar
		individualButton.style.fontSize = bigButtonFontvar
		groupButton.addEventListener('click', setButton)
		individualButton.addEventListener('click', setButton)

		individualButton.classList.add('subMiniButton')

		subMiniVideo.muted = true
		subMiniVideo.setAttribute('playsinline', 'playsinline')
		subMiniVideo.controls = false
		subMiniVideo.loop = true
		subMiniVideo.preload = 'auto' // Set preload to 'auto'
		subMiniVideo.autoplay = true
		subMiniVideo.src = 'assets/vbs/4kU/4kUSub1.mp4'
		subMiniVideo.classList.add('subMiniVideo')

		firstPage.appendChild(subContainer)
		subContainer.appendChild(subHolder)

		subButtonContainer.appendChild(groupButton)
		subButtonContainer.appendChild(individualButton)
		subHolder.appendChild(subButtonContainer)
		subHolder.appendChild(subMiniVideo)
	}

	createBackButton()
	if (pageIndex === 'mainMenuFront') {
		// createBackButton()
	}

	if (inputButtonGrid) {
		const centerContainer = document.createElement('div')
		const buttonContainer = document.createElement('div')
		const sixButtonContainer = document.createElement('div')
		console.log(parent)
		if (parent === 'vb1') {
			buttonContainer.style.marginTop = '0%'
		}
		if (parent === 'vbs') {
			buttonContainer.style.marginTop = '0%'
		}
		centerContainer.classList.add('centerContainer')
		buttonContainer.classList.add('buttonContainer')
		sixButtonContainer.classList.add('sixButtonContainer')
		buttonGridContainer.appendChild(centerContainer)
		centerContainer.appendChild(buttonContainer)
		buttonContainer.appendChild(sixButtonContainer)

		machineButtonLayout[parent].forEach((e, i) => {
			createButtons(e, i, sixButtonContainer)
		})
	}

	const subButtons = document.querySelectorAll('.subButton')

	subButtons.forEach((element, i) => {
		element.addEventListener('click', function () {
			intervalId && clearInterval(intervalId)
			HideShowCont()

			setTimeout(() => {
				showCont.innerHTML = ''
			}, 500)

			buttonShort[i] = inputButtonGrid[i]
			pageIndex = buttonShort[i]
			// 	// Con esto veo que boton es /////////////////////////////////
			// console.log(buttonShort[i])
			createSubVideos(
				`assets/${parent}/${buttonShort[i]}/${buttonShort[i]}1.mp4`,
				`assets/${parent}/${buttonShort[i]}/${buttonShort[i]}2.mp4`,
				`assets/${parent}/${buttonShort[i]}/${buttonShort[i]}3.mp4`
			)
			check1()
			let videosCheck = false
			function check1() {
				clearcheck = setInterval(repeatcheck, 600)
				function repeatcheck() {
					if (
						subVideo1.readyState === 4 &&
						subVideo2.readyState === 4 &&
						subVideo3.readyState === 4
					) {
						videosCheck = true
					}
					setTimeout(() => {
						if (!videosCheck) {
							loader.style.zIndex = '200'
							loader.classList.add('show')
						}
					}, 3000)
					if (videosCheck) {
						loader.classList.remove('show')
						loader.classList.add('short-vanish')
						loader.style.zIndex = '-200'
						clearInterval(clearcheck)

						globalParent = parent

						createContent(buttonContent[parent].boxInfo[pageIndex], parent)

						video2.classList.add('short-vanish')
						video2.classList.remove('show')
						subVideo1.style.opacity = 1
						setTimeout(() => {
							setTimeout(() => {
								subVideo1.play()
							}, 500)

							subVideo1.addEventListener('ended', () => {
								animations()
								InterpolateVideo(subVideo1, subVideo1, subVideo2)

								// Adjust this value based on your requirements (in milliseconds)

								// Add event listeners

								document.addEventListener('mousemove', resetIdleTime)
								document.addEventListener('mousemove', checkIdle)

								// Initial setup
								intervalId = setInterval(checkIdle, 100) // Check every 100 milliseconds

								HideShowCont()
							})
						}, 0)
					}
				}
			}
		})
	})

	ArreglarLineas()
	const subButton = document.querySelectorAll('.subButton')
	switch (labelTitle) {
		case 'GAS / OIL':
			title1.style.padding = '0.25em 0.5em'
			title1.style.fontSize = globalMediumTitleFontvar
			title1.style.color = 'black'
			title1.style.backgroundColor = mainButtonsColor.gas
			textContent.style.alignItems = 'flex-start'
			subButton.forEach((element) => {
				element.style.backgroundColor = mainButtonsColor.gas
				element.style.color = subButtonsColor.gas
			})
			break
		case 'WATER':
			title1.style.padding = '0.25em 0.5em'
			title1.style.fontSize = globalMediumTitleFontvar
			title1.style.color = 'black'
			title1.style.backgroundColor = mainButtonsColor.water
			titleH2.style.alignItems = 'flex-end'
			textContent.style.alignItems = 'flex-start'
			textContent.style.justifyContent = 'flex-end'
			subButton.forEach((element) => {
				element.style.backgroundColor = mainButtonsColor.water
				element.style.color = subButtonsColor.water
			})

			// console.log("It's an apple.")
			break
		case 'TELECOM':
			title1.style.padding = '0.25em 0.5em'
			title1.style.fontSize = globalMediumTitleFontvar
			title1.style.color = 'black'
			title1.style.backgroundColor = mainButtonsColor.telecom
			titleH2.style.alignItems = 'flex-end'
			textContent.style.alignItems = 'flex-start'
			textContent.style.justifyContent = 'flex-end'
			subButton.forEach((element) => {
				element.style.backgroundColor = mainButtonsColor.telecom
				element.style.color = subButtonsColor.telecom
			})

			break
		case 'ELECTRIC':
			title1.style.padding = '0.25em 0.5em'
			title1.style.fontSize = globalMediumTitleFontvar
			title1.style.color = 'black'
			title1.style.backgroundColor = mainButtonsColor.electric
			titleH2.style.alignItems = 'flex-end'
			textContent.style.alignItems = 'flex-start'
			textContent.style.justifyContent = 'flex-end'
			subButton.forEach((element) => {
				element.style.backgroundColor = mainButtonsColor.electric
				element.style.color = subButtonsColor.electric
			})
			break
		default:
		// console.log("It's something else.")
	}
}

function setFontSizes() {
	console.log('setfontsizes')
	const button = document.querySelectorAll('.button')

	const mainButtons = document.querySelectorAll('.mainB')

	globalFontvar = `calc(5px + (15 - 5) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`
	bodyFontvar = `calc(5px + (20 - 5) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`
	globalTitleFontvar = `calc(8px + (22 - 8) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`
	globalMediumTitleFontvar = `calc(7px + (39 - 7) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`
	globalBigTitleFontvar = `calc(15px + (44 - 15) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`

	buttonFontvar = `calc(6px + (22 - 6) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`
	bigButtonFontvar = `calc(6px + (23 - 6) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`

	for (let i = 0; i < button.length; i++) {
		button[i].style.fontSize = buttonFontvar
	}

	for (let i = 0; i < mainButtons.length; i++) {
		mainButtons[i].style.fontSize = bigButtonFontvar
	}
}

function backButtonFunction() {
	resetIdleTime()
	document.removeEventListener('mousemove', checkIdle)
	document.removeEventListener('mousemove', resetIdleTime)
	intervalId && clearInterval(intervalId)

	console.log('backbuttonfunction')
	ArreglarLineas()

	buttonGridContainer.style.pointerEvents = 'none'
	backButton.style.pointerEvents = 'none'

	InterpolateVideo(video2, video2, video3)
	video2.classList.remove('show')
	HideShowCont()
	loop.style.zIndex = '-5'
	loop.currentTime = 0
	loop.pause()
	video3.addEventListener('ended', () => {
		loop.classList.remove('short-vanish')
		loop.classList.add('show')
		loop.play()
		setTimeout(() => {
			video1.remove()
			video2.remove()
			video3.remove()
			HideShowMainButtons()
		}, 500)

		loop.style.zIndex = '-1'
		if (subVideo1) {
			subVideo1.remove()
			subVideo2.remove()
			subVideo3.remove()
		}
		if (subVideoBackLoop) {
			subVideoBackLoop.remove()
			subVideoTurn.remove()
			subVideoBackLoop = ''
			subVideoTurn = ''
		}

		showCont.innerHTML = ''
	})
}

function backButtonFunctionFront() {
	console.log('backButtonFunctionFront()')
	intervalId && clearInterval(intervalId)

	ArreglarLineas()

	backButton.style.pointerEvents = 'none'

	InterpolateVideo(subVideo2, subVideo2, subVideo3)
	HideShowCont()
	subVideo3.addEventListener('ended', () => {
		intervalId = setInterval(checkIdle, 100)
		video2.classList.remove('short-vanish')
		video2.classList.add('show')
		video2.play()

		setTimeout(() => {
			subVideo3.classList.add('short-vanish')
			if (checkBack) {
				console.log('backer')
				backButtonFunction()
				checkBack = false
			}
		}, 500)

		showCont.innerHTML = ''

		video2.currentTime = 0
		pageIndex = 'mainMenuFront'
		// console.log(currentButton)
		if (!checkBack) {
			createContent(buttonContent[currentButton], currentButton)
		}

		animations()

		HideShowCont()

		setTimeout(() => {
			subVideo1.remove()
			subVideo2.remove()
			subVideo3.remove()
		}, 500)
	})
}

function createBackButton(param) {
	// console.log(pageIndex)
	if (param === 'rotationPage') {
		const centerContainerMade = document.createElement('div')
		centerContainerMade.classList.add('centerContainer')

		centerContainerMade.setAttribute('id', 'centerContainer_text')
		const textContainerMade = document.createElement('div')
		textContainerMade.classList.add('textContainer')
		textContainerMade.style.width = containVideoWidth + 'px'
		textContainerMade.style.height = containVideoHeight + 'px'
		rotationPage = document.createElement('div')
		rotationPage.classList.add('rotationPage')

		backButtonRotation = document.createElement('button')
		backButtonRotation.classList.add('backButton')
		backButtonRotation.style.fontSize = buttonFontvar
		backButtonRotation.style.width = `calc(47px + (147 - 47) * ((${
			containVideoWidth + 'px'
		} - 320px) / (1440 - 320)))`

		backButtonRotation.classList.add('button')
		backButtonRotation.addEventListener('click', exitRotation)
		// console.log(backButtonRotation)
		backButtonRotation.textContent = 'BACK'
		backButtonRotation.style.pointerEvents = 'all'
		backButtonContainer = document.createElement('div')
		filler = document.createElement('div')
		filler.classList.add('filler')

		backButtonContainer.classList.add('viewRContainer')

		rotation.appendChild(centerContainerMade)
		centerContainerMade.appendChild(textContainerMade)

		textContainerMade.appendChild(rotationPage)
		rotationPage.appendChild(backButtonContainer)
		backButtonContainer.appendChild(backButtonRotation)
		backButtonContainer.appendChild(filler)
		centerContainerMade.setAttribute('id', 'rotation_backButton')
	} else {
		backButton = document.createElement('button')
		backButton.classList.add('backButton')
		backButton.style.fontSize = buttonFontvar

		backButton.textContent = 'BACK'
		backButtonContainer = document.createElement('div')
		filler = document.createElement('div')
		filler.classList.add('filler')
		backButtonContainer.classList.add('backButtonContainer')

		firstPage.appendChild(backButtonContainer)

		backButtonContainer.appendChild(filler)
		backButtonContainer.appendChild(backButton)
		console.log(pageIndex)
		if (pageIndex !== 'mainMenuFront') {
			backButton.addEventListener('click', backButtonFunctionFront)
		} else if (pageIndex === 'mainMenuFront') {
			backButton.addEventListener('click', backButtonFunction)
		}
	}
}

function ArreglarLineas() {
	const buttonContainer = document.querySelectorAll('.buttonContainer')

	for (let i = 0; i < buttonContainer.length; i++) {
		buttonContainer[i].style.width = containVideoWidth + 'px'
		buttonContainer[i].style.height = containVideoHeight + 'px'
	}

	// if (!mainButtons.classList.contains('disabled')) {
	// 	mainButtons.classList.add('show')
	// }
}

function getRenderedSize(contains, cWidth, cHeight, width, height, pos) {
	var oRatio = width / height,
		cRatio = cWidth / cHeight
	return function () {
		if (contains ? oRatio > cRatio : oRatio < cRatio) {
			this.width = cWidth
			this.height = cWidth / oRatio
		} else {
			this.width = cHeight * oRatio
			this.height = cHeight
		}
		this.left = (cWidth - this.width) * (pos / 100)
		this.right = this.width + this.left
		return this
	}.call({})
}

function getImgSizeInfo(img) {
	var pos = window
		.getComputedStyle(img)
		.getPropertyValue('object-position')
		.split(' ')
	return getRenderedSize(
		true,
		img.offsetWidth,
		img.offsetHeight,
		img.videoWidth,
		img.videoHeight,
		parseInt(pos[0])
	)
}

loop.addEventListener('loadedmetadata', function (e) {
	containVideoWidth = getImgSizeInfo(loop).width
	containVideoHeight = getImgSizeInfo(loop).height
	setFontSizes()
	ArreglarLineas()

	initial.classList.add('short-vanish')
	setTimeout(() => {
		initial.style.zIndex = '-200'
	}, 0)
})

if (loop.readyState >= 1) {
	setFontSizes()
	containVideoWidth = getImgSizeInfo(loop).width
	containVideoHeight = getImgSizeInfo(loop).height
	ArreglarLineas()

	initial.classList.add('short-vanish')
	setTimeout(() => {
		initial.style.zIndex = '-200'
	}, 0)
}

window.addEventListener('DOMContentLoaded', function () {
	setFontSizes()
	if (window.matchMedia('(max-width: 520px)').matches) {
		if (window.matchMedia('(orientation: portrait)').matches) {
			warningText.innerHTML =
				' Use the device in landscape mode in order to properly use this website'
			warning.style.opacity = '1'
			warning.style.zIndex = '300'
		}
	}
})

window.addEventListener('resize', function () {
	var documentWidth = document.documentElement.clientWidth
	var documentHeight = document.documentElement.clientHeight
	if (loop.readyState >= 1) {
		containVideoWidth = getImgSizeInfo(loop).width
		containVideoHeight = getImgSizeInfo(loop).height

		setFontSizes()

		if (!mainButtons.classList.contains('disabled')) {
			ArreglarLineas()
		}
	}
	if (Math.abs(documentWidth - documentHeight) > 400) {
		if (window.matchMedia('(orientation: portrait)').matches) {
			warningText.innerHTML =
				' Use the device in landscape mode in order to properly use this website'
			warning.style.opacity = '1'
			warning.style.zIndex = '300'
		}
	} else {
		if (window.matchMedia('(orientation: landscape)').matches) {
			warning.style.opacity = '0'
			warning.style.zIndex = '-100'
			window.scrollTo(0, document.body.scrollHeight)
		}
	}
})

////////// Event Listeners for the main buttons //////////

// Event listener for fullscreen button click
// fullscreen_button.addEventListener('click', function (e) {
// 	if (!document.fullscreenElement && !document.webkitFullscreenElement) {
// 		// Enter fullscreen mode
// 		if (mainContainer.requestFullscreen) {
// 			mainContainer.requestFullscreen()
// 		} else if (mainContainer.webkitRequestFullscreen) {
// 			mainContainer.webkitRequestFullscreen()
// 		}
// 	} else {
// 		// Exit fullscreen mode
// 		if (document.exitFullscreen) {
// 			document.exitFullscreen()
// 		} else if (document.webkitExitFullscreen) {
// 			document.webkitExitFullscreen()
// 		}
// 	}
// })

mainMenuB.forEach((e, i) => {
	dataId[i] = e.dataset.id

	console.log(mainButtonsColor)

	dataVariant[i] = e.dataset.variant

	e.addEventListener('click', function (e) {
		console.log('clicked')
		pageIndex = 'mainMenuFront'
		currentButton = dataId[i]
		// console.log(dataId[i])
		// console.log(dataVariant[i])
		HideShowMainButtons()
		if (dataVariant[i]) {
			createVideos(
				`assets/${dataId[i]}${dataVariant[i]}/${dataId[i]}1.mp4`,
				`assets/${dataId[i]}${dataVariant[i]}/${dataId[i]}2.mp4`,
				`assets/${dataId[i]}${dataVariant[i]}/${dataId[i]}3.mp4`
			)
		} else {
			createVideos(
				`assets/${dataId[i]}/${dataId[i]}1.mp4`,
				`assets/${dataId[i]}/${dataId[i]}2.mp4`,
				`assets/${dataId[i]}/${dataId[i]}3.mp4`
			)
		}

		if (showCont.innerHTML !== '') {
			setTimeout(() => {
				showCont.innerHTML = ''
			}, 0)
		}

		createContent(buttonContent[dataId[i]], dataId[i])
		// console.log(dataId[i])
		window.addEventListener('resize', function (e) {
			if (showCont.hasChildNodes()) {
				const textContainer = document.querySelector('#centerContainer_text')

				const backButtonContainer = document.querySelector(
					'#centerContainer_backButton'
				)
				textContainer.remove()
				showCont.innerHTML = ''

				// console.log(pageIndex)
				if (pageIndex === 'mainMenuFront') {
					// console.log(globalParent)
					// console.log(buttonContent[globalParent])
					createContent(buttonContent[dataId[i]], dataId[i])
				} else {
					createContent(
						buttonContent[globalParent].boxInfo[pageIndex],
						dataId[i]
					)
				}

				animations()
				if (subVideo2) {
					subVideo2.currentTime = 0
					subVideo2.play()
				}
			}
		})
		check1()
		let videoscheck = false
		function check1() {
			clearcheck = setInterval(repeatcheck, 600)
			function repeatcheck() {
				if (video1.readyState === 4) {
					videoscheck = true
				}

				setTimeout(() => {
					if (!videoscheck) {
						loader.style.zIndex = '200'
						loader.classList.add('show')
					}
				}, 3000)

				if (videoscheck) {
					loader.classList.remove('show')
					loader.classList.add('short-vanish')
					loader.style.zIndex = '-200'

					clearInterval(clearcheck)

					loop.classList.add('short-vanish')
					loop.classList.remove('show')
					video1.style.opacity = 1

					setTimeout(() => {
						setTimeout(() => {
							video1.play()
						}, 500)

						video1.addEventListener('ended', () => {
							animations()

							InterpolateVideo(loop, video1, video2)
							setTimeout(() => {
								document.addEventListener('mousemove', resetIdleTime)
								document.addEventListener('mousemove', checkIdle)
							}, 500)

							// Initial setup
							intervalId = setInterval(checkIdle, 100)
							HideShowCont()
						})
					}, 0)
				}
			}
		}
	})
})
// Event listener for fullscreen change
// document.addEventListener('fullscreenchange', function () {
// 	if (!document.fullscreenElement && !document.webkitFullscreenElement) {
// 		// The document is not in fullscreen mode
// 		expand.classList.remove('disabledb')
// 		contract.classList.add('disabledb')

// 		// Perform actions when exiting fullscreen mode
// 	} else {
// 		// The document is in fullscreen mode
// 		expand.classList.add('disabledb')
// 		contract.classList.remove('disabledb')

// 		// Perform actions when entering fullscreen mode
// 	}
// })

// Check when the spinner is fully loaded
var SirvOptions = {
	spin: {
		onready: function () {
			initial.classList.remove('show')
			initial.classList.add('short-vanish')
			loader.style.zIndex = '-100'

			setTimeout(() => {
				initial.style.zIndex = '-200'
			}, 400)
		},
	},
}

close.addEventListener('click', function (e) {
	modalalert.style.pointerEvents = 'none'
	modalalert.style.transform = 'scale(0)'
	alertdiv.style.opacity = 0
	alertdiv.style.pointerEvents = 'none'
})
