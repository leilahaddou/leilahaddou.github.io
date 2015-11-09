var annotationList = [
	{
		well: '#well1',
		annotations: [ '#well1label1', '#well1label2', '#well1label3', '#well1label4' ]
	},
	{
		well: '#well2',
		annotations: [ '#well2label1', '#well2label2', '#well2label3', '#well2label4' ]
	},
	
	{
		well: '#well3',
		annotations: [ '#well3label1', '#well3label2', '#well3label3', '#well3label4' ]
	},
	
	{
		well: '#well4',
		annotations: [ '#well4label1', '#well4label2', '#well4label3', '#well4label4' ]
	},
	
	{
		well: '#well5',
		annotations: [ '#well5label1', '#well5label2', '#well5label3', '#well5label4' ]
	},
	
	{
		well: '#well6',
		annotations: [ '#well6label1', '#well6label2', '#well6label3', '#well6label4' ]
	}
]

annotationList.forEach(function (a) {
	a.annotations.forEach(function (annotation) {
		document.querySelector(annotation).style.display = 'none'
	})
	document.querySelector(a.well).addEventListener('click', function () {
		a.annotations.forEach(function (annotation) {
			document.querySelector(annotation).style.display = document.querySelector(annotation).style.display === '' ? 'none' : ''
		})
	})
})
