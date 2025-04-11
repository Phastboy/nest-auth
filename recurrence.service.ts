import { log } from 'console'
import pkg from 'rrule'

const { datetime, RRule, RRuleSet, Weekday, rrulestr } = pkg

const rule=new RRule({
})
log({rule})