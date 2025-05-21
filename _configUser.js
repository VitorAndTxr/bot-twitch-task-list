// ==============================
// User Commands and Responses
// ==============================
/** @type {UserConfig} */
const _userConfig = {
  commands: {
    addTask: ["!task", "!add", "!añadir", "!ajouter", "!追加", "!додати", "!aufgabe"],
    editTask: ["!edit", "!editar", "!modifier", "!編集", "!редагувати", "!bearbeiten"],
    finishTask: ["!done", "!hecho", "!terminé", "!完了", "!готово", "!erledigt", "!feito"],
    deleteTask: ["!delete", "!eliminar", "!supprimer", "!削除", "!видалити", "!löschen", "!excluir"],
    focusTask: ["!focus", "!enfocar", "!concentrer", "!集中", "!фокус", "!fokus", "foco"],
    check: ["!check", "!comprobar", "!vérifier", "!チェック", "!перевірити", "!prüfen"],
    help: ["!help", "!ayuda", "!aide", "!ヘルプ", "!допомога", "!hilfe", "ajuda"],
    additional: ["!credit", "!crédito", "!crédit", "!クレジット", "!кредит", "!kontakt", "creditos"],
  },
  responseTo: {
    EN: {
      addTask: 'Task(s) {message} added!',
      editTask: 'Task {message} updated!',
      finishTask: 'Good job on completing task(s) {message}!',
      deleteTask: 'Task(s) {message} has been deleted!',
      deleteAll: "All of your tasks have been deleted!",
      focusTask: 'Prioritizing your focus on task {message}!',
      check: 'Your current task(s) are: {message}',
      help: "Try these commands - !task !edit !done !delete !check",
      additional:
        "Jujoco is the creator of this bot, check out his Twitch at: https://www.twitch.tv/Jujoco_Dev",
      maxTasksAdded:
        "Maximum number of tasks reached, try deleting old tasks.",
      noTaskFound: "That task doesn't seem to exist, try adding one!",
      invalidCommand: "Invalid command: {message}. Try !help",
    },
    ES: {
      addTask: 'Tarea(s) {message} añadida(s)!',
      editTask: 'Tarea {message} actualizada!',
      finishTask: '¡Buen trabajo completando la(s) tarea(s) {message}!',
      deleteTask: 'La(s) tarea(s) {message} ha sido eliminada(s)!',
      deleteAll: "Todas tus tareas han sido eliminadas!",
      focusTask: 'Priorizando tu enfoque en la tarea {message}!',
      check: 'Tus tareas actuales son: {message}',
      help: "Prueba a usar estos comandos - !añadir !editar !hecho !eliminar !comprobar",
      additional:
        "Jujoco es el creador de este bot, visita su Twitch en: https://www.twitch.tv/Jujoco_Dev",
      maxTasksAdded:
        "Número máximo de tareas alcanzado, intenta eliminar tareas antiguas.",
      noTaskFound: "Esa tarea no parece existir, ¡intenta añadir una!",
      invalidCommand: "Comando inválido: {message}. Prueba !help",
    },
    FR: {
      addTask: 'Tâche(s) {message} ajoutée(s)!',
      editTask: 'Tâche {message} mise à jour!',
      finishTask: 'Bon travail pour avoir terminé la tâche {message}!',
      deleteTask: 'La tâche {message} a été supprimée!',
      deleteAll: "Toutes vos tâches ont été supprimées!",
      focusTask: 'Priorisation de votre focus sur la tâche {message}!',
      check: 'Vos tâches actuelles sont: {message}',
      help: "Essayez d'utiliser ces commandes - !ajouter !modifier !terminé !supprimer !vérifier",
      additional:
        "Jujoco est le créateur de ce bot, consultez son Twitch sur: https://www.twitch.tv/Jujoco_Dev",
      maxTasksAdded:
        "Nombre maximum de tâches atteint, essayez de supprimer les anciennes tâches.",
      noTaskFound:
        "Cette tâche ne semble pas exister, essayez d'en ajouter une!",
      invalidCommand: "Commande invalide: {message}. Essayez !help",
    },
    JP: {
      addTask: 'タスク {message} が追加されました!',
      editTask: 'タスク {message} が更新されました!',
      finishTask: 'タスク {message} を完了しました!',
      deleteTask: 'タスク {message} が削除されました!',
      deleteAll: "すべてのタスクが削除されました!",
      focusTask: 'タスク {message} にフォーカスを当てています!',
      check: '現在のタスクは {message} です',
      help: "これらのコマンドを試してみてください - !追加 !編集 !完了 !削除 !チェック",
      additional:
        "Jujoco はこのボットの作成者です、彼の Twitch をチェックしてください: https://www.twitch.tv/Jujoco_Dev",
      maxTasksAdded:
        "最大タスク数に達しました、古いタスクを削除してみてください。",
      noTaskFound: "そのタスクは存在しないようです、追加してみてください!",
      invalidCommand: "無効なコマンド: {message}。!help を試してみてください",
    },
    UA: {
      addTask: 'Завдання {message} додано!',
      editTask: 'Завдання {message} змінено!',
      finishTask: 'Вітаю з виконанням завдання {message}!',
      deleteTask: 'Завдання {message} видалено!',
      deleteAll: "Всі твої завдання видалено!",
      focusTask: 'Сфокусовано на завданні {message}!',
      check: 'Твої завдання наразі : {message}',
      help: "Спробуй такі команди -!додати !редагувати !готово !видалити !перевірити",
      additional:
        "Jujoco створив цей бот, глянь його стрім : https://www.twitch.tv/Jujoco_Dev",
      maxTasksAdded:
        "Додано максимальну кількість завдань. Спробуй видалити щось старе.",
      noTaskFound: "Це завдання не існує, спробуй додати нове!",
      invalidCommand: "Неправильна команда: {message}. Переглянь !команди",
    },
    DE: {
      addTask: 'Aufgabe(n) {message} hinzugefügt!',
      editTask: 'Aufgabe {message} aktualisiert!',
      finishTask: 'Gut gemacht beim Abschluss der Aufgabe(n) {message}!',
      deleteTask: 'Aufgabe(n) {message} wurde(n) gelöscht!',
      deleteAll: "Alle deine Aufgaben wurden gelöscht!",
      focusTask: 'Priorisiere deine Aufmerksamkeit auf die Aufgabe {message}!',
      check: 'Deine aktuellen Aufgaben sind: {message}',
      help: "Versuche diese Befehle - !aufgabe !bearbeiten !erledigt !löschen !prüfen",
      additional:
        "Jujoco ist der Ersteller dieses Bots, schau dir seinen Twitch-Kanal an: https://www.twitch.tv/Jujoco_Dev",
      maxTasksAdded:
        "Maximale Anzahl an Aufgaben erreicht, versuche alte Aufgaben zu löschen.",
      noTaskFound: "Diese Aufgabe scheint nicht zu existieren, versuche eine hinzuzufügen!",
      invalidCommand: "Ungültiger Befehl: {message}. Versuche !help",
    },
    PTBR: {
      addTask: 'Tarefa(s) {message} acidicionada(s)!',
      editTask: 'Tarefa {message} atualizada(s)!',
      finishTask: 'Finalmente você completou a tarefa {message} hein? Achei que ia ficar ai para sempre 👀 Parabéns, já pode comemorar!! 🥳🎉 ',
      deleteTask: 'Tarefa(s) {message} foi excluída!',
      deleteAll: "Todas as suas tarefas foram excluídas!",
      focusTask: 'Priorizando o seu foco na tarefa {message}!',
      check: 'Sua(s) tarefa(s): {message}',
      help: "Tente os comandos: !add !edit !done !focus !remove !check",
      additional:
        "Jujoco é o criador desse bot de task, veja a Twitch dele em: https://www.twitch.tv/Jujoco_Dev",
      maxTasksAdded:
        "Você chegou ao número máximo de tarefas, tente deletar tarefas antigas usando !clearDone.",
      noTaskFound: "Parece que essa tarefa não existe! Tente adicionar uma nova!",
      invalidCommand: "Comando inválido: {message}. Tente !help",
    },
  },
};