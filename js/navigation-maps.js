const navigationMaps = {
  'r057-2022': {
    docUrl: '/regulations/r057-2022/source.pdf',
    sections: {
      'normative': { page: 2,  section: '1' },
      'general': { page: 2,  section: '2' },
      'info-activities': { page: 4,  section: '3' },
      'parallel-connection': { page: 5,  section: '4.3' },
      'no-contract-consumption': { page: 6,  section: '4.4' },
      'restriction-control': { page: 7,  section: '4.5' },
      'planning-detection': { page: 8,  section: '4.6' },
      'consumption-analysis': { page: 8,  section: '4.7' },
      'check-preparation': { page: 18, section: '4.8' },
      'conducting-checks': { page: 20, section: '4.9' },
      'calculation-unaccounted': { page: 20, section: '4.10' },
      'calculation-unaccounted-phys': { page: 24, section: '4.11' },
      'contractless-calculation': { page: 26, section: '4.12' },
      'meter-malfunction': { page: 40, section: '4.13' },
      'commission-review': { page: 45, section: '4.14' },
      'damage-compensation': { page: 50, section: '4.15' },
      'cost-recovery': { page: 55, section: '4.16' },
      // при необходимости: поправь нумерацию ниже, если в PDF нет «дыры»
      'law-enforcement': { page: 60, section: '4.17' },   // было 4.18
      'operational-control': { page: 65, section: '4.18' },// было 4.19

      // новые разделы — их нет в исходном PDF, поэтому page=null
      'acts-lifecycle': { page: null, section: '—' },
      'acts-flow': { page: null, section: '—' },
      'common-schemes': { page: null, section: '—' },
    }
  }
};
