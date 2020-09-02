const MbtiModule = (function() {
	let types = {
		NL: {title: "자연문과", description: "자연에서 향유하며, 자연을 좋아하는 문과생"},
		NM: {title: "자연이과", description: "자연에서 관찰하며, 자연을 좋아하는 이과생"},
		CL: {title: "도시문과", description: "도시의 문제들 해결하고, 도시를 좋아하는 문과생 "},
		CM: {title: "도시이과", description: "기계공학적 사고를 가지며, 도시를 좋아하는 이과생"}
				};
		let l, n, m, c;
		let type;
		
	
	function resetScores() {
		l = m = c = n = 0;
		type = "";
	}
	
	function getScores() {
		const inputs = document.getElementsByTagName("input");
		Array.prototype.forEach.call(inputs, function(input) {
			if (input.checked) {
				switch(input.value) {
					case 'l': l++; break;
					case 'm': m++; break;
					case 'c': c++; break;
					case 'n': n++; break;
				}
			}
		});
	}
	
	function calculatePercentages() {
		l = Math.floor(l / 20 * 100);
		m = Math.floor(m / 20 * 100);
		c = Math.floor(c / 20 * 100);
		n = Math.floor(n / 20 * 100);
	}
	
	function createCharts() {
		document.querySelector("#lScore").innerHTML = l;
		document.querySelector("#mScore").innerHTML = m;
		document.querySelector("#cScore").innerHTML = c;
		document.querySelector("#nScore").innerHTML = n;
		
		document.querySelector("#lmChart").style.marginLeft = l / 2 + "%";
		document.querySelector("#cnChart").style.marginLeft = c / 2 + "%";
	}
	
	function showResults() {
		type += (l >= m) ? "l" : "m";
		type += (c >= n) ? "c" : "n";
		document.querySelector("#type").innerHTML = type;
		document.querySelector("#type-title").innerHTML = types[type].title;
		document.querySelector("#type-description").innerHTML = types[type].description;
		
	}
	
	return {
		processForm: function() {
			resetScores();
			getScores();
			calculatePercentages();
			createCharts();
			showResults();
		}
	};
})();

document.querySelector("#submit").addEventListener("click", function() { MbtiModule.processForm(); });