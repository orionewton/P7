""" TESTING GRAND PY BOT SENTENCES """

from ..tools.gpb_answers import Gpb_answers


class TestGp_answers:
    """ Test class creation """

    """ setup_method function called during the Gpb_answers class test """
    def setup_method(self, test_gp_sentences):
        self.gp_sentences = Gpb_answers()
        self.gp_sentences.geo_answers = ["Pas de soucis, c'est ici : "]
        self.gp_sentences.wiki_answers = [
         "J'ai plein de choses à dire sur cet endroit."]

        self.gp_sentences.geo_noresults_answer = "Pourrais-tu reformuler ta " \
                                                 "question je te pris... Je " \
                                                 "n'ai pas bien compris. "

        self.gp_sentences.wiki_noresults_answer = "Je suis vraiment désolé, " \
                                                  "mais je ne connais rien " \
                                                  "dans ces environs."

    def test_gp_sentences(self):
        # expected returned values
        assert self.gp_sentences.show_geo_answer() == "Pas de soucis, c'est " \
                                                       "ici : "

        assert self.gp_sentences.show_wiki_answer() == "J'ai plein de choses" \
                                                       " à dire sur cet " \
                                                       "endroit."

        assert self.gp_sentences.show_geo_noresults_answer() == "Pourrais-tu" \
                                                                " reformuler" \
                                                                " ta questio" \
                                                                "n je te pri" \
                                                                "s... Je n'a" \
                                                                "i pas bien" \
                                                                " compris. "

        assert self.gp_sentences.show_wiki_noresults_answer() == "Je suis vr" \
                                                                 "aiment dés" \
                                                                 "olé, mais " \
                                                                 "je ne conn" \
                                                                 "ais rien d" \
                                                                 "ans ces en" \
                                                                 "virons."
