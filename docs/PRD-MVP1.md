# EcoReward Product Requirements Document

## Metadata

- **Product name:** EcoReward
- **Version:** MVP-1
- **Date:** 2026-03-18
- **Team / owners:**
  1. Founder / Product Manager
  2. Design owner
  3. Growth / Acquisition owner
  4. Manual Operations lead
- **Target wedge ICP:** A value-seeking millennial D2C shopper in Tier-1 urban India who wants to behave sustainably without paying a green premium, and who will only engage if logging is near-instant.
- **MVP type:** Clickable prototype

## Wedge ICP and Top 3 Risks

### Wedge ICP

The best initial wedge for EcoReward is the value-seeking millennial D2C shopper living in a Tier-1 Indian city. This user already buys beauty, wellness, and lifestyle products online, wants to behave more sustainably, but will churn very quickly if the experience feels slow, intrusive, or mentally heavy. This wedge is stronger than a broad “all eco-conscious users” target because it is both revenue-adjacent and friction-sensitive. That makes it the best early segment to test whether EcoReward can actually drive affiliate-like behavior, rather than superficial engagement or passive intent.

The clearest reference user for MVP-1 is Aarav, the Bengaluru software engineer persona.

### Top 3 risks to reduce first

1. **User friction versus reward value:** The biggest question is whether users will actually complete even a small eco-action logging step if the reward feels worth it. This is the most important risk because if the answer is no, the core loop breaks.
2. **Brand-side willingness to pay:** The second question is whether sustainable D2C brands will offer commissions, codes, or some other reward support without viewing EcoReward as just another discounting engine that damages margins or brand perception.
3. **Low-cost verification plus privacy feasibility:** The third question is whether EcoReward can validate eco-habit claims cheaply enough, while still keeping consent requests and data collection light enough to avoid activation drop-off. This must hold under the privacy constraints identified in the research, including the DPDP / DPDPA considerations referenced in the PRD source.

## One-paragraph Product Summary

EcoReward is designed to close the sustainability intent-action gap for urban Indian consumers by turning simple eco-habits into redeemable value at partner D2C brands. For MVP-1, the product is deliberately not being built as a full native app. It is also not attempting deterministic AI verification, enterprise ESG dashboards, or education-heavy engagement modules. Instead, MVP-1 is a mobile-first clickable prototype that simulates the core loop: the user discovers an offer, logs one eco-action, sees instant points, and requests a reward. The purpose of the next 2 to 4 weeks is to learn whether the wedge ICP will tolerate light habit-logging friction for real perceived value, whether brands will support the reward side, and whether a low-data, low-cost validation model is credible enough to continue.

## Objectives and Non-objectives

### Objectives

1. Validate that users will complete a lightweight eco-action logging flow when it is paired with a stronger reward proposition.
2. Validate that at least some sustainable D2C brands are willing to support the model using commission economics or exclusive discount codes.
3. Validate that repeat participation is possible through manual or Wizard-of-Oz style operations before any real software is built.
4. Validate that onboarding and proof collection can be designed with minimal data collection and acceptable consent friction.
5. Produce a build / no-build / pivot decision for the software MVP based on real observed behavior, not intent-only survey responses.

### Non-objectives / out of scope

1. A full iOS or Android app
2. An enterprise or corporate ESG dashboard
3. Deterministic AI image verification
4. Deep affiliate network integration unless confirmed later
5. Continuous GPS tracking
6. Classroom or minors use cases
7. Rich social community features beyond simple pilot follow-up
8. Sustainability education modules as the main engagement mechanic

## Risks This MVP Is Designed to Reduce

| Risk | Type | Why this matters | How MVP tests it | Pass criterion | Time window |
| --- | --- | --- | --- | --- | --- |
| Users will tolerate habit-logging friction because the reward feels valuable | Product / Market | If this assumption is false, the entire core loop fails. | Painted-door offer test plus a clickable prototype flow. | Upload / proof-step drop-off is less than 60 percent. | 5 days |
| Sustainable D2C brands will support EcoReward as a performance channel | Business model | Without partner economics, rewards are not real. | Manual outreach to 30 brands. | At least 3 LOIs or verbal agreements for 10 percent or higher commission, or equivalent exclusive beta codes. | 10 days |
| Probabilistic or lightweight validation is enough for early trust | Product / Business model | If strict proof is required, unit economics collapse. | Self-attestation, optional proof simulation, and manual review. | Users complete the flow and brands accept a closed-beta model. | 2 to 3 weeks |
| Consent and privacy friction can be kept low enough to avoid heavy onboarding drop-off | Product | If consent requests feel too intrusive, activation dies. | Prototype consent flow placed before optional proof request. | Onboarding completion remains materially healthy. | 1 to 2 weeks |
| Users will come back, not just redeem once | Product / Market | One-time novelty is not enough to support the model. | WhatsApp Wizard-of-Oz retention loop. | 40 percent of pilot users log activity on 4 of 7 days without explicit personalized daily prodding. | 14 days |

**Open threshold:** The exact threshold for “materially healthy” onboarding completion still needs to be finalized.

## User and Buyer Definitions

### Primary user persona

- **Role:** Urban millennial D2C shopper
- **Context:** Shops digitally, understands cashback and coupon logic, wants to make sustainable choices, but is still price-sensitive.
- **Trigger:** Feels guilt after wasteful consumption or frustration with “green premium” pricing.
- **Constraints:** Will churn if logging takes too long, if there is too much reading, or if privacy requests feel invasive.
- **Success criteria:** Gets visible and immediate value for one simple action, sees desirable partner brands, and believes the effort is worth the reward.

### Buyer / payer persona

- **Role:** Affiliate manager, growth lead, or CMO at a sustainable D2C brand
- **Context:** Facing rising CAC on Meta and Google and looking for performance-based channels.
- **Trigger:** Needs lower-risk acquisition from eco-intent customers.
- **Constraints:** Cares about margin protection, brand safety, and fraud prevention.
- **Success criteria:** Wants to pay only for real conversions or for closed-beta demand generation, without damaging brand equity.

### Negative persona

The following audiences are out of scope for MVP-1:

1. Users outside the top urban digital hubs
2. Users who need sustainability education before they care
3. Users unwilling to share even light proof or self-attestation
4. Minors or classroom users
5. Corporate buyers in MVP-1
6. Activist or volunteer-heavy users seeking certification rather than retail value

## Core User Journey for MVP-1

1. User sees an ad or invite promising a reward tied to one eco-action.
2. User lands on the prototype and sees the value proposition.
3. User enters minimal details to begin.
4. User sees a simple consent step before any proof collection.
5. User chooses one eco-habit challenge.
6. User logs the action using self-attestation or optional light proof.
7. User instantly sees Impact Points and a reward preview.
8. User requests a reward or joins the follow-up pilot for repeat logging.

**Core action:** Complete one eco-habit log that leads to visible reward progress.

## MVP Scope

### Must-have capabilities

1. **Offer-to-log flow:** A mobile-first journey that moves the user from a reward promise to habit submission.
2. **Lightweight validation flow:** Self-attestation plus optional proof upload and manual review.
3. **Instant reward feedback:** Points screen and reward preview or claim request path immediately after submission.

### Should-have capabilities

1. Minimal consent capture screen
2. Manual follow-up hook through WhatsApp or contact capture
3. Basic leaderboard or streak simulation to support pilot retention

### Must-not-have capabilities

1. Full native app
2. Real-time GPS validation
3. AI image verification
4. Payment system
5. Deep catalog or marketplace build
6. Full loyalty ledger
7. Corporate admin panel
8. Education content as the main path
9. Complex social graph or team challenges

### Assumptions behind each capability

- **Offer-to-log flow:** Included to test whether the reward proposition drives user action rather than just clicks. Related assumption: users will accept friction if the value is high enough.
- **Lightweight validation flow:** Included to test whether proof can remain cheap and acceptable. Related assumption: probabilistic or manual validation is sufficient.
- **Instant reward feedback:** Included to test whether visible points and reward progress create motivation. Related assumption: the reward feels tangible enough to matter.
- **Consent capture:** Included to test privacy friction before any engineering investment. Related assumption: consent flow will not destroy activation.
- **Follow-up loop:** Included to test short-term repeat behavior. Related assumption: users will return beyond the first interaction.

## Requirements

### Functional requirements

1. **FR-1: Clear reward proposition on mobile-first entry screen**
   - MVP must present a clear reward proposition on the first mobile screen.
   - Acceptance criteria:
     - User understands the offer and can start from the first screen.
     - An A/B variant can be assignable and loggable.
   - Metric: Landing-to-start conversion rate by variant
   - Related risk: User friction versus reward value

2. **FR-2: Minimal user detail capture**
   - MVP must capture only the minimum user details needed for follow-up and experiment tracking.
   - Acceptance criteria:
     - User can proceed with minimal fields.
     - Prototype does not require full account creation beyond pilot needs.
     - Every drop-off point is logged.
   - Metric: Start-to-details completion rate
   - Related risk: Low-friction onboarding is necessary for activation

3. **FR-3: Explicit consent step before optional proof collection**
   - MVP must show an explicit consent step before proof collection begins.
   - Acceptance criteria:
     - User sees what data is being requested.
     - User can continue without continuous GPS or background tracking.
     - Consent decision is logged.
   - Metric: Consent-screen completion rate
   - Related risk: Consent and privacy friction feasibility

4. **FR-4: Small eco-action set and fast submission**
   - MVP must let users choose from a very small set of eco-actions and submit one action in no more than three steps after onboarding.
   - Acceptance criteria:
     - User can select an action and submit either by self-attestation or light proof.
     - Confirmation screen appears immediately.
   - Metrics:
     - Habit selection rate
     - Habit submission rate
   - Related risk: Users will tolerate limited friction for a reward

5. **FR-5: Immediate points feedback and reward preview**
   - MVP must display immediate points feedback and a clear reward preview after submission.
   - Acceptance criteria:
     - User sees earned points, reward progress, and the next step required to request or claim a reward.
   - Metrics:
     - Points-screen view rate
     - Reward preview click rate
   - Related risk: The reward is motivating enough to continue

6. **FR-6: Manual review and approval support**
   - MVP must support manual review and manual approval of submissions during the pilot.
   - Acceptance criteria:
     - Internal team can mark a submission as pending, approved, or rejected, and then trigger follow-up manually.
   - Metrics:
     - Review turnaround time
     - Approval rate
   - Related risk: Manual validation is enough for early-stage learning

7. **FR-7: Repeat-engagement follow-up mechanism**
   - MVP must support a repeat-engagement follow-up mechanism for the pilot cohort.
   - Acceptance criteria:
     - User can opt into follow-up.
     - Pilot team can send prompts and update points manually.
   - Metrics:
     - Day-2 return rate
     - 7-day repeat log frequency
   - Related risk: Repeat behavior is possible before automation

8. **FR-8: Event logs for all major user actions and experiment branches**
   - MVP must emit event logs for every major user action and every experiment branch.
   - Acceptance criteria:
     - Core events are captured with timestamp, variant, and user path.
     - Resulting dataset is enough for weekly reporting.
   - Metric: Event completeness rate
   - Related risk: Team can reach a clear decision from the pilot

### Non-functional requirements

- **Mobile-first:** Product must be easy to complete on a smartphone because the wedge ICP is smartphone-native.
- **Low-friction:** Core action must be reachable very quickly and avoid long reads or dense content.
- **Privacy-minimizing:** There must be no mandatory background tracking. Only data required for the experiment should be collected.
- **Auditability:** Manual review outcomes must be logged so reward decisions are traceable.
- **Prototype honesty:** Simulated elements must be clearly labeled internally. User-facing copy must not make false claims about live integrations.
- **Language:** English is the default working assumption, but the source artifacts do not confirm it.

## Data and Instrumentation

### Events to track

| Event | When it fires | Key properties |
| --- | --- | --- |
| landing_viewed | User opens the entry page | source, campaign, variant, device |
| cta_clicked | User starts the flow | variant, source |
| details_submitted | User submits minimal details | city, cohort_tag |
| consent_viewed | Consent screen is shown | proof_type_requested |
| consent_completed | Consent step is completed | accepted_or_dropped |
| habit_selected | User chooses an eco-action | habit_type |
| proof_requested | Proof or self-attestation step is shown | proof_mode |
| proof_submitted | User submits the action | habit_type, proof_mode |
| points_shown | Reward feedback is shown | points_awarded, variant |
| reward_viewed | User sees the reward screen | brand_category, reward_type |
| reward_claim_requested | User asks to claim a reward | reward_type |
| pilot_opt_in | User joins the follow-up cohort | channel |
| repeat_log_submitted | User logs again in the pilot | day_number, habit_type |
| submission_reviewed | Team completes manual review | status, turnaround_time |
| brand_interest_logged | Brand-side meeting or LOI is logged | partner_type, status |

### Weekly metrics dashboard

1. Landing-to-start conversion
2. Consent completion
3. Habit submission rate
4. Proof or upload drop-off
5. Reward-view rate and reward-claim intent
6. Repeat logging rate
7. 7-day cohort retention
8. 14-day cohort retention
9. Number of brand conversations
10. Number of LOIs or codes secured
11. Manual review cost per submission
12. Manual review time per submission

### What counts as validated learning

Validated learning exists by the end of the sprint if all of the following are true:

1. Users complete the friction step at acceptable levels.
2. At least some users return voluntarily.
3. Brands show willingness to participate economically.
4. Team can explain whether the privacy and validation design is manageable without building full software.

Concrete validation thresholds already supported by the PRD source:

1. Upload / proof drop-off is less than 60 percent.
2. Three brand LOIs or verbal agreements at 10 percent or more.
3. Forty percent of pilot users logging 4 out of 7 days without explicit personalized prodding.

## Content and UX Deliverables

### Chosen MVP type

Clickable prototype

### Screen list

1. **Ad / entry landing screen:** Show the hero value proposition and CTA.
2. **Offer variant screen:** Test plain discount framing against reward-for-action framing.
3. **Minimal details screen:** Capture name, contact, and city.
4. **Consent screen:** Explain what data may be used for proof.
5. **Habit selection screen:** Let the user choose one simple eco-action.
6. **Proof / self-attestation screen:** Allow lightweight submission.
7. **Submission success screen:** Show instant confirmation.
8. **Impact Points screen:** Show points awarded plus a streak teaser.
9. **Reward preview screen:** Show an example partner reward and a claim CTA.
10. **Pilot opt-in screen:** Let the user join WhatsApp or another follow-up channel.
11. **Return / leaderboard screen:** Simulate repeat engagement.

### Primary click path

Landing → Offer → Details → Consent → Habit select → Proof → Points → Reward preview → Pilot opt-in

### What is simulated versus what is real

**Simulated components**

1. Points economy
2. Reward wallet balance
3. Brand catalog depth
4. Leaderboard or streak logic
5. Verification decisioning beyond manual review
6. Live affiliate code generation

**Real components**

1. Traffic source capture
2. Variant assignment
3. Contact capture
4. Consent response logging
5. Habit submission
6. Event instrumentation
7. Manual review outcome
8. Reward-request intent
9. Pilot follow-up enrollment

### How user testing will be run

- **Phase 1:** Use the clickable prototype in moderated walkthroughs to identify confusion, hesitation points, and friction.
- **Phase 2:** Use the same prototype flow in live acquisition tests and recruit users into the manual pilot.
- **Open question:** The exact moderated sample size is not finalized in the source materials. The upstream artifacts define the broader live tests and the 50-user Wizard-of-Oz cohort, but not the moderated-test sample size.

## Technical Approach for MVP-1

### Build options

#### Option A: Native software prototype

- **Description:** Early mobile app with basic logging and reward functionality.
- **Advantages:**
  1. More realistic user experience
  2. Closer to the eventual future product
- **Disadvantages:**
  1. Slower to build
  2. Premature engineering effort
  3. Privacy and compliance burden arrives too early

#### Option B: Clickable prototype plus manual operations

- **Description:** Mobile-first prototype supported by manual review and manual reward operations.
- **Advantages:**
  1. Fastest way to learn
  2. Lower cost
  3. Isolates the core risks before any software build
- **Disadvantages:**
  1. Lower realism
  2. Retention partially depends on manual follow-up

### Recommended option

Option B is the recommended approach.

Reason: The main risk is not whether EcoReward can be coded. The real risk is whether users will do the behavior, whether brands will fund it, and whether validation can remain low-friction and low-cost. A clickable prototype plus manual back-office process answers those questions fastest and avoids overcommitting to app development too early.

### Integrations

- **Confirmed integrations:** None
- **Open questions:**
  1. Should rewards come from direct brand codes or affiliate aggregator networks?
  2. Which analytics stack should be used?
  3. Will any consent-management tooling be needed for later software phases?

### Minimal data storage

Store only:

1. User contact information needed for the pilot
2. City or cohort tag
3. Consent status
4. Habit submissions
5. Review status
6. Points shown
7. Reward request status
8. Event logs

### AI components

- **Recommendation for MVP-1:** No AI component should be included.
- **Reason:** The informing research explicitly warns that deterministic AI verification can destroy unit economics.
- **Failure modes if AI is added too early:**
  1. False positives
  2. False negatives
  3. Cost overruns
  4. Higher privacy friction
  5. Slower approval flows

## Experiment Plan for the Next 2 to 4 Weeks

### Experiment 1: Market risk experiment

- **Hypothesis:** Users will perform a lightweight eco-action or proof step if the reward value is higher than a plain discount.
- **Method:** Run a painted-door landing page with two variants.
- **Sample size:** ₹10,000 spend per variant and approximately 1,000 to 1,500 clicks total per variant.
- **Success criterion:** Proof or upload drop-off is less than 60 percent.
- **Decision rule:** If this passes, proceed to the manual pilot. If this fails, remove explicit habit-proof requirements from the early product and test more passive behaviors instead.

### Experiment 2: Business model risk experiment

- **Hypothesis:** D2C brands will support EcoReward as a performance-only acquisition channel.
- **Method:** Personalized outreach to 30 target brands.
- **Sample size:** 30 brands
- **Success criterion:** Three LOIs or verbal agreements with 10 percent or higher commission, or beta discount support.
- **Decision rule:** If this passes, keep the affiliate-led model. If this fails, do not build the full reward marketplace yet and reassess economics and channel strategy first.

### Optional Experiment 3: Product risk experiment

- **Hypothesis:** Users will return and log repeatedly in a manual social loop.
- **Method:** 50-user WhatsApp Wizard-of-Oz pilot
- **Sample size:** 50 users
- **Success criterion:** 40 percent of users log on 4 of 7 days without explicit personalized daily prodding.
- **Decision rule:** If this passes, the retention loop is promising enough for the software MVP. If this fails, do not assume app automation will fix weak motivation; instead pivot the core loop or rethink the target segment.

## Rollout and Operations

### Who will use it first

The first users will be a curated pilot of urban Tier-1 users matching the Aarav-style persona. On the partner side, the first pilot will include a small number of D2C brands.

### Onboarding flow

Ad or invite → prototype → minimal details → consent → one logged action → reward preview → follow-up enrollment

### Support process

Support is fully manual in MVP-1. The founder or community manager reviews submissions, updates points, answers questions, and sends reward-related follow-up manually.

### Escalation logic

Any confusion around proof, reward eligibility, or data use is handled manually during MVP-1.

## Open Questions, Prioritized

### P0 questions — must answer before build

1. Which exact city wedge should go first: Bengaluru only or multi-city Tier-1?
2. Which exact habit set should be in MVP-1: reusable bottle, public transit, walking, or something else?
3. What exact reward artifact will users see: a mock discount, a closed-beta code request, or a real partner code?
4. What exact proof mode is acceptable in MVP-1: self-attestation only, optional upload, or mixed?
5. What exact consent copy and data policy are legally acceptable for this prototype?

### P1 questions — answer during experiment setup

6. Which D2C categories should go first: beauty, wellness, fashion, or home-care?
7. Should the MVP entry point be web, landing page, WhatsApp, or a sequence using all three?
8. What is the acceptable activation threshold for consent completion?
9. How fast must manual review happen for the reward to feel instant enough?
10. Does the user need a leaderboard or streak to return, or is reward progress enough?

### P2 questions — answer before software MVP

11. Should the long-term product be app-only, or should WhatsApp and web remain permanent channels?
12. What is the exact reward liability model and points economy?
13. What fraud rate is acceptable before deterministic verification becomes necessary?
14. What analytics stack and consent tooling stack should the team standardize on?
15. Is corporate ESG / B2B truly a second wedge, or just a future option?

## Appendix

### Lean Canvas snapshot

- **Problem:** Consumers want sustainability, but face both high effort and green premiums.
- **Users:** Gen Z climate-anxious users and millennial D2C shoppers.
- **Buyer:** Sustainable D2C brands first. Corporate ESG buyers later.
- **Unique value proposition:** Turn daily eco-habits into usable rewards for desirable brands.
- **Solution concept:** One-tap logging, lightweight validation, points, and partner rewards.
- **Channels:** Meta / Instagram, influencer and referral loops, and WhatsApp for the pilot.
- **Revenue:** Affiliate commissions first.
- **Cost risks:** Verification costs, compliance costs, and acquisition costs.
- **Key metrics:** Retention, logging frequency, conversion, LOIs, LTV:CAC

### Assumption stack snapshot

1. Users will accept friction if reward value is compelling.
2. Probabilistic validation can stay cheaper than strict verification.
3. Brands will participate without margin or brand-dilution concerns.
4. The intent-action gap is mainly incentive-driven, not infrastructure-driven.
5. Consent and privacy friction can be reduced enough to preserve activation.
6. Gamified finance behaviors can transfer to eco-behavior.

### Research notes used

This PRD was built strictly from:

1. Step 2 Ideation Pitch / Lean Canvas for ICP framing, UVP, GTM wedge, and early tests
2. Step 0 output for constraints, working assumptions, and open questions
3. Step 1 Opportunity Report for risk stack, feasibility constraints, market logic, and experiment thresholds

### Recommended next move

Treat this as a learning PRD, not a build PRD.

1. Approve the clickable prototype scope
2. Lock the first city
3. Lock the first 2 to 3 habits
4. Run the three experiments
5. Avoid writing production code until the learning thresholds are tested
