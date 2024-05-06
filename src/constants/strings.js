export const Strings = {
    appName: "Users Manager App",
    menu: {
        title: "Menu",
        items: {
            account: {
                label: "Compte"
            },
            users: {
                label: "Utilisateurs"
            }
        }
    },
    form: {
        name: {
            label: "Nom",
            missing: "Veuillez saisir votre nom.",
            tooLong: "Le nom doit faire moins de 20 caractères.",
        },
        firstname: {
            label: "Prénom",
            missing: "Veuillez saisir votre prénom",
            tooLong: "Le prénom doit faire moins de 20 caractères."
        },
        mail: {
            label: "E-mail",
            missing: "Veuillez saisir votre email.",
            invalid: "Veuillez saisir une adresse email valide."
        },
        password: {
            label: "Mot de passe",
            missing: "Veuillez saisir votre mot de passe.",
            successUpdate: "Votre mot de passe a bien été modifié !"
        },
        confirmPassword: {
            label: "Confirmation du mot de passe",
            missing: "Veuillez confirmer votre mot de passe.",
        },
        fieldEmpty: "Le champ est vide.",
        passwordsNotMatch: "Les deux mots de passe ne correspondent pas",
        infoSuccessUpdate: "Vos informations ont bien été mises à jour !"
    },
    buttons: {
        deleteAccount: "Supprimer le compte",
        deleteAccountConfirm: "Etes-vous certain de supprimer votre compte ?",
        cancel: "Annuler",
        login: "Connexion",
        logout: "Se déconnecter",
        register: "Inscription",
        infoUpdate: "Modifier le nom/prénom",
        passwordUpdate: "Modifier le mot de passe"
    }
}