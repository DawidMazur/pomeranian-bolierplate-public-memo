import { SingleQuestion } from './SingleQuestion';
import './faq.css';

export function Faq() {
  return (
    <div className="Faq">
      <p>Tutaj znajdź odpowiedzi na najczęściej zadawane pytania</p>

      {/* <div className="faq-item">
        <div className="faq-item-header">
          <img src="/toggle-arrow.svg" alt="arr" />
          <h2 className="faq-item-title">Jak mogę zapisać się na szkolenie?</h2>
        </div>

        <p className="faq-item-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias in
          obcaecati dolores quo! Voluptatum ipsam provident voluptas dicta
          laborum rerum hic, velit neque temporibus impedit ipsa accusantium aut
          ducimus consectetur? Perspiciatis nam ex culpa at unde aspernatur sed
          laboriosam error quas, deleniti ipsam dicta enim eveniet officia
          fugiat ducimus incidunt esse iure repellat quibusdam. Enim corporis
          iusto eius voluptate fugiat. Beatae id esse repudiandae distinctio
          dignissimos, ratione nobis recusandae quia deleniti quae perferendis,
          in explicabo ad, sapiente eligendi dolore culpa natus ut. Voluptatem
          minus culpa eius ducimus possimus sed unde!
        </p>
      </div> */}

      <SingleQuestion
        question="Jak mogę zapisać się na szkolenie?"
        answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias in obcaecati dolores quo! Voluptatum ipsam provident voluptas dicta laborum rerum hic, velit neque temporibus impedit ipsa accusantium aut ducimus consectetur? Perspiciatis nam ex culpa at unde aspernatur sed laboriosam error quas, deleniti ipsam dicta enim eveniet officia fugiat ducimus incidunt esse iure repellat quibusdam. Enim corporis iusto eius voluptate fugiat. Beatae id esse repudiandae distinctio dignissimos, ratione nobis recusandae quia deleniti quae perferendis, in explicabo ad, sapiente eligendi dolore culpa natus ut. Voluptatem minus culpa eius ducimus possimus sed unde!"
      />
      <SingleQuestion
        question="Przykładowe pytanie 2"
        answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias in obcaecati dolores quo! Voluptatum ipsam provident voluptas dicta laborum rerum hic, velit neque temporibus impedit ipsa accusantium aut ducimus consectetur? Perspiciatis nam ex culpa at unde aspernatur sed laboriosam error quas, deleniti ipsam dicta enim eveniet officia fugiat ducimus incidunt esse iure repellat quibusdam. Enim corporis iusto eius voluptate fugiat. Beatae id esse repudiandae distinctio dignissimos, ratione nobis recusandae quia deleniti quae perferendis, in explicabo ad, sapiente eligendi dolore culpa natus ut. Voluptatem minus culpa eius ducimus possimus sed unde!"
      />
    </div>
  );
}
