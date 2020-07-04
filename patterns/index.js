// Pattern Dictionary

const patternDict = [{
    pattern: '\\b(?<greeting>Hi|Hello|Hey|Yo)\\b',
    intent: 'Hello'
}, {
    pattern: '\\b(bye|exit)\\b',
    intent: 'Exit'
}, {
    pattern: '\\b(like\\sin\\s\\b(?<city>.+))\\b',
    intent: 'CurrentWeather'
}];

module.exports = patternDict;

// named capture group

//