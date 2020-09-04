(function (module, require) {

	const QuestData = require('../../../modules/QuestData');

	const states = {
		Done: 0,
		PwnedAndy: 1,
		WantToTalkToWarriv: 3,
	};

	module.exports = function (quest, Config, Attack, Pickit, Pather, Town, Misc) {
		const log = QuestData.fetchQuestArray(quest);
		let pwnedAndy = 0;

		if (!log[states.PwnedAndy]) {
			// Already did quest?
			if (me.getQuest(quest.index, 0)) {
				return true; // Done already
			}


			print('Doing andy');
			Town();
			Pather.journeyTo(37);

			Pather.moveTo(22549, 9520);

			const andy = getUnit(1, 156);
			andy.kill();
			pwnedAndy |= andy.dead;
			Town.goToTown(1);


		}
		print('Pwned andy, now what?');

	}
})(module, require);