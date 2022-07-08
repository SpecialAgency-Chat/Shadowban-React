import React, { memo } from "react";
import { Accordion } from "react-bootstrap";
import Icons from "./icons";
import ResultAccordion from "./result-accordion";

const Result = memo(({ username = "", active, resp }) => {
  return (
    <Accordion className="accordion-flush" id="accordion-parent">
      <div id="result-user">
        <div className="d-flex" id="user-status">
          <span className="me-3" id="user_"><Icons active={active[0]} question="user" /></span>
          <div className="text-wrap" id="response">{resp}</div>
        </div>
      </div>
      <hr className="m-0" />
      <ResultAccordion content="Search Suggestion Ban" count="One" description="検索窓にIDを入力した際に検索候補にアカウントが表示されなくなります。" active={active[1]} />
      <ResultAccordion content="Search Ban" count="Two" description="IDで検索をした際にもワードで検索をした際にもそのアカウントが検索結果に表示されることはありません。" active={active[2]} />
      <ResultAccordion content="Ghost Ban" count="Three" description="ユーザーにリプライをした際に通知にもツイートからのリプライ一覧にも全くリプライが表示されなくなります、リプライカウントのみカウントされるため、鍵リプと同等の状態になりますが唯一リプライを閲覧する方法としてリプライしてきたアカウントの「ツイートと返信」タブに移動すると確認できます。" active={active[3]} />
      <ResultAccordion content="Reply Deboosting" count="Four" description="ユーザーにリプライをした際に「さらに返信を表示する」という表示になる通知にリプライが届かなくなります、この場合ツイートからリプライ一覧を見るとリプライを確認することができます。" active={active[4]} />
    </Accordion>
  )
})

export default Result;