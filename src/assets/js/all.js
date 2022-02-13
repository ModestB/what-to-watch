export function searchSuggestionSelectHandler() {
  const input = document.getElementById("searchNameInput");
  const suggestionsContainer = document.getElementById("suggestionsContainer");
  let suggestions = null;
  let readySuggestion = null;

  if (!suggestionsContainer) {
    return;
  }
  // On Suggestion Container Remove ready class from suggestions
  suggestionsContainer.addEventListener("mouseover", () => {
    readySuggestion = document.querySelector(
      ".suggestions-container .suggestion.ready"
    );
    if (readySuggestion) {
      readySuggestion.classList.remove("ready");
    }
  });

  input.addEventListener("keydown", (e) => {
    suggestions = Array.from(
      document.querySelectorAll(".suggestions-container .suggestion")
    );
    readySuggestion = document.querySelector(
      ".suggestions-container .suggestion.ready"
    );
    // Arrow Down Press
    if (e.keyCode === 40 && suggestions.length > 0) {
      if (readySuggestion) {
        moveSuggestionHandler(
          readySuggestion,
          suggestionsContainer,
          suggestions,
          true
        );
      } else {
        suggestions[0].classList.add("ready");
        updateSuggestionInput(suggestions[0]);
        suggestionsContainer.scrollTop = 0;
      }
      // Arrow Up Press
    } else if (e.keyCode === 38 && suggestions.length > 0) {
      if (readySuggestion) {
        moveSuggestionHandler(
          readySuggestion,
          suggestionsContainer,
          suggestions,
          false
        );
      } else {
        return false;
      }
    }
  });
}

// moveDown determines in witch direction to move scroll
// moveDown = true moves scroller down
function moveSuggestionHandler(
  readySuggestion,
  suggestionsContainer,
  suggestions,
  moveDown
) {
  let scrollTopPossition = suggestionsContainer.scrollTop;
  let prevEleIndex = suggestions.findIndex((e) => {
    return e === readySuggestion;
  });
  let nextEle = null;
  let nextEleHeight = null;

  // Scroll move up
  if (!moveDown) {
    // Prevent scroll movement above first elements
    if (prevEleIndex === 0) {
      return false;
    }
    nextEle = --prevEleIndex;

    if (nextEle === 0) {
      scrollTopPossition = 0;
    }
    // Scroll move down
  } else {
    nextEle = ++prevEleIndex;
    // If end has been reached
    if (nextEle >= suggestions.length) {
      nextEle = 0;
      scrollTopPossition = 0;
    }
  }

  nextEleHeight = suggestions[nextEle].scrollHeight;
  if (nextEle === 0) {
    nextEleHeight = 0;
  }
  // Update classes
  readySuggestion.classList.remove("ready");
  suggestions[nextEle].classList.add("ready");
  updateSuggestionInput(suggestions[nextEle]);

  // Update scroll position
  suggestionsContainer.scrollTop = moveDown
    ? scrollTopPossition + nextEleHeight
    : scrollTopPossition - nextEleHeight;
}

function updateSuggestionInput(element) {
  let suggestionName = element.getAttribute("data-text");
  document.getElementById("searchNameInput").value = suggestionName;
}
