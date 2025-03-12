const advices = [
  {
    id: 80,
    name: 'optionsBuild',
    description: 'The dependency version number is not configured',
    solution: 'Please see https://github.com/michaeljohnn',
    type: 'user',
    errTypeI18n: 'dependency.version.is.missing',
    startRegex:
      "'dependencies.dependency.version' for .*:jar is missing..*/pom.xml, line .*, column .*|.*dependencies.dependency.version.* for .*:jar is missing..* line .*, column .*|Failed to execute goal on project .* Could not resolve dependencies for project|Malformed POM .*pom.xml: expected|Non-parseable POM .*Unrecognised tag|'dependencies.dependency.version' for .*:jar must be a valid version|.*ERROR.* The project .*pom.xml\\) has 1 error|.*FATAL.* Non-parseable POM .*pom.xml: Duplicated tag",
    endRegex: null,
    rangeMatch: false,
    startLineNum: 1,
    endLineNum: 2,
    enableRag: false,
  },
  {
    id: 165,
    name: 'optionsBuild',
    description: 'Invalid pom',
    solution: 'Please see https://github.com/michaeljohnn',
    type: 'user',
    errTypeI18n: 'maven.pom.invalid',
    startRegex:
      'ERROR.* Some problems were encountered while processing the POMs',
    endRegex: null,
    rangeMatch: false,
    startLineNum: 7,
    endLineNum: -1,
    enableRag: false,
  },
];

export default advices;
